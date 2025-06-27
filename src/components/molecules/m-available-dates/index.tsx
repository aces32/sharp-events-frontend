/* eslint-disable react/no-array-index-key */
import { addDays, startOfDay } from 'date-fns';

import Button from 'components/atoms/a-button';

import { path } from 'ramda';
import LabeledInput from 'components/molecules/m-labeled-input';

interface AvailableDatesProps {
  register: any;
  control: any;

  errors: any;
  useFieldArray: any;
}

const AvailableDates = ({
  register,
  control,
  // isOpen, setIsOpen,

  errors,
  useFieldArray,
}: AvailableDatesProps) => {
  const {
    append: DateAppend,
    fields: DateField,
    remove: DateRemove,
  } = useFieldArray({
    control,
    name: `eventAvailableDates`,
  });
  const today = startOfDay(new Date());
  return (
    <div className="">
      {DateField.map((item: any, index: number) => {
        return (
          <div key={index} className=" flex flex-col space-y-2 ">
            <div>
              <div className="my-2 flex flex-col  space-y-0 md:w-2/5 md:px-0">
                {DateField.length > 1 && (
                  <Button
                    label="-"
                    type="button"
                    className=" flex  size-4  items-center justify-center text-sm font-light drop-shadow-lg"
                    handleClick={() => DateRemove(index)}
                  />
                )}
              </div>

              <LabeledInput
                label={
                  DateField.length > 1
                    ? `Available Start Date ${index + 1}`
                    : 'Available Start Date'
                }
                name={`eventAvailableDates[${index}].startDate`}
                id=" available start Date"
                type="date"
                htmlFor="available Start Date"
                defaultValue=""
                min={addDays(today, 2).toISOString().split('T')[0]}
                register={register}
                labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
                placeholder=""
                className="h-[55px] w-full rounded-[8px] border  px-[16px] font-medium outline-none"
                error={path([`.eventAvailableDates[${index}].startDate`, 'message'], errors)}
              />

              <LabeledInput
                label={
                  DateField.length > 1 ? `Available End Date ${index + 1}` : 'Available End Date'
                }
                name={`eventAvailableDates[${index}].endDate`}
                id="available End Date"
                type="date"
                min={addDays(today, 2).toISOString().split('T')[0]}
                htmlFor="available Event Date"
                register={register}
                labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
                placeholder=""
                className="h-[55px] w-full rounded-[8px] border  px-[16px] font-medium outline-none"
                error={path([`eventAvailableDates[${index}].endDate`, 'message'], errors)}
              />
            </div>
          </div>
        );
      })}
      <div className="mt-5 flex justify-between">
        <Button
          type="button"
          btnType="secondary"
          label={DateField.length > 0 ? '+ Add Another Dates' : 'Click to Add Date'}
          handleClick={() => {
            DateAppend({
              startDate: '',
              endDate: '',
            });
          }}
          className="mt-2 font-semibold text-primary "
        />
      </div>
    </div>
  );
};

export default AvailableDates;
