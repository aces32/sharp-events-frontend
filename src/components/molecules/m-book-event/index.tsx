/* eslint-disable import/no-extraneous-dependencies */
import SpecialModal from 'hoc/special-modal';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFetchHook from 'hooks/useFetchHook';
import { DateRange } from 'react-date-range';
import { enUS } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import Button from 'components/atoms/a-button';
import { path } from 'ramda';
import Toast from 'components/atoms/a-Toast';
import bookEventSchema from 'lib/validationSchema/book-event';
import { yupResolver } from '@hookform/resolvers/yup';
import LabeledInput from '../m-labeled-input';

interface BookingProps {
  id: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
}

const BookEvent = ({ id, isOpen, setIsOpen, name }: BookingProps) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
      color: '#EFF2F7',
    },
  ]);
  const [, postBooking] = useFetchHook('EventBooking/BookEventCenter');
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(bookEventSchema),
  });
  const onSubmit = async (val: any) => {
    const response = await postBooking.Post({
      eventCenterId: id,
      bookingDates: [
        {
          eventStartDate: state[0].startDate,
          eventEndDate: state[0].endDate,
        },
      ],
      ...val,
    });
    if (response?.success) {
      Toast(response?.message, { type: 'success' });
      setIsOpen(false);
      reset({
        customerFirstName: '',
        customerLastName: '',
        customerEmail: '',
        customerPhoneNumber: '',
      });
    }
  };

  return (
    <SpecialModal isOpen={isOpen} setIsOpen={setIsOpen} title={`You are booking ${name}`}>
      <form className="w-full pt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full ">
          <div className="-mb-1 grid grid-cols-2 gap-x-1 bg-[#EFF2F7] pl-3 pt-1">
            <span className="font-Rubik text-xs font-semibold">Event Start Date</span>
            <span className="font-Rubik text-xs font-semibold">Event End Date</span>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="my-3 rounded-md border border-[#717070] p-2">
              <DateRange
                locale={enUS}
                editableDateInputs
                // @ts-ignore
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
                // @ts-ignore
                ranges={state}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <LabeledInput
            label="start Time"
            name="startTime"
            id="startTime"
            type="time"
            htmlFor="startTime"
            register={register}
            labelClassName="w-full font-Rubik font-semibold text-xs text-black"
            placeholder="user@gmail.com"
            className="my-3 w-full rounded-md border border-[#717070] px-4 py-3 font-medium outline-none"
            error={path(['startTime', 'message'], errors)}
          />
          <LabeledInput
            label="end Time"
            name="endTime"
            id="endTime"
            type="time"
            htmlFor="endTime"
            register={register}
            labelClassName="w-full font-Rubik font-semibold text-xs  text-black"
            placeholder="user@gmail.com"
            className="my-3 w-full rounded-md border border-[#717070]  px-4 py-3 font-medium outline-none"
            error={path(['endTime', 'message'], errors)}
          />
          <LabeledInput
            label="FirstName"
            name="customerFirstName"
            id="email"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="w-full font-Rubik font-semibold text-xs text-black"
            placeholder="user@gmail.com"
            className="my-3 w-full rounded-md border border-[#717070] px-4 py-3 font-medium outline-none"
            error={path(['customerFirstName', 'message'], errors)}
          />
          <LabeledInput
            label="LastName"
            name="customerLastName"
            id="email"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="font-Rubik font-semibold text-xs text-black"
            placeholder="user@gmail.com"
            className="my-3 w-full rounded-md border border-[#717070]  px-4 py-3 font-medium outline-none"
            error={path(['customerLastName', 'message'], errors)}
          />
        </div>

        <LabeledInput
          label="Email"
          name="customerEmail"
          id="email"
          type="text"
          htmlFor="email"
          register={register}
          labelClassName="font-Rubik font-semibold text-xs text-black"
          placeholder="user@gmail.com"
          className="my-3 w-full rounded-md border border-[#717070] px-4 py-3 font-medium outline-none"
          error={path(['customerEmail', 'message'], errors)}
        />
        <LabeledInput
          label="PhoneNumber"
          name="customerPhoneNumber"
          id="email"
          type="text"
          htmlFor="email"
          register={register}
          labelClassName="font-Rubik font-semibold text-xs text-black"
          placeholder="user@gmail.com"
          className="my-3 w-full rounded-md border border-[#717070] px-4 py-3 font-medium outline-none"
          error={path(['customerPhoneNumber', 'message'], errors)}
        />
        <Button label="Submit" type="submit" className="w-full" />
      </form>
    </SpecialModal>
  );
};

export default BookEvent;
