import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';
import DashboardHeader from 'components/molecules/m-dashboardHeader';
import LabeledInput from 'components/molecules/m-labeled-input';
import AddImage from 'components/molecules/m-select-event-images';
import AddVideo from 'components/molecules/m-selectEventVideo';
import QuillEditor from 'hoc/react-quill';
import { path } from 'ramda';

import { Controller, useForm, useFieldArray } from 'react-hook-form';

const CreateBundle = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,

    watch,
  } = useForm({
    defaultValues: {
      bundleName: '',
      servicesIncluded: '',
      price: '',
      bundleDescription: '',
      eventCenterImages: [{ imageFile: '' }],
      video: '',
    },
  });
  const onSubmit = async (val: any) => {
    console.log(val);
  };
  return (
    <div>
      <DashboardHeader
        header="Create Bundle"
        title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
        rightSection={
          <select className="rounded-lg border border-[#00000066] px-4 py-3">
            <option value="month">Filter by Month</option>
            <option value="year">Filter by Year</option>
          </select>
        }
      />
      <div className="">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Create Bundle
            </h3>
            <LabeledInput
              label="Bundle Name*"
              name="bundleName"
              id="bundleName"
              type="text"
              htmlFor="bundleeName"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['bundleName', 'message'], errors)}
            />
            <LabeledInput
              label="Services Included*"
              name="servicesIncluded"
              id="servicesIncluded"
              type="text"
              htmlFor="servicesIncluded"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['servicesIncluded', 'message'], errors)}
            />
            <div className="w-full">
              <Label
                htmlFor="bundleDescription"
                label="Bundle Description*"
                className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              />
              <Controller
                name="bundleDescription"
                control={control}
                render={({ field }) => (
                  <QuillEditor
                    handleChange={(e) => field.onChange(e)}
                    value={field.value as string}
                    placeholder="Describe the service"
                  />
                )}
              />
            </div>

            <LabeledInput
              label="Bundle Price*"
              name="price"
              id="price"
              type="text"
              htmlFor="price"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['price', 'message'], errors)}
            />
          </div>
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Bundle Image
            </h3>
            <AddImage
              watch={watch}
              control={control}
              errors={errors}
              useFieldArray={useFieldArray}
              label="Bundle Image"
              name="eventCenterImages"
            />
            <AddVideo control={control} name="video" errors={errors} />
            <div className="mt-4 flex gap-x-4">
              <Button
                type="submit"
                label="Submit"
                className="rounded bg-[#008000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-green-700"
              />

              <Button
                type="button"
                label="Delete"
                className="rounded bg-[#FF0000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-red-700"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateBundle;
