import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';

import { useFieldArray, useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import ProgressBar from 'components/molecules/m-progress';
import { useState } from 'react';
import LabeledInput from 'components/molecules/m-labeled-input';
import { path } from 'ramda';
import AddImage from 'components/molecules/m-select-event-images';

const VerifyCustomer = ({
  setTab,
}: {
  setTab: (tab: 'verify' | 'identity' | 'image' | 'details') => void;
}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: '',
      documentType: '',
      selfie: [{ imageFile: '' }],
      documentNumber: '',
      uploadFront: '',
      uploadBack: '',
      confirm: '',
    },
  });
  const onSubmit = (val: any) => {
    console.log(val);
  };
  const [progress, setProgress] = useState(50);
  return (
    <div className="relative w-full rounded-lg bg-white px-3 py-9  text-center md:px-10 lg:px-0 ">
      <div className=" m-auto w-full lg:w-2/3">
        <div className="mb-8">
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h3 className=" pb-3 font-Rubik text-2xl font-bold">
              Upload Your Identification Document
            </h3>
            <p className="font-Rubik text-base font-semibold">
              Upload clear images of your valid government-issued ID. Ensure all details are legible
              and the document is not expired.{' '}
            </p>
          </div>
          <form
            className="mt-5 flex w-full flex-col items-center gap-3 text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid w-full grid-cols-1 items-center justify-between gap-10 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="country"
                  label="Your Country"
                  className="flex w-full flex-col gap-1 pb-2 font-sans text-[14px] font-bold text-black"
                />
                <select
                  id="country"
                  {...register('country')}
                  className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                >
                  <option value="nigeria">Nigeria</option>
                </select>
              </div>
              <div>
                <Label
                  htmlFor="documentType"
                  label="Document Type"
                  className="flex w-full flex-col gap-1 pb-2 font-sans text-[14px] font-bold text-black"
                />
                <select
                  id="country"
                  {...register('documentType')}
                  className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
                >
                  <option value="nigeria">NIN</option>
                </select>
              </div>
            </div>
            <LabeledInput
              label="Document Number*"
              name="documentNumber"
              id="documentNumber"
              type="text"
              htmlFor="documentNumber"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['documentNumber', 'message'], errors)}
            />
            <div className="grid grid-cols-1 items-center justify-between gap-5 md:grid-cols-2">
              <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-dashed border-[#000000] bg-transparent p-8 text-center font-Rubik text-sm font-medium text-[#00000099] md:p-4 lg:p-8">
                <FaUpload size={20} />
                <h3 className="font-Rubik text-base font-semibold text-[#000000CC]">
                  Front Side of your document{' '}
                </h3>
                <p className="font-Rubik text-[10px] font-semibold">
                  Upload the front side of your document. supports: jpg, png, pdf
                </p>
                <label htmlFor="uploadFront" className="mt-5 cursor-pointer">
                  <span className="rounded border border-primary px-4 py-2 text-primary">
                    Choose a file
                  </span>
                  <input
                    id="uploadFront"
                    type="file"
                    {...register('uploadFront')}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-dashed border-[#000000] bg-transparent p-8 text-center font-Rubik text-sm font-medium text-[#00000099] md:p-4 lg:p-8">
                <FaUpload size={20} />
                <h3 className="font-Rubik text-base font-semibold text-[#000000CC]">
                  Back Side of your document
                </h3>
                <p className="font-Rubik text-[10px] font-semibold">
                  Upload the front side of your document. supports: jpg, png, pdf
                </p>
                <label htmlFor="uploadBack" className="mt-5 cursor-pointer">
                  <span className="rounded border border-primary px-4 py-2 text-primary">
                    Choose a file
                  </span>
                  <input
                    id="uploadBack"
                    type="file"
                    {...register('uploadBack')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div>
              <input type="checkbox" {...register('confirm')} id="confirm" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="confirm" className="ml-2 font-Rubik text-base font-medium">
                I confirm that i uploaded valid government-issued pfoto ID. This ID include my
                picture, signature, name, dateof birth, and address
              </label>
            </div>
            <div className="w-full">
              <AddImage
                watch={watch}
                control={control}
                errors={errors}
                useFieldArray={useFieldArray}
                label="Upload Selfie"
                name="selfie"
              />
              <p>Make sure you’re in a bright area and your face is showing well.</p>
            </div>
            <div className="mt-5 flex w-full items-center justify-between gap-x-10">
              <Button
                label="Back"
                type="button"
                handleClick={() => {
                  setTab('verify');
                  setProgress(25);
                }}
                className="w-1/2 border border-primary bg-white !text-primary"
              />

              <Button
                label="Next"
                type="submit"
                className="w-1/2"
                handleClick={() => {
                  setTab('image');
                  setProgress(50);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default VerifyCustomer;
