import Button from 'components/atoms/a-button';

import { path } from 'ramda';
import Label from 'components/atoms/a-input-label';
import { v4 } from 'uuid';
import LabeledInput from '../m-labeled-input';

interface AvailableFacilityProps {
  register: any;
  control: any;

  facility: any;
  errors: any;
  useFieldArray: any;
}

const AvailableFacility = ({
  register,
  control,

  facility,

  errors,
  useFieldArray,
}: AvailableFacilityProps) => {
  const {
    append: FacilityAppend,
    fields: FacilityField,
    remove: FacilityRemove,
  } = useFieldArray({
    control,
    name: `eventCenterFacilities`,
  });

  return (
    <div className="">
      {FacilityField.map((item: any, index: number) => {
        return (
          <div key={v4()} className=" flex flex-col space-y-2 ">
            <div>
              <div className="my-2 flex flex-col  space-y-0 md:w-2/5 md:px-0">
                {FacilityField.length > 1 && (
                  <Button
                    label="-"
                    type="button"
                    className=" flex  size-4  items-center justify-center text-base font-medium drop-shadow-lg"
                    handleClick={() => FacilityRemove(index)}
                  />
                )}
              </div>

              <Label
                htmlFor="facilityName"
                label={FacilityField.length > 1 ? `Facility Name ${index + 1}` : 'Facility Name '}
                className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              />
              <select
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                // @ts-ignore
                {...register(`eventCenterFacilities[${index}].facilityId`)}
              >
                <option>---</option>
                {facility?.data?.map((items: any) => (
                  <option key={items.id} value={items?.id}>
                    {items?.name}
                  </option>
                ))}
              </select>
              <p className="mt-1  w-full  text-start text-xs text-red-600">
                {errors &&
                  // @ts-ignore

                  errors?.eventCenterFacilities?.[index]?.facilityId?.message}
              </p>

              <LabeledInput
                label={
                  FacilityField.length > 1
                    ? `Facility Total Amount ${index + 1}`
                    : 'Facility Total Amount '
                }
                name={`eventCenterFacilities[${index}].capacity`}
                id="capacity"
                type="number"
                htmlFor="capacity"
                register={register}
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                placeholder="50"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['capacity', 'message'], errors)}
              />
            </div>
          </div>
        );
      })}
      <div className="mt-1 flex justify-between">
        <Button
          type="button"
          btnType="secondary"
          label="+ Add Another Facilty"
          handleClick={() => {
            FacilityAppend({
              facilityId: '',
              capacity: 0,
            });
          }}
          className="mt-2 border border-primary font-Rubik text-sm font-medium text-primary "
        />
      </div>
    </div>
  );
};

export default AvailableFacility;
