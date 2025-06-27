import Button from 'components/atoms/a-button';
import Input from 'components/atoms/a-input';
import Label from 'components/atoms/a-input-label';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { path } from 'ramda';
import { Range } from 'react-range';
import { yupResolver } from '@hookform/resolvers/yup';

import useFetchHook from 'hooks/useFetchHook';
import SearchEventSchema from 'lib/validationSchema/SearchEventSchema';
import LabeledInput from '../m-labeled-input';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
interface SearchProps {
  eventType?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  eventCenterType?: string;
}
const Search = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const [eventsType, getEventType] = useFetchHook('event-center/get-all-event-types');
  const [eventsCenterType, getEventCenterType] = useFetchHook(
    'event-center/get-all-event-center-types',
  );
  useEffect(() => {
    getEventType.Get();
    getEventCenterType.Get();
  }, []);
  const defaultEventType = query.get('eventType') || '';
  const defaultLocation = query.get('location') || '';
  const defaultMinPrice = query.get('minPrice') || '';
  const defaultMaxPrice = query.get('maxPrice') || '';
  const [values, setValues] = useState([
    Number(defaultMinPrice) || 100000,
    Number(defaultMaxPrice) || 9000000,
  ]);
  const [selectedEventType, setSelectedEventType] = useState(defaultEventType);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SearchProps>({
    resolver: yupResolver(SearchEventSchema),
  });
  useEffect(() => {
    setValue('eventType', defaultEventType);
    setValue('location', defaultLocation);
    setValue('minPrice', defaultMinPrice ? Number(defaultMinPrice) : undefined);
    setValue('maxPrice', defaultMaxPrice ? Number(defaultMaxPrice) : undefined);
  }, [defaultEventType, defaultLocation, defaultMinPrice, defaultMaxPrice, setValue]);
  const onSubmit = (updatedFilter: Partial<SearchProps>) => {
    console.log(updatedFilter);
    const selectedEventTypeData = eventsType?.data.find(
      (item: { id: string }) => item.id === updatedFilter.eventType,
    );

    const eventTypeName = selectedEventTypeData?.name;
    const currentParams = Object.fromEntries(query.entries());

    const updatedParams: Record<string, string | number | undefined> = {
      ...currentParams,
      ...updatedFilter,
      ...(eventTypeName && { eventTypeName }),
    };
    const searchParams = new URLSearchParams();

    Object.entries(updatedParams).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        searchParams.append(key, String(value));
      }
    });

    navigate(`/search?${searchParams.toString()}`);
  };
  return (
    <div className="hidden text-left font-[inter] md:block md:w-[30%] ">
      <div className="bg-[#F8F8F8] p-10 md:p-5 lg:p-10">
        <p className="text-xl font-bold text-black">Your Search</p>
        <form onSubmit={handleSubmit(onSubmit)} className="py-3">
          <div>
            {/* <LabeledInput
            label="Event Type"
            name="eventType"
            id="eventType"
            type="text"
            htmlFor="eventType"
            register={register}
            labelClassName="text-sm font-semibold text-black"
            placeholder="Wedding"
            className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
            error={path(['evenType', 'message'], errors)}
          /> */}
            <Label
              htmlFor="eventType"
              label="Event Type"
              className="text-sm font-semibold text-black"
            />
            <select
              // name="eventType"
              className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
              id="eventType"
              {...register('eventType')}
            >
              <option value="">select event type</option>

              {eventsType?.data
                ?.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
                .map((item: { name: string; id: string }) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <Label
              className="text-sm font-semibold text-black"
              htmlFor="eventCenterType"
              label="Event Center Type"
            />
            <select
              id="eventCenterType"
              className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
              {...register('eventCenterType')}
            >
              <option value="">select event center type</option>
              {eventsCenterType?.data
                ?.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name))
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
            labelClassName="text-sm font-semibold text-black"
            placeholder="Lagos"
            className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
            error={path(['location', 'message'], errors)}
          />

          <LabeledInput
            label="Minimum Price"
            name="minPrice"
            id="minPrice"
            type="number"
            htmlFor="minPrice"
            register={register}
            labelClassName="text-sm font-semibold text-black"
            placeholder="&#8358;20k - &#8358;40k"
            className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
            error={path(['minPrice', 'message'], errors)}
          />
          <LabeledInput
            label="Maximum Price"
            name="maxPrice"
            id="maxPrice"
            type="number"
            htmlFor="maxPrice"
            register={register}
            labelClassName="text-sm font-semibold text-black"
            placeholder="&#8358;20k - &#8358;40k"
            className="w-full rounded-lg bg-white px-5 py-2 text-sm font-semibold"
            error={path(['maxPrice', 'message'], errors)}
          />

          <Button
            type="submit"
            btnType="primary"
            label="Search"
            className=" mt-5 w-full text-sm font-semibold"
          />
        </form>
      </div>
      <div className="p-10 md:p-5 lg:p-10">
        <h1 className="pb-3 text-xl font-bold text-black">Popular filters</h1>
        {['Wedding', 'Dinner Parties', 'Meeting', 'Networking'].map((type) => (
          <div key={type} className="flex items-center justify-start gap-3 pb-2">
            <Input
              type="radio"
              name="eventTypeFilter"
              id={type}
              checked={selectedEventType === type}
              handleChange={() => {
                setSelectedEventType(type);
                onSubmit({ eventType: type });
              }}
            />
            <Label htmlFor={type} label={type} className="text-sm font-semibold text-[#767676]" />
          </div>
        ))}

        <div>
          <h1 className="pb-3 text-xl font-bold text-black">Price Range</h1>
          <Range
            step={10}
            min={1}
            max={50000000}
            values={values}
            onChange={(newValues) => {
              setValues(newValues);
              onSubmit({ minPrice: newValues[0], maxPrice: newValues[1] });
            }}
            renderTrack={({ props, children }) => {
              const minPercentage = (values[0] / 50000000) * 100;
              const maxPercentage = (values[1] / 50000000) * 100;

              return (
                <div {...props} className="relative h-2 w-full rounded-full bg-blue-300">
                  <div
                    className="absolute h-2 rounded-full bg-blue-500"
                    style={{
                      left: `${minPercentage}%`,
                      width: `${maxPercentage - minPercentage}%`,
                    }}
                  />
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => (
              <div {...props} className="h-2 w-2 rounded-full  bg-white shadow-lg" />
            )}
          />
          <div className="mt-4 grid grid-cols-2 gap-x-5">
            <div>
              <Label
                htmlFor="minPrice"
                label="Min Price"
                className="text-sm font-semibold text-[#767676]"
              />
              <input
                type="number"
                className="w-full rounded-sm border border-[#767676] px-2 py-1 text-xs font-semibold text-black"
                value={values[0]}
                onChange={(e) => setValues([Number(e.target.value), values[1]])}
              />
            </div>
            <div>
              <Label
                htmlFor="maxPrice"
                label="Max Price"
                className="text-sm font-semibold text-[#767676]"
              />
              <input
                type="number"
                className="w-full rounded-sm border border-[#767676] px-2 py-1 text-xs font-semibold text-black"
                value={values[1]}
                onChange={(e) => setValues([values[0], Number(e.target.value)])}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="pb-3 pt-5 text-xl font-bold text-black">Guest Rating</h1>
          <div className="flex items-center justify-start gap-3 pb-2">
            {' '}
            <Input
              type="radio"
              name="any"
              id="any"
              className="text-sm font-semibold text-[#767676]"
            />
            <Label htmlFor="any" label="Any" />
          </div>
          <div className="flex items-center justify-start gap-3 pb-2">
            {' '}
            <Input
              type="radio"
              name="excellent"
              id="excellent"
              className="text-sm font-semibold text-[#767676]"
            />
            <Label htmlFor="excellent" label="Excellent" />
          </div>
          <div className="flex items-center justify-start gap-3 pb-2">
            {' '}
            <Input
              type="radio"
              name="very"
              id="very"
              className="text-sm font-semibold text-[#767676]"
            />
            <Label htmlFor="very" label="Very good" />
          </div>
          <div className="flex items-center justify-start gap-3 pb-2">
            {' '}
            <Input
              type="radio"
              name="good"
              id="good"
              className="text-sm font-semibold text-[#767676]"
            />
            <Label htmlFor="good" label="Good" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
