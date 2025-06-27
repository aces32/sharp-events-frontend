/* eslint-disable no-nested-ternary */
import useFetchHook from 'hooks/useFetchHook';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'components/atoms/a-button';
import BookEvent from 'components/molecules/m-book-event';
import HomeWrapper from 'hoc/home-wrapper';
import EventDetailsFeature from 'components/organisms/o-event-details-feature';
import EventDetailsAddress from 'components/organisms/o-event-details-address';
import EventDetailsDescription from 'components/organisms/o-event-details-description';
import EventDetailsSummary from 'components/organisms/o-event-details-sumary';
import EventDetailsVideo from 'components/molecules/m-event-details-video';
import EventDetails360Tour from 'components/molecules/m-event-details-360-tour';
import EventDetailsReview from 'components/organisms/o-event-details-review';
import CustomCalendar from 'components/molecules/m-custom-calendar';
import SpecialMyTabs from 'hoc/special-tab';
import Input from 'components/atoms/a-input';
import SendIcon from 'assets/Icon/sendIcon';
import BookIcon from 'assets/Icon/book';
import UserManager from 'assets/images/event-manager.png';
import CallIcon from 'assets/Icon/call';
import { randomRating, satisfactionScale } from 'utils';
import EventCenterDetailsImage from 'components/organisms/o-event-center-details-images';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import NearByCenter from 'components/molecules/m-nearByCenter';
import { Controller, useForm } from 'react-hook-form';
import { path } from 'ramda';
import { toast } from 'react-toastify';

