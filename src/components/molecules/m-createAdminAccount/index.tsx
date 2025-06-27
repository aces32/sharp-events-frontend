import Button from 'components/atoms/a-button';

import { useState } from 'react';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import AdminRegisterSchema from 'lib/validationSchema/adminRegisterSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import LabeledInput from 'components/molecules/m-labeled-input';

import usePasswordToggle from 'hoc/password-visibility';
import useFetchHook from 'hooks/useFetchHook';

import Logo from 'assets/Icon/logo';
import Admin from 'assets/Icon/admin';
import { FaAngleDown } from 'react-icons/fa';
import encrypt from 'utils/encrypt';
import { toast } from 'react-toastify';
import ProgressBar from '../m-progress';

interface RegisterProps {
  firstName: string;
  lastName: string;
  businessName: string;

  managerEmail: string;
  phone: string;
  companyPhoneNumber: string;
  password: string;
}
interface Props {
  setAdminTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'invite' | 'welcome'>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
const CreateAdminAccount = ({ setAdminTab, setEmail }: Props) => {
  const [inputType, icon] = usePasswordToggle();
  const [progress, setProgress] = useState(40);
  const [, postCreateEventUser] = useFetchHook('/authentication/event-owner-register');

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<RegisterProps>({
    resolver: yupResolver(AdminRegisterSchema),
  });
  console.log(errors);
  const onSubmit = async (val: RegisterProps) => {
    const encryptedPassword = encrypt(val.password);
    const response = await postCreateEventUser.Post({
      ownerEmail: val.managerEmail,
      companyName: val.businessName,
      companyPhoneNumber: val.companyPhoneNumber,
      ownerPhoneNumber: val.phone,
      ownerFirstName: val.firstName,
      ownerLastName: val.lastName,
      password: encryptedPassword,
    });
    console.log(response);
    if (response?.code === '00') {
      setEmail(val.managerEmail);

      setProgress(40);
      setAdminTab('verify');
      toast(response?.description);
      reset({
        password: '',
        phone: '',
        firstName: '',
        lastName: '',
        businessName: '',
        managerEmail: '',
        companyPhoneNumber: '',
      });
    } else {
      toast(response?.description);
    }
  };

  return (
    <div className=" flex h-full w-full items-center justify-center pt-10 text-center md:h-screen md:pt-10 lg:h-full lg:pt-10 ">
      <div className="relative h-full w-full px-5 pb-32  md:w-2/3 md:px-0 lg:w-1/2 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">Create an account</h3>
        <p className="text-base font-semibold">Provide your email and choose a password</p>
        <div
          className={` mt-5 flex w-full items-center justify-between rounded border border-primary p-2 text-left 
          md:hidden`}
        >
          <div className="flex gap-x-3 ">
            <Admin />
            <div>
              <p className="text-sm font-bold">Admin</p>
              <p className="text-sm font-medium">I’m setting up an Event Center.</p>
            </div>
          </div>
          <FaAngleDown className="text-2xl" />
        </div>
        <form
          className="mt-5 flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full items-center justify-between gap-x-5">
            <LabeledInput
              label="First Name*"
              name="firstName"
              id="firstName"
              type="text"
              htmlFor="firstName"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="Noah"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['firstName', 'message'], errors)}
            />
            <LabeledInput
              label="Last name*"
              name="lastName"
              id="lastName"
              type="text"
              htmlFor="lastName"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder=" Olaide"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['lastName', 'message'], errors)}
            />
          </div>
          <LabeledInput
            label="Company Name*"
            name="businessName"
            id="businessName"
            type="text"
            htmlFor="businessName"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" Conclase Hub"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['businessName', 'message'], errors)}
          />
          <LabeledInput
            label="Company Phone Number**"
            id="companyPhoneNumber"
            type="number"
            name="companyPhoneNumber"
            htmlFor="companyPhoneNumber"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder="08087601230"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['companyPhoneNumber', 'message'], errors)}
          />

          <LabeledInput
            label=" Manager’s Email*"
            name="managerEmail"
            id="managerEmail"
            type="email"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" olaide@gmail.com"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['managerEmail', 'message'], errors)}
          />
          <LabeledInput
            label="Manager’s Phone Number*"
            id="phone"
            type="number"
            name="phone"
            htmlFor="phone"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder="08087601230"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['phone', 'message'], errors)}
          />

          <div className="relative  w-full">
            <span className="absolute right-2 top-1/2 z-10 my-3 -translate-y-1/2 cursor-pointer md:py-2 lg:py-1">
              {' '}
              {icon}
            </span>
            <LabeledInput
              label="Password*"
              name="password"
              id="password"
              type={inputType}
              htmlFor="password"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="*********"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['password', 'message'], errors)}
            />
          </div>

          {/* <div className="flex w-full items-center">
            <div className="flex-1 border-t border-[#00000099]" />
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-1 border-t border-[#00000099]" />
          </div>
          <div className="flex w-full items-center justify-between gap-x-5">
            <Button
              type="button"
              label="Sign Up with Google"
              className="w-full border border-[#00000099] bg-transparent text-sm font-semibold !text-black"
            />
            <Button
              type="button"
              label="Sign Up with Apple"
              className="w-full border border-[#00000099] bg-transparent text-sm font-semibold !text-black"
            />
          </div> */}
          <Button type="submit" label="Continue" className="mt-2 w-full" />
        </form>
        <ProgressBar progress={progress} segments={5} className="mt-24 px-10  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default CreateAdminAccount;
