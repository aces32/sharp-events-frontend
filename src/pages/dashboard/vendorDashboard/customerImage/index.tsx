import Button from 'components/atoms/a-button';
import Label from 'components/atoms/a-input-label';

import { useForm } from 'react-hook-form';
import ProgressBar from 'components/molecules/m-progress';
import { useState } from 'react';
import LabeledInput from 'components/molecules/m-labeled-input';
import { path } from 'ramda';

const VerifyCustomer = ({
  setTab,
}: {
  setTab: (tab: 'verify' | 'identity' | 'image' | 'details') => void;
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      bankName: '',
      accountType: '',
      accountName: '',
      accountNumber: '',
      confirm: '',
    },
  });
  const onSubmit = (val: any) => {
    console.log(val);
  };

  const [progress, setProgress] = useState(75);
  return (
    <div className="relative w-full rounded-lg bg-white px-3 py-9  text-center md:px-10 lg:px-0 ">
      <div className=" m-auto w-full lg:w-2/3">
        <div className="mb-8">
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h3 className=" pb-3 font-Rubik text-2xl font-bold">Set Up Your Payout Bank Account</h3>
            <p className="font-Rubik text-base font-semibold">
              Provide the bank account details where you wish to receive your earnings. The Account
              Name MUST match your legal name or registered business name for successful
              verification.
            </p>
          </div>
          <form
            className="mt-5 flex w-full flex-col items-center gap-3 text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <Label
                htmlFor="bankName"
                label="Bank Name*"
                className="flex w-full flex-col gap-1 pb-2 font-Rubik text-base font-semibold text-[#000000CC]"
              />
              <select
                id="bankName"
                {...register('bankName')}
                className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              >
                <option value="nigeria">United Bank Of Nigeria</option>
              </select>
            </div>

            <LabeledInput
              label="Account Name*"
              name="accountName"
              id="accountName"
              type="text"
              htmlFor="accountName"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-Rubik text-base font-semibold text-[#000000CC]"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['accountName', 'message'], errors)}
            />
            <LabeledInput
              label="Account Number*"
              name="accountNumber"
              id="accountNumber"
              type="text"
              htmlFor="accountNumber"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-base font-semibold text-[#000000CC]"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['accountNumber', 'message'], errors)}
            />

            <div>
              <input type="checkbox" {...register('confirm')} id="confirm" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="confirm" className="ml-2 font-Rubik text-base font-medium">
                I confirm that I am the owner of this bank account and authorize Sharp Event to
                verify these details against my identity for payouts.
              </label>
            </div>

            <div className="flex w-full items-center justify-between gap-x-10">
              <Button
                label="Back"
                type="button"
                handleClick={() => {
                  setTab('identity');
                  setProgress(50);
                }}
                className="w-1/2 border border-primary bg-white !text-primary"
              />
              <Button
                label="Next"
                type="button"
                className="w-1/2"
                handleClick={() => {
                  setTab('details');
                  setProgress(100);
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