const EventDetails = () => {
  const [data, fetchData] = useFetchHook('event-center/get-event-center-by-id');
  const [, tourRequest] = useFetchHook('event-tour/request');
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchData.GetPayloadWithId(id);
  }, [id]);
  const {
    formState: { errors },
    control,
    setValue,
    register,
    handleSubmit,
    // reset,
  } = useForm();
  const onSubmit = async (val: any) => {
    console.log(val);
    const type = val.tourType.toUpperCase();
    try {
      const response = await tourRequest.Post({
        name: val.name,
        phone: val.phone,
        message: val.message,
        tourDate: val.date,
        tourTime: val.time,
        tourType: type,
        eventCenterId: id,
        email: val.email,
      });
      console.log(response);
      toast(response?.message);
    } catch (error) {
      console.error('Error approving tour:', error);
    }
  };

  return (
    <HomeWrapper>
      <BookEvent isOpen={isOpen} setIsOpen={setIsOpen} id={id as string} name={data?.data?.name} />
      <section className="space-y-5 ">
        <div className="flex items-center justify-center  bg-primarybg py-8">
          <div className=" w-[95%] space-y-4 xl:w-[90%] ">
            <div className="flex justify-between">
              <div className="space-y-3 ">
                <div>
                  <p className=" text-[1.5rem] font-[700] capitalize text-black">
                    {data?.data?.name}
                  </p>
                  <p className=" text-[0.688rem] text-[#717070]">{data?.data?.address}</p>
                </div>
                <p
                  className={`text-[0.938rem] font-semibold ${
                    Number(randomRating) <= 1
                      ? 'text-red-600'
                      : Number(randomRating) > 1 && Number(randomRating) <= 2
                      ? 'text-yellow-600'
                      : 'text-green-600'
                  }`}
                >
                  {satisfactionScale(Number(randomRating))}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[1.25rem] font-bold text-black ">
                  {' '}
                  ₦{data?.data?.price?.toLocaleString()}
                </p>
              </div>
            </div>
            <EventCenterDetailsImage eventCenterImages={data?.data?.images} />
            <EventDetailsSummary
              eventCenterTypes={data?.data}
              rating={satisfactionScale(Number(randomRating))}
            />
          </div>
        </div>
      </section>
      <section className="py-6 lg:flex lg:items-center lg:justify-center ">
        <div className=" justify-between  lg:flex lg:w-[95%] xl:w-[90%]">
          <div className=" space-y-4 divide-y-[0.12rem] divide-[#717070] px-5 lg:w-[55%] lg:px-0 xl:w-3/5">
            <div className="space-y-4">
              <p className="font-Rubik text-[0.875rem] font-bold"> Event Description</p>
              <div
                className=" font-Rubik text-[0.813rem] text-[#717070]"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: data?.data?.description,
                }}
              />
            </div>
            <EventDetailsDescription
              rating={satisfactionScale(Number(randomRating))}
              eventCenterTypes={data?.data}
            />
            <EventDetailsAddress eventCenterLocations={data?.data} />
            <EventDetailsFeature facilities={data?.data?.facilities} />
            <EventDetailsVideo video={data?.data?.video360TourUrl} />
            <EventDetails360Tour video={data?.data?.video360TourUrl} />
            <div className="hidden lg:block">
              <EventDetailsReview />
            </div>
            <div className="hidden lg:block">
              <NearByCenter eventCenterLocations={data?.data} />
            </div>
          </div>
          <div className=" space-y-6 px-5 lg:w-2/5 lg:pr-3 xl:w-[35%] xl:px-0">
            <p className="font-Rubik  text-[0.875rem] font-bold">Schedule a tour</p>
            <p className="font-Rubik text-[0.688rem] font-semibold">Choose your preferable day </p>

            <form
              className="mt-5 flex w-full flex-col items-center gap-3 text-left"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CustomCalendar setValue={setValue} name="date" />
              <div className="">
                <Controller
                  name="tourType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <SpecialMyTabs
                      {...field}
                      tabList={[
                        { name: 'physical', id: '1' },
                        { name: 'virtual', id: '2' },
                      ]}
                      notActiveClass="font-bold font-Rubik text-black text-[0.688rem] w-[8rem] py-2 rounded-xl border border-[#717070]"
                      activeClass="font-bold font-Rubik text-primary text-[0.688rem] w-[8rem] py-2 rounded border border-primary"
                    />
                  )}
                />
              </div>{' '}
              <Input
                type="time"
                name="time"
                register={register}
                className="w-full rounded-md border-[0.1rem] border-[#717070] p-2 "
                error={path(['time', 'message'], errors)}
              />
              <Input
                type="text"
                name="name"
                placeholder="Name"
                register={register}
                className="w-full rounded-md border-[0.1rem] border-[#717070] p-2 font-Rubik font-bold placeholder:text-[#717070] "
                error={path(['name', 'message'], errors)}
              />
              <Input
                type="number"
                name="phone"
                placeholder="Phone"
                register={register}
                className="w-full rounded-md border-[0.1rem] border-[#717070] p-2 font-Rubik font-bold placeholder:text-[#717070] "
                error={path(['phone', 'message'], errors)}
              />
              <Input
                type="text"
                name="email"
                placeholder="Email"
                register={register}
                className="w-full rounded-md border-[0.1rem] border-[#717070] p-2 font-Rubik font-bold placeholder:text-[#717070] "
                error={path(['email', 'message'], errors)}
              />
              <textarea
                rows={10}
                placeholder="Enter your message here"
                {...register('message')}
                className="w-full rounded-md border-[0.1rem] border-[#717070] p-2 font-Rubik font-bold placeholder:text-[#717070] "
              />
              <div className="flex w-full flex-row items-center gap-[5px]">
                <Input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  className="size-[14px] cursor-pointer rounded-[4px] border border-primary"
                />
                <p className="font-Rubik text-[0.688rem] font-semibold text-black">
                  By submitting this form i agree to Terms of Use
                </p>
              </div>
              <Button
                type="submit"
                label="Submit a Tour Request"
                icon={<SendIcon />}
                className="w-full font-Rubik text-[0.9rem] font-bold "
                buttonIconClass="inline-flex justify-center space-x-2 w-full py-2"
              />
            </form>
            <p className="font-Rubik text-[0.75rem] font-semibold text-[#717070]">
              Satisfied with what you see?
            </p>
            <Button
              type="button"
              label="Book Now"
              icon={<BookIcon />}
              handleClick={() => setIsOpen(true)}
              className="w-full font-Rubik text-[0.9rem] font-bold "
              buttonIconClass="inline-flex justify-center  space-x-2 w-full py-2"
            />
            <p className="font-Rubik text-[0.688rem] font-semibold text-black">
              Get More Information
            </p>

            <div className=" flex space-x-2">
              <img src={UserManager} alt="manager pic" />
              <div className="space-y-2">
                <p className="font-Rubik text-[0.75rem] font-semibold leading-[0.889rem] text-black">
                  Buhari Sulaimon
                </p>
                <div className="flex space-x-2 font-Rubik text-[0.75rem] font-semibold leading-[0.889rem] text-[#717070]">
                  {' '}
                  <CallIcon /> <p>+2348125760172</p>
                </div>
                <p className="font-Rubik text-[0.75rem] font-semibold leading-[0.889rem] text-black">
                  View Listings
                </p>
              </div>
            </div>
            <Button
              type="submit"
              label="Contact Agent"
              icon={<SendIcon />}
              btnType="secondary"
              className="w-full rounded-lg border-[0.063rem] border-black bg-white font-Rubik text-[0.9rem] font-bold text-black  "
              buttonIconClass="inline-flex justify-center space-x-2 w-full py-2"
            />
          </div>
        </div>
      </section>
      <div className="block px-5 lg:hidden">
        <EventDetailsReview />
      </div>
      <div className="block px-5 lg:hidden">
        <NearByCenter eventCenterLocations={data?.data} />
      </div>
    </HomeWrapper>
  );
};
export default EventDetails;
