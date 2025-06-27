import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';
import CreateServicesHeader from 'components/molecules/m-createServiceHeader';
import DeleteServiceModal from 'components/molecules/m-deleteService';
import LabeledInput from 'components/molecules/m-labeled-input';
import AddImage from 'components/molecules/m-select-event-images';
import AddVideo from 'components/molecules/m-selectEventVideo';
import QuillEditor from 'hoc/react-quill';
import useFetchHook from 'hooks/useFetchHook';
import { path } from 'ramda';
import { useEffect, useState } from 'react';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from 'store';

interface ImagePreview {
  publicId: string;
  url: string;
}
const EditServiceOffered = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [, EditService] = useFetchHook('services-offered');
  const [, getServiceOfferedList] = useFetchHook('services-offered');
  const [isOpen, setIsOpen] = useState(false);
  const [imagePreviewList, setImagePreviewList] = useState<ImagePreview[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<string[]>([]);

  const { serviceId, serviceName } = useAppSelector((state) => state.user);
  console.log(serviceId);
  const [, deleteService] = useFetchHook('services-offered');

  const handleDelete = async (deleteId: string) => {
    const response = await deleteService.DeletePayload(deleteId);
    if (response?.success) {
      toast.success(response?.message || 'Service deleted successfully');
      navigate(0); // Refresh page
    } else {
      toast.error(response?.message || 'Failed to delete service');
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      serviceName: '',
      serviceDescription: '',
      price: '',
      serviceId: '',
      eventCenterImages: [{ imageFile: '' }],
      eventCenterNewImages: [{ imageFile: '' }],
      video: '',
      videoUrl: '',
      videoPublicId: '',
      imagesToBeDeleted: '',
    },
  });

  useEffect(() => {
    if (serviceId) {
      setValue('serviceId', serviceId);
    }
  }, [serviceId]);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getServiceOfferedList.GetPayload();
        const singleService = response?.data?.find((item: any) => item.id === id);

        if (singleService) {
          reset({
            serviceName: singleService.serviceName,
            serviceDescription: singleService.description,
            price: singleService.prices,
            serviceId: singleService.serviceId,
            eventCenterImages: singleService.images?.map((img: string) => ({ imageFile: img })) || [
              { imageFile: '' },
            ],

            videoUrl: singleService.videoUrl || '',
            videoPublicId: singleService.videoPublicId || '',
          });
        }
        setImagePreviewList(singleService.images || []);
      } catch (error) {
        console.error('Error fetching service offered by list:', error);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id, setValue]);

  const onSubmit = async (val: any) => {
    console.log(val);
    const formData = new FormData();
    formData.append('serviceName', val.serviceName);
    formData.append('description', val.serviceDescription);
    formData.append('prices', val.price);
    formData.append('serviceId', serviceId);

    if (val?.eventCenterNewImages && val.eventCenterNewImages.length > 0) {
      val.eventCenterNewImages.forEach((item: { imageFile: string }) => {
        if (item.imageFile) {
          formData.append('newImages', item.imageFile);
        }
      });
    }

    if (val.video360) {
      formData.append('video', val.video360);
    }
    formData.append('videoUrl', 'string');
    formData.append('videoPublicId', 'string');
    if (deletedImageIds && deletedImageIds.length > 0) {
      deletedImageIds.forEach((imageId) => {
        formData.append('imagesToDelete', imageId);
      });
    }

    const response = await EditService.UpdatePayloadWithId(id, formData);
    console.log(response);
  };
  const removeImage = (imageId: string) => {
    const updatedImages = imagePreviewList.filter((image) => image.publicId !== imageId);
    setImagePreviewList(updatedImages);
    setDeletedImageIds((prev) => [...prev, imageId]);
    setValue(
      'eventCenterImages',
      updatedImages.map((img) => ({ imageFile: img.publicId })),
    );
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
              className="w-full rounded-[8px] border border-[#00000066] bg-[#AAAAAA] px-[16px] py-2 font-Rubik font-medium  outline-none placeholder:text-black"
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
              name="eventCenterNewImages"
            />
            <div className="flex flex-wrap">
              {imagePreviewList.map((img) => (
                <div key={img.publicId}>
                  <div className="flex cursor-pointer justify-end ">
                    <FaTimes
                      className="bg-black text-white"
                      onClick={() => removeImage(img.publicId)}
                    />
                  </div>
                  <div className="mx-4 mb-4 w-40 space-y-2 rounded-lg bg-white shadow-md">
                    <img
                      src={img.url}
                      alt={`Uploaded preview ${id} + 1`}
                      // className="h-48 w-full rounded object-cover"
                      className="h-[7.75rem] w-40 rounded-t-lg "
                    />
                  </div>
                </div>
              ))}
            </div>

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
                handleClick={() => setIsOpen(true)}
                className="rounded bg-[#FF0000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-red-700"
              />
            </div>
          </div>
        </form>
      </div>
      <DeleteServiceModal
        isOpen={isOpen}
        selectedServiceId={id ?? null}
        onDelete={handleDelete}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default EditServiceOffered;
