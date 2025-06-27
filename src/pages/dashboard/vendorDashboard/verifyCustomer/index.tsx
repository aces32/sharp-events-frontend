import Button from 'components/atoms/a-button';
import LabeledInput from 'components/molecules/m-labeled-input';
import { path } from 'ramda';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProgressBar from 'components/molecules/m-progress';
import { useAppSelector } from 'store';

const VerifyCustomer = ({
  setTab,
}: {
  setTab: (tab: 'verify' | 'identity' | 'image' | 'details') => void;
}) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (val: any) => {
    console.log(val);
  };
  const [progress, setProgress] = useState(25);

  const { companyEmail } = useAppSelector((state) => state.user);
  console.log(companyEmail);
  return (
    <div className="relative w-full rounded-lg bg-white px-3 py-9  text-center md:px-0 ">
      <div className=" relative m-auto w-full md:w-1/2">
        <div className="mb-8 ">
          <ProgressBar progress={progress} />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h3 className=" pb-3 font-Rubik text-2xl font-bold">Personal / Business Information</h3>
            <p className="font-Rubik text-base font-semibold">
              Please provide your legal name and contact details.
            </p>
          </div>
          <form
            className="mt-5 flex w-full flex-col items-center gap-3 text-left"
            onSubmit={handleSubmit(onSubmit)}
          >
            <LabeledInput
              label="First Name*"
              name="firstName"
              id="firstName"
              type="text"
              htmlFor="firstName"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder=" olaide"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['firstName', 'message'], errors)}
            />
            <LabeledInput
              label="Last Name*"
              name="lastName"
              id="lastName"
              type="text"
              htmlFor="lastName"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['lastName', 'message'], errors)}
            />
            <LabeledInput
              label="Email*"
              name="email"
              id="email"
              type="email"
              htmlFor="email"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder={companyEmail}
              className="w-full rounded-[8px] border border-[#00000066] bg-[#00000028] px-[16px] py-2 font-medium outline-none placeholder:text-[#00000066]"
              error={path(['email', 'message'], errors)}
              disabled
            />
            <LabeledInput
              label="Date of Birth*"
              name="dob"
              id="dob"
              type="date"
              htmlFor="dob"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['dob', 'message'], errors)}
            />
            <LabeledInput
              label="Your country*"
              name="country"
              id="country"
              type="text"
              htmlFor="country"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['country', 'message'], errors)}
            />
            <LabeledInput
              label="Residential Address*"
              name="address"
              id="address"
              type="text"
              htmlFor="address"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="oladele"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['address', 'message'], errors)}
            />
            <div className="mt-5 flex w-full items-center justify-between gap-x-10">
              <Link to="/dashboard/vendor/financials" className="w-1/2">
                <Button
                  label="Back"
                  type="button"
                  className="w-full border border-primary bg-white !text-primary"
                />
              </Link>
              <Button
                label="Next"
                type="submit"
                className="w-1/2"
                handleClick={() => {
                  setTab('identity');
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
