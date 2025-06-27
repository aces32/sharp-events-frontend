import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

interface CarouselProps {
  locations: { name: string; id: string }[];
}

function Carousel({ locations }: CarouselProps) {
  const navigate = useNavigate();
  const handleClick = (state: string) => {
    navigate(`/search?location=${state}`);
  };
  return (
    <div className=" py-8">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        centeredSlides
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={2}
        centerInsufficientSlides
        modules={[Autoplay, Pagination]}
        id="carousel"
      >
        {locations?.map((location) => (
          <SwiperSlide key={location.id} className="pb-8">
            <div
              className="  m-3 flex h-80 w-auto cursor-pointer flex-col rounded-3xl bg-[url('/src/assets/images/location.png')] bg-cover  lg:w-60"
              role="none"
              onClick={() => handleClick(location.name)}
            >
              <div className="flex justify-end pr-8 pt-3">
                <div className="w-20 rounded-xl border bg-white p-1 text-center">
                  <p className="text-sm">{location.name}</p>
                </div>
              </div>
              <div className="flex h-60 content-end font-semibold">
                <p className="self-end pl-3 text-[0.9rem] text-white">Wedding, Dinner Parties...</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
