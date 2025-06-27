/* eslint-disable tailwindcss/no-custom-classname */

import useFetchHook from 'hooks/useFetchHook';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowLeftCircle, BsArrowRightCircle, BsGeoAltFill } from 'react-icons/bs';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import { FaEdit } from 'react-icons/fa';
import ViewEventAddress from 'components/organisms/o-viewEventAddress';
import ViewEventFacilites from 'components/organisms/o-viewEventFacilities';
import EventDetailsVideo from 'components/molecules/m-event-details-video';
import EventDetails360Tour from 'components/molecules/m-event-details-360-tour';

const ViewEvent = () => {
  const [data, fetchData] = useFetchHook('event-center/get-event-center-by-id');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchData.GetPayloadWithId(id).then((datas: any) => setImage(datas?.data?.images?.at(0)?.url));
  }, [id]);
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

  return (
    <section className=" space-y-5  p-5 ">
      <DashboardHeader
        header="MY Event Center"
        title="Customize event center settings to suit your needs, including layout, services, and integrations"
      />

      <div className=" w-full rounded-lg bg-white px-3 py-9 lg:px-6 ">
        <div className="flex w-full items-center justify-between pb-5">
          <div>
            <p className="font-Rubik text-3xl font-bold capitalize text-[#000000]">
              {data?.data.name}
            </p>

            <p className="flex space-x-3 ">
              <span>
                <BsGeoAltFill className="mt-1 text-primary" />
              </span>{' '}
              <span className="font-Rubik text-sm font-medium text-[#00000066]">
                {data?.data?.address}
              </span>
            </p>
          </div>
          <button
            type="button"
            aria-label="close"
            onClick={() => navigate(`/dashboard/admin/edit-event/${data?.data?.id}`)}
            className="item-center flex gap-1 rounded-lg bg-[#008000] px-10 py-4 font-Rubik text-xs font-semibold text-white"
          >
            Edit <FaEdit />
          </button>
        </div>

        <div className=" flex  items-center justify-center">
          <img src={image} alt="" className="h-[320px] w-full rounded-[8px] object-cover" />
        </div>

        <div className="relative px-6 py-4">
          <Swiper
            // @ts-ignore
            slidesPerView={3}
            spaceBetween={5}
            centerInsufficientSlides
            // @ts-ignore

            watchSlidesVisibility
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            autoHeight
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            {data?.data?.images?.map((item: any) => (
              <SwiperSlide
                key={item?.id}
                className="cursor-pointer"
                onClick={() => setImage(item?.url)}
              >
                <img
                  src={item?.url}
                  alt=""
                  className="h-[100px] w-full rounded-[8px] object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <BsArrowLeftCircle className="arrow-left absolute left-0 top-10 text-lg font-[900] text-primary" />
          <BsArrowRightCircle className="arrow-right absolute right-0 top-10 text-lg font-[900] text-primary" />
        </div>
        <div className="my-5">
          <h3 className="font-Rubik text-2xl font-bold">Event Center Description</h3>
          <p
            className="font-Rubik text-base font-bold text-[#717070]"
            dangerouslySetInnerHTML={{
              __html: data?.data?.description,
            }}
          />
        </div>
        {/* <div className="space-y-8"> */}
        <h3 className="font-Rubik text-2xl font-bold">Event Center Details</h3>

        <div className=" grid grid-cols-2 gap-6 md:gap-2">
          <div className="grid grid-cols-4 ">
            <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Event Center ID</p>
            <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
              {' '}
              ₦{data?.data?.id ?? 'NA'}
            </p>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Space Type</p>
            <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
              {' '}
              {data?.data?.types.name ?? 'NA'}
            </p>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Price</p>
            <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
              {' '}
              {data?.data?.price ?? 'NA'}
            </p>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Year Built</p>
            <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
              {' '}
              {data?.data?.yearBuilt ?? 'NA'}
            </p>
          </div>
          <div className="grid grid-cols-4 ">
            <p className="col-span-3 font-Rubik text-[0.75rem] font-semibold">Capacity</p>
            <p className="font-Rubik text-[0.625rem]  font-semibold text-[#717070]">
              {' '}
              {data?.data?.capacity ?? 'NA'}
            </p>
          </div>
        </div>
        <ViewEventAddress address={data?.data} />
        <ViewEventFacilites facilities={data?.data} />
        <EventDetailsVideo video={data?.data?.video360TourUrl} />
        <EventDetails360Tour video={data?.data?.video360TourUrl} />
      </div>
    </section>
  );
};

export default ViewEvent;
