/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useRef } from 'react';
import DisplayAllEventImages from 'components/molecules/m-display-all eventcenter-images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

interface ImagesProps {
  eventCenterImages: Array<{
    id: string;
    url: string;
  }>;
}

const EventCenterDetailsImage = ({ eventCenterImages }: ImagesProps) => {
  const [isOpenImages, setIsOpenImages] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setIsAtEnd(false);
      setIsAtStart(swiperRef.current.isBeginning);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setIsAtStart(false);
      setIsAtEnd(swiperRef.current.isEnd);
    }
  };
  return (
    <>
      <DisplayAllEventImages
        isOpen={isOpenImages}
        setIsOpen={setIsOpenImages}
        eventCenterImages={eventCenterImages}
      />
      <div className=" hidden space-x-4 pt-3 md:flex">
        <div className="w-[90%] overflow-hidden">
          <img
            src={eventCenterImages?.at(0)?.url}
            alt=""
            className=" h-[24.313rem] w-full rounded-lg object-cover "
          />
        </div>
        <div className="relative grid grid-cols-2 gap-2">
          {eventCenterImages?.slice(1, 5)?.map((images: any) => (
            <div key={images?.id} className=" ">
              <img
                src={images?.url}
                alt=""
                className=" h-[11.87rem] w-full  rounded-lg object-cover "
              />
            </div>
          ))}
          {eventCenterImages?.length > 5 && (
            <button
              type="button"
              onClick={() => setIsOpenImages(true)}
              className="absolute right-5 top-80 rounded-md bg-slate-600 p-2 text-[0.688rem] font-semibold text-white"
            >
              {' '}
              See All {eventCenterImages?.length} Photos
            </button>
          )}
        </div>
      </div>
      <div className="relative md:hidden">
        {!isAtStart && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 top-14 flex size-10  items-center justify-center rounded-full border border-[#DFEAF2] bg-white p-3 shadow-lg transition "
          >
            <FaChevronRight className=" rotate-180 text-xl text-primaryText" />
          </button>
        )}

        {!isAtEnd && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-14 flex size-10  items-center justify-center rounded-full border border-[#DFEAF2] bg-white p-3 shadow-lg transition"
          >
            <FaChevronRight className="text-xl text-primaryText" />
          </button>
        )}
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsAtStart(swiper.isBeginning);
            setIsAtEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          className="w-4/5"
        >
          {eventCenterImages?.map((images) => (
            <SwiperSlide key={images?.id}>
              <img
                src={images?.url}
                alt="event pic"
                className="size-full rounded-md object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default EventCenterDetailsImage;
