import useFetchHook from 'hooks/useFetchHook';
import { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import LabeledInput from 'components/molecules/m-labeled-input';
import Label from 'components/atoms/a-input-label';
import QuillEditor from 'hoc/react-quill';
import { path } from 'ramda';
import Button from 'components/atoms/a-button';
import AvailableFacility from 'components/molecules/m-available-facility';
import AddImage from 'components/molecules/m-select-event-images';
import Toast from 'components/atoms/a-Toast';
import { useNavigate, useParams } from 'react-router-dom';
import AddVideo from 'components/molecules/m-selectEventVideo';
import { FaTimes } from 'react-icons/fa';

interface ImagePreview {
  publicId: string;
  url: string;
}

const EditEvent = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from({ length: currentYear - startYear }, (_, index) => currentYear - index);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [, fetchEventData] = useFetchHook('event-center/get-event-center-by-id');
  const [states, getStates] = useFetchHook('states/get-all-states');
  const [centerTypes, getCenterTypes] = useFetchHook('event-center/get-all-event-center-types');
  const [facilityTypes, getFacilityTypesName] = useFetchHook('event-center/get-all-facilities');
  const [, updateEventCenter] = useFetchHook('event-center/update-event-center');
  const [eventType, getEventType] = useFetchHook('event-center/get-all-event-types');
  const [imagePreviewList, setImagePreviewList] = useState<ImagePreview[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<string[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      eventCenterName: '',
      eventCenterDescription: '',
      eventCenterPrice: '',
      eventCenterCapacity: '',
      eventCenterSquareFoot: '',
      eventCenterAddress: '',
      yearBuilt: '',
      eventCenterCity: '',
      eventCenterArea: '',
      stateId: '',
      eventCenterCountry: '',
      eventCenterLongitude: '',
      eventCenterLatitude: '',
      eventCenterFacilities: [{ facilityId: '', capacity: 0 }],
      typesId: '',
      eventCenterTypeNameIds: [],
      eventCenterImages: [{ imageFile: '' }],
      eventCenterNewImages: [{ imageFile: '' }],
      video360: '',
    },
  });
  useEffect(() => {
    getStates.Get();
    getCenterTypes.Get();
    getFacilityTypesName.Get();
    getEventType.Get();
    if (id) {
      fetchEventData.GetPayloadWithId(id).then((res: any) => {
        const data = res?.data;

        if (data) {
          reset({
            eventCenterName: data.name,
            eventCenterDescription: data.description,
            eventCenterPrice: data.price,
            eventCenterCapacity: data.capacity,
            eventCenterSquareFoot: data.sqaureFoot,
            eventCenterAddress: data.address,
            yearBuilt: data.yearBuilt,
            eventCenterCity: data.city,
            eventCenterArea: data.area,
            stateId: data.state?.id,
            eventCenterCountry: data.country,
            eventCenterLongitude: data.longtitude,
            eventCenterLatitude: data.latitude,
            eventCenterFacilities: data.facilities?.map(
              (facility: { facility: { id: string }; capacity: number }) => ({
                facilityId: facility.facility?.id,
                capacity: facility.capacity,
              }),
            ) || [{ facilityId: '', capacity: 0 }],
            typesId: data.types?.id,
            eventCenterTypeNameIds: data.eventTypes?.map((type: { id: string }) => type.id) || [],
            eventCenterImages: data.images?.map((img: string) => ({ imageFile: img })) || [
              { imageFile: '' },
            ],
            // video360: data.video360TourUrl || '',
          });
        }
        setImagePreviewList(data.images || []);
      });
    }
  }, [id]);

  const onSubmit = async (val: any) => {
    console.log(val);

    const formData = new FormData();
    formData.append('id', id || '');
    formData.append('name', val.eventCenterName);
    formData.append('description', val.eventCenterDescription);
    formData.append('price', val.eventCenterPrice.toString());
    formData.append('capacity', val.eventCenterCapacity.toString());
    formData.append('sqaureFoot', val.eventCenterSquareFoot.toString());
    formData.append('address', val.eventCenterAddress);
    formData.append('yearBuilt', val.yearBuilt);
    formData.append('city', val.eventCenterCity);
    formData.append('area', val.eventCenterArea);
    formData.append('stateId', val.stateId);
    formData.append('country', val.eventCenterCountry);
    formData.append('longtitude', val.eventCenterLongitude);
    formData.append('latitude', val.eventCenterLatitude);
    formData.append(
      'facilities',
      JSON.stringify(
        val.eventCenterFacilities.map((item: { facilityId: string; capacity: number }) => ({
          facilityId: item?.facilityId,
          capacity: Number(item?.capacity),
        })),
      ),
    );
    formData.append('typesId', val.typesId);
    formData.append('eventTypesIds', JSON.stringify(val.eventCenterTypeNameIds));
    if (deletedImageIds && deletedImageIds.length > 0) {
      deletedImageIds.forEach((imageId) => {
        formData.append('imagesToDelete', imageId);
      });
    }

    if (val?.eventCenterNewImages && val.eventCenterNewImages.length > 0) {
      val.eventCenterNewImages.forEach((item: { imageFile: string }) => {
        if (item.imageFile) {
          formData.append('newImages', item.imageFile);
        }
      });
    }
    if (val.video360) {
      formData.append('video360', val.video360);
    }

    const response = await updateEventCenter.Update(formData);
    console.log('Full response:', response);
    // console.log('Type of response?.message:', typeof response.message);
    // console.log('response.message:', response.message);

    if (response?.code === '00') {
      Toast(response?.message, { type: 'success' });
      reset();
      navigate('/dashboard/admin');
    } else if (Array.isArray(response?.message)) {
      console.log(response.message);

      response.message.forEach((msg: string) => {
        Toast(msg, { type: 'error' });
      });
    } else {
      Toast(response?.message || response?.description || 'An error occurred', { type: 'error' });
    }
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
    <section className="w-full p-5 ">
      <div className="pb-5">
        <h3 className="font-Rubik text-3xl font-bold capitalize">MY Event Center</h3>
        <p className="font-Rubik text-base font-semibold capitalize">
          Customize event center settings to suit your needs, including layout, services, and
          integrations
        </p>
      </div>
      <div className="">
        <form
          className="flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-3 bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Event Center Info
            </h3>
            <LabeledInput
              label="Event Name"
              name="eventCenterName"
              id="eventCenterName"
              type="text"
              htmlFor="eventCenterName"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterName', 'message'], errors)}
            />
            <div className="w-full">
              <Label
                htmlFor="eventCenterDescription"
                label="Event Center Description"
                className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              />
              <Controller
                name="eventCenterDescription"
                control={control}
                render={({ field }) => (
                  <QuillEditor
                    handleChange={(e) => field.onChange(e)}
                    value={field.value as string}
                    placeholder="Describe the center"
                  />
                )}
              />
            </div>
            <p className="mt-1  w-full  text-start text-xs text-red-600">
              {errors.eventCenterDescription && errors.eventCenterDescription.message}
            </p>

            <LabeledInput
              label="Price"
              name="eventCenterPrice"
              id="eventCenterPrice"
              type="number"
              htmlFor="eventCenterPrice"
              register={register}
              placeholder="100000"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterPrice', 'message'], errors)}
            />

            <LabeledInput
              label="Capacity"
              name="eventCenterCapacity"
              id="eventCenterCapacity"
              type="number"
              htmlFor="eventCenterCapacity"
              register={register}
              placeholder="100000"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterCapacity', 'message'], errors)}
            />
            <LabeledInput
              label="sqaure Foot*"
              name="eventCenterSquareFoot"
              id="eventCenterSquareFoot"
              type="number"
              htmlFor="eventCenterSquareFoot"
              register={register}
              placeholder="Enter squarefoot"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterSquareFoot', 'message'], errors)}
            />
            <LabeledInput
              label="Address"
              name="eventCenterAddress"
              id="eventCenterAddress"
              type="text"
              htmlFor="eventCenterAddress"
              register={register}
              placeholder="10, ogunjim street"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterAddress', 'message'], errors)}
            />
            <Label
              htmlFor="eventCenterBulitYear"
              label="Year Built*"
              className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            />
            <select
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              {...register(`yearBuilt`)}
            >
              <option>Select Year</option>
              {years?.map((year: number) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <p className="mt-1  w-full  text-start text-xs text-red-600">
              {errors && errors.yearBuilt?.message}
            </p>

            <LabeledInput
              label="City*"
              name="eventCenterCity"
              id="eventCenterCity"
              type="text"
              htmlFor="eventCenterCity"
              register={register}
              placeholder="Lagos"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterCity', 'message'], errors)}
            />
            <LabeledInput
              label="Area*"
              name="eventCenterArea"
              id="eventCenterArea"
              type="text"
              htmlFor="eventCenterArea"
              register={register}
              placeholder="10, ogunjim street"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterArea', 'message'], errors)}
            />
            <LabeledInput
              label="Country*"
              name="eventCenterCountry"
              id="eventCenterCountry"
              type="text"
              htmlFor="eventCenterCountry"
              register={register}
              placeholder="10, ogunjim street"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterCountry', 'message'], errors)}
            />

            <Label
              htmlFor="eventCenterState"
              label="State"
              className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            />
            <select
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              {...register(`stateId`)}
            >
              <option>---</option>
              {states?.data?.map((items: any) => (
                <option key={items.id} value={items?.id}>
                  {items?.name}
                </option>
              ))}
            </select>
            <p className="mt-1  w-full  text-start text-xs text-red-600">
              {errors && errors.stateId?.message}
            </p>
            <Label
              htmlFor="eventType"
              label="Event center Type"
              className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            />
            <select
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              // @ts-ignore
              {...register(`typesId`)}
            >
              <option>---</option>
              {centerTypes?.data?.map((items: any) => (
                <option key={items.id} value={items?.id}>
                  {items?.name}
                </option>
              ))}
            </select>
            <p className="mt-1  w-full  text-start text-xs text-red-600">
              {errors && errors.typesId?.message}
            </p>
            <LabeledInput
              label="Latitude"
              name="eventCenterLatitude"
              id="eventCenterLatitude"
              type="number"
              htmlFor="eventCenterLatitude"
              register={register}
              step="0.000001"
              placeholder="6.600000"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterLatitude', 'message'], errors)}
            />
            <LabeledInput
              label="longitude"
              name="eventCenterLongitude"
              id="eventCenterLongitude"
              type="number"
              htmlFor="eventCenterLongitude"
              step="0.000001"
              register={register}
              placeholder="3.500000"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['eventCenterLongitude', 'message'], errors)}
            />
          </div>
          <div className="w-full bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Facilities
            </h3>
            <AvailableFacility
              facility={facilityTypes}
              control={control}
              register={register}
              errors={errors}
              useFieldArray={useFieldArray}
            />
          </div>
          <div className="w-full bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Event Type
            </h3>
            {/* <div className="w-full"> */}
            {/* <Label
                  htmlFor="eventCenterDescription"
                  label="Event Type"
                  className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                /> */}
            <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
              {eventType?.data?.map((items: any) => (
                <div key={items?.id} className="space-x-4 text-sm">
                  <input
                    type="checkbox"
                    key={items?.id}
                    value={items?.id}
                    {...register(`eventCenterTypeNameIds`)}
                  />
                  <label htmlFor={items?.id} className="font-Rubik text-sm font-bold">
                    {items?.name}
                  </label>
                </div>
              ))}
            </div>
            <p className="mt-1  w-full  text-start text-xs text-red-600">
              {errors && errors.eventCenterTypeNameIds?.message}
            </p>
          </div>

          <div className="w-full bg-white p-5 shadow-md">
            <h3 className="border-b border-b-[#0000001A] pb-1 font-Rubik text-2xl font-bold">
              Media
            </h3>
            <AddImage
              watch={watch}
              control={control}
              label="Facility Image"
              errors={errors}
              useFieldArray={useFieldArray}
              name="eventCenterNewImages"
            />

            {/* <div className="grid grid-cols-2 gap-4"> */}

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

            <Button label="Create Event Center" type="submit" className="mt-5" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditEvent;
