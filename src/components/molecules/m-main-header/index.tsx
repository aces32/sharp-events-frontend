import LabeledInput from 'components/molecules/m-labeled-input';
import { useForm } from 'react-hook-form';
import { path } from 'ramda';
import SearchIconBold from 'assets/Icon/SearchIcon';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import SearchEventSchema from 'lib/validationSchema/SearchEventSchema';
import useFetchHook from 'hooks/useFetchHook';
import { useEffect } from 'react';
import Label from 'components/atoms/a-input-label';

interface MainHeaderProps {
  eventCenterType: string;
  eventType: string;
  location: string;
  minPrice: string;
  maxPrice: string;
}
const MainHeader = () => {
  const [eventsType, getEventType] = useFetchHook('event-center/get-all-event-types');
  const [eventsCenterType, getEventCenterType] = useFetchHook(
    'event-center/get-all-event-center-types',
  );
  useEffect(() => {
    getEventType.Get();
    getEventCenterType.Get();
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MainHeaderProps>({ resolver: yupResolver(SearchEventSchema) });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (val: any) => {
    const selectedEventTypeName = eventsType?.data.find(
      (item: { id: string }) => item.id === val.eventType,
    )?.name;

    const queryParams: Record<string, string> = {
      ...(val.eventType && { eventType: val.eventType }),
      ...(selectedEventTypeName && { eventTypeName: selectedEventTypeName }),
      ...(val.eventCenterType && { eventCenterType: val.eventCenterType }),
      ...(val.location && { location: val.location }),
      ...(val.minPrice && { minPrice: val.minPrice }),
      ...(val.maxPrice && { maxPrice: val.maxPrice }),
    };

    const searchParams = new URLSearchParams(queryParams).toString();

    navigate(`/search?${searchParams}`);
  };

  return (
    <section className="px-7 py-5">
      <section className="space-y-4 rounded-3xl bg-primarybg p-3  md:p-10 lg:p-10">
        <p className="w-fit  rounded-md bg-[#C4FCE4] p-2 font-Inter text-[1.5rem] font-bold leading-[29.05px] text-[#168666]">
          Discover
        </p>
        <div className=" flex flex-wrap justify-between">
          <div className=" space-y-3 lg:w-3/5 lg:space-y-0">
            <p className="w-full font-Inria-Serif text-[3.5rem] font-bold  leading-[4.796rem]  text-black lg:text-[6.875rem] lg:leading-[131.89px]">
              <span id="line">
                A <span className="text-primaryText">SPACE</span> FOR{' '}
              </span>
              <span id="line">EVERY </span>
              <span id="line" className="text-primaryText">
                MOMENT
              </span>{' '}
            </p>
            <p className="font-Roboto  text-[1.2rem] font-semibold leading-[28.13px] text-black md:text-[1.5rem]">
              Plan and book your perfect space for your next <br className="hidden lg:block" />
              adventure{' '}
            </p>
          </div>
          <div className="mt-7 w-full rounded-3xl bg-customformbg p-5  lg:w-[35%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-0 divide-y-2 divide-[#9F9EBB]"
            >
              <div>
                <Label
                  htmlFor="eventType"
                  label="Event Type"
                  className="font-Inter text-[1.25rem] font-bold text-black"
                />
                <select
                  // name="eventType"
                  className="h-[20px] w-full bg-transparent text-[1rem] font-semibold leading-[19.36px] outline-none  placeholder:text-[#808080]"
                  id="eventType"
                  {...register('eventType')}
                >
                  <option value="">select event type</option>

                  {eventsType?.data
                    ?.sort((a: { name: string }, b: { name: string }) =>
                      a.name.localeCompare(b.name),
                    )
                    .map((item: { name: string; id: string }) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <Label
                  className="flex w-full flex-col space-y-1 pt-4 font-Inter text-[1.25rem] font-bold text-black"
                  htmlFor="eventCenterType"
                  label="Event Center Type"
                />
                <select
                  id="eventCenterType"
                  className="h-[20px] w-full bg-transparent text-[1rem] font-semibold leading-[19.36px] outline-none  placeholder:text-[#808080]"
                  {...register('eventCenterType')}
                >
                  <option value="">select event center type</option>
                  {eventsCenterType?.data
                    ?.sort((a: { name: string }, b: { name: string }) =>
                      a.name.localeCompare(b.name),
                    )
                    .map((item: { name: string; id: string }) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <LabeledInput
                label="Location"
                name="location"
                id="location"
                type="text"
                htmlFor="location"
                register={register}
                labelClassName="flex w-full flex-col py-4 font-Inter text-[1.25rem] space-y-1 font-bold text-black"
                placeholder="Enter a city or address"
                className="h-[20px] w-full bg-transparent text-[1rem] font-semibold leading-[19.36px] outline-none  placeholder:text-[#808080]"
                error={path(['location', 'message'], errors)}
              />

              <LabeledInput
                label="Minimum Price"
                name="minPrice"
                id="minPrice"
                type="number"
                htmlFor="minPrice"
                register={register}
                labelClassName="flex w-full flex-col py-4 font-Inter text-[1.25rem] space-y-1 font-bold text-black"
                placeholder="20k"
                className="h-[20px] w-full bg-transparent text-[1rem] font-semibold leading-[19.36px] outline-none  placeholder:text-[#808080]"
                error={path(['minPrice', 'message'], errors)}
              />
              <LabeledInput
                label="Maximum Price"
                name="maxPrice"
                id="maxPrice"
                type="number"
                htmlFor="maxPrice"
                register={register}
                labelClassName="flex w-full flex-col py-4 font-Inter text-[1.25rem] space-y-1 font-bold text-black"
                placeholder="40k"
                className="h-[20px] w-full bg-transparent text-[1rem] font-semibold leading-[19.36px] outline-none  placeholder:text-[#808080]"
                error={path(['maxPrice', 'message'], errors)}
              />
              <div className="p-4">
                <button
                  type="submit"
                  className="flex w-full  justify-center rounded-2xl bg-primaryText p-4  text-white drop-shadow-lg hover:brightness-150"
                >
                  {' '}
                  <i className="pt-1">
                    <SearchIconBold />
                  </i>
                  <span className="font-Inter  text-[2rem] font-bold">Submit</span>{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainHeader;
