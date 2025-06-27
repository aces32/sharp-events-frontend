import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';
import CreateServicesHeader from 'components/molecules/m-createServiceHeader';
import LabeledInput from 'components/molecules/m-labeled-input';
import AddImage from 'components/molecules/m-select-event-images';
import AddVideo from 'components/molecules/m-selectEventVideo';
import QuillEditor from 'hoc/react-quill';
import useFetchHook from 'hooks/useFetchHook';
import { path } from 'ramda';
import { useEffect } from 'react';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { useAppSelector } from 'store';

const CreateService = () => {
  const [, createService] = useFetchHook('services-offered');
  const { serviceId, serviceName } = useAppSelector((state) => state.user);
  console.log(serviceId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      serviceName: '',
      serviceDescription: '',
      price: '',
      serviceId: '',
      eventCenterImages: [{ imageFile: '' }],
      video: '',
      videoUrl: '',
      videoPublicId: '',
    },
  });

  useEffect(() => {
    if (serviceId) {
      setValue('serviceId', serviceId);
    }
  }, [serviceId]);

  const onSubmit = async (val: any) => {
    console.log(val);
    const formData = new FormData();
    formData.append('serviceName', val.serviceName);
    formData.append('description', val.serviceDescription);
    formData.append('prices', val.price);
    formData.append('serviceId', serviceId);

    val?.eventCenterImages.forEach((item: any) => {
      console.log(item.imageFile);

      if (item.imageFile) {
        formData.append('images', item.imageFile);
      }
    });
    if (val.video360) {
      formData.append('video', val.video360);
    }
    formData.append('videoUrl', 'string');
    formData.append('videoPublicId', 'string');

    const response = await createService.Post(formData);
    console.log(response);
  };
  return (
    <div>
      <CreateServicesHeader />
      <div className="">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Create Service
            </h3>
            <LabeledInput
              label="Service Name*"
              name="serviceName"
              id="serviceName"
              type="text"
              htmlFor="serviceName"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['serviceName', 'message'], errors)}
            />
            <div className="w-full">
              <Label
                htmlFor="serviceDescription"
                label="Service Description*"
                className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              />
              <Controller
                name="serviceDescription"
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
              label="Category*"
              name="category"
              id="category"
              type="text"
              htmlFor="category"
              register={register}
              placeholder={serviceName}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000066] bg-[#00000028]  px-[16px] py-2 font-Rubik font-medium  outline-none placeholder:text-[#00000066]"
              error={path(['category', 'message'], errors)}
              disabled
            />{' '}
            <LabeledInput
              label="Price*"
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
              Service Gallery
            </h3>
            <AddImage
              watch={watch}
              control={control}
              errors={errors}
              useFieldArray={useFieldArray}
              label="Service Images"
              name="eventCenterImages"
            />
            <AddVideo control={control} name="video360" errors={errors} />
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

export default CreateService;
