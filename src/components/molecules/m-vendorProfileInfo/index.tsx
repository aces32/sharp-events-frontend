import Button from 'components/atoms/a-button';
// import Input from 'components/atoms/a-input';
// import Label from 'components/atoms/a-input-label';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';
import LabeledInput from '../m-labeled-input';

const VendorProfileInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (val: any) => {
    console.log(val);
  };
  return (
    <div>
      <form
        className="flex w-full flex-col items-center gap-3 text-left"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold">Profile Info</h3>
          <hr className="py-1" />

          <div className="mb-6 block w-full items-center justify-between gap-x-6 md:flex ">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200" />
              <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-sm text-black shadow">
                <button type="button" aria-label="Delete profile image">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-y-2">
              <LabeledInput
                label="Upload Image"
                name="upload"
                id="upload"
                type="file"
                htmlFor="upload"
                register={register}
                labelClassName="cursor-pointer rounded border border-[#000000] px-4 py-2 font-Rubik text-xs font-semibold"
                className="hidden"
                error={path(['eventCenterName', 'message'], errors)}
              />

              <p className="font-Rubik text-sm font-medium">
                Max file size is 1mb, Minimum dimension: 330x300 and suitable files are jpg & png
              </p>
            </div>
            <div className="mt-4 flex gap-x-4">
              <Button
                type="submit"
                label="Save"
                className="rounded bg-[#008000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-green-700"
              />

              <Button
                type="button"
                label=" Cancel"
                className="rounded bg-[#FF0000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-red-700"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-3 text-left">
            <div className="grid w-full grid-cols-1 gap-x-10 md:grid-cols-2">
              <LabeledInput
                label="Vendor Id*"
                name="vendorId"
                id="vendorId"
                type="text"
                htmlFor="vendorId"
                register={register}
                placeholder="001"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['vendorId', 'message'], errors)}
              />
              <LabeledInput
                label="Vendor Name*"
                name="vendorName"
                id="vendorName"
                type="text"
                htmlFor="vendorName"
                register={register}
                placeholder="sharp event center"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['vendorName', 'message'], errors)}
              />
            </div>
            <LabeledInput
              label="Country*"
              name="country"
              id="country"
              type="text"
              htmlFor="country"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['country', 'message'], errors)}
            />

            <LabeledInput
              label="City*"
              name="city"
              id="city"
              type="text"
              htmlFor="city"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['city', 'message'], errors)}
            />
            <LabeledInput
              label="Area*"
              name="area"
              id="area"
              type="text"
              htmlFor="area"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['area', 'message'], errors)}
            />
            <LabeledInput
              label="State*"
              name="state"
              id="state"
              type="text"
              htmlFor="state"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['state', 'message'], errors)}
            />
            <LabeledInput
              label="Service offering*"
              name="serviceOffering"
              id="serviceOffering"
              type="text"
              htmlFor="serviceOffering"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['serviceOffering', 'message'], errors)}
            />
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
        </div>
        <div className="w-full  rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold">Change Password</h3>
          <hr className="py-1" />
          <div className="flex w-full flex-col items-start gap-3 text-left">
            <LabeledInput
              label="Old Password*"
              name="oldPassword"
              id="oldPassword"
              type="text"
              htmlFor="oldPassword"
              register={register}
              placeholder="sharp event center"
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['oldPassword', 'message'], errors)}
            />
            <div className="grid  w-full grid-cols-1 gap-x-10 md:grid-cols-2">
              <LabeledInput
                label="New Password*"
                name="newPassword"
                id="newPassword"
                type="text"
                htmlFor="newPassword"
                register={register}
                placeholder="sharp event center"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['newPassword', 'message'], errors)}
              />
              <LabeledInput
                label="confirm New Password*"
                name="confirmNewpassword"
                id="confirmNewpassword"
                type="text"
                htmlFor="confirmNewpassword"
                register={register}
                placeholder="sharp event center"
                labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                error={path(['confirmNewpassword', 'message'], errors)}
              />
            </div>
            <Button
              type="submit"
              label="Change Password"
              className="rounded bg-[#008000] px-6 py-2 font-Rubik text-xs font-semibold text-white hover:bg-green-700"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorProfileInfo;
