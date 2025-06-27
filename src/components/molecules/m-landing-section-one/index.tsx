/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable tailwindcss/no-custom-classname */
import Memory from 'assets/images/memory.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const LandingSectionOne = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

  return (
    <section className="px-7 py-5">
      <section className="flex flex-wrap justify-center md:justify-center lg:justify-between lg:p-10">
        <div className="flex size-full items-center justify-center lg:w-[45%]">
          <img src={Memory} alt="memory" className="object-fit" />
        </div>
        <div className=" w-full pt-8 lg:w-1/2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            centerInsufficientSlides
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoHeight
          >
            <SwiperSlide className="relative mb-3  cursor-pointer space-y-4 pb-10 lg:space-y-8 ">
              <p className="font-Roboto-Slab  text-[2rem] font-bold leading-[2.638rem] text-[#434343] lg:text-[3rem] lg:leading-[63.3px]">
                Building Connection between you and your memories
              </p>
              <p className="font-Roboto  text-[1.5rem] font-bold leading-[1.758rem] text-secondaryText2 lg:text-[2rem] lg:leading-[37.5px]">
                Explore a world of venue
              </p>

              <p className="h-[6rem] font-Roboto  text-[1rem] font-medium leading-[28.13px] text-black lg:text-[1.5rem]">
                Discover unique spaces, from state-of-the-art studios to unconventional rooms and
                residences, perfect for your next project or event.
              </p>
            </SwiperSlide>
            <SwiperSlide className="relative mb-3   cursor-pointer space-y-4  pb-10 lg:space-y-8 ">
              <p className="font-Roboto-Slab  text-[2rem] font-bold leading-[2.638rem] text-[#434343] lg:text-[3rem] lg:leading-[63.3px]">
                Providing space for all your events and adventures
              </p>
              <p className="font-Roboto  text-[1.5rem] font-bold leading-[1.758rem] text-secondaryText2 lg:text-[2rem] lg:leading-[37.5px]">
                Where your stories begin
              </p>

              <p className="h-[6rem] font-Roboto  text-[1rem] font-medium leading-[28.13px] text-black lg:text-[1.5rem]">
                Explore extraodinary venues: From beautiful and grand halls, open spaces to cutting
                edge studios.Find the perfect venues for your next event or project
              </p>
            </SwiperSlide>
          </Swiper>

          <IoIosArrowDropleftCircle className="arrow-left absolute left-[35%]  text-5xl  font-[900] text-primary lg:bottom-10 lg:left-0" />
          <IoIosArrowDroprightCircle className="arrow-right absolute left-[50%] text-5xl font-[900] text-primary lg:bottom-10 lg:left-16" />
        </div>
      </section>
    </section>
  );
};

export default LandingSectionOne;
