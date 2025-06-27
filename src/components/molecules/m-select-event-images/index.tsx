import Button from 'components/atoms/a-button';

import { path } from 'ramda';

import ImageCard from 'components/molecules/m-card';
import LabeledInput from '../m-labeled-input';

interface AvailableFacilityProps {
  control: any;
  watch: any;
  name: string;
  errors: any;
  useFieldArray: any;
  label: string;
}

const AddImage = ({
  control,
  name,
  watch,
  errors,
  useFieldArray,
  label,
}: AvailableFacilityProps) => {
  const {
    append: ImageAppend,
    fields: ImageField,
    remove: ImageRemove,
    update,
  } = useFieldArray({
    control,
    name,
  });

  const EventCenterImages = watch(name);
  const handleChange = (item: any, index: number) => {
    if (item[0]) {
      update(index, {
        imageFile: item[0],
        imageName: item[0].name,
      });
    }
  };
  return (
    <div className="">
      {ImageField.map((item: any, index: number) => {
        return (
          <div key={ImageField.id} className=" flex flex-col space-y-2 ">
            <div>
              <div className="my-2 flex flex-col  space-y-0 md:w-2/5 md:px-0">
                {ImageField.length > 1 && (
                  <Button
                    label="-"
                    type="button"
                    className=" flex  size-4  items-center justify-center text-sm font-light drop-shadow-lg"
                    handleClick={() => ImageRemove(index)}
                  />
                )}
              </div>
              <LabeledInput
                label={ImageField.length > 1 ? ` ${label}${index + 1}` : label}
                name={`${name}[${index}].imageFile`}
                id="imageName"
                type="file"
                htmlFor="image name"
                handleChange={(e) => handleChange(e.target.files, index)}
                accept="image/png, image/gif, image/jpeg"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                placeholder="50"
                className="mt-0 block w-full rounded-md border border-gray-300 text-black shadow-sm file:mr-4 file:rounded-lg file:rounded-r-full file:border-y-0 file:border-l-0 file:border-r-[0.05rem] file:border-white file:bg-gray-50 file:px-4 file:py-3 file:text-sm file:font-medium hover:file:text-white focus:outline-none md:w-full lg:md:w-full xl:w-full"
                error={path([`${name}[${index}].imageFile`, 'message'], errors)}
              />
            </div>
          </div>
        );
      })}
      <div className="mt-5 flex justify-between">
        <Button
          type="button"
          btnType="secondary"
          label="+ Add Another Image"
          handleClick={() => {
            ImageAppend({
              imageFile: null,
              imageName: '',
            });
          }}
          className="mt-2 font-semibold text-primary "
        />
      </div>
      <div className="flex flex-wrap ">
        {EventCenterImages?.map((item: any) => {
          return (
            item?.imageFile && (
              <ImageCard key={ImageField?.id} url={URL.createObjectURL(item?.imageFile)} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default AddImage;
