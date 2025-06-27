import Button from 'components/atoms/a-button';
import { useState } from 'react';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import RegisterSchema from 'lib/validationSchema/registerSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import usePasswordToggle from 'hoc/password-visibility';
import Logo from 'assets/Icon/logo';
import useFetchHook from 'hooks/useFetchHook';
import { FaAngleDown } from 'react-icons/fa';
import User from 'assets/Icon/user';
import encrypt from 'utils/encrypt';
import { toast } from 'react-toastify';
import ProgressBar from '../m-progress';
import LabeledInput from '../m-labeled-input';

interface Props {
  setUserTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'welcome'>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
interface CreateAccountProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}
const CreateUserAccount = ({ setUserTab, setEmail }: Props) => {
  const [inputType, icon] = usePasswordToggle();
  const [progress, setProgress] = useState(40);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<CreateAccountProps>({
    resolver: yupResolver(RegisterSchema),
  });
  console.log(errors);
  const [, registerUser] = useFetchHook('authentication/user-register');

  const onSubmit = async (val: CreateAccountProps) => {
    const encryptedPassword = encrypt(val.password);
    console.log(encryptedPassword);
    const response = await registerUser.Post({
      email: val.email,
      phone: val.phone,
      firstName: val.firstName,
      lastName: val.lastName,
      password: encryptedPassword,
    });
    console.log(val);
    console.log(response);
    if (response?.code === '00') {
      setEmail(val.email);
      setProgress(60);
      setUserTab('verify');
      toast(response?.description);
      reset({
        email: '',
        password: '',
        phone: '',
        firstName: '',
        lastName: '',
      });
    } else {
      toast(response?.description);
    }
  };
  return (
    <div className="flex h-full w-full items-center justify-center pt-10 text-center md:h-screen lg:h-full ">
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
            <User />
            <div>
              <p className="text-sm font-bold">User</p>
              <p className="text-sm font-medium">I’m searching for an Event center</p>
            </div>
          </div>
          <FaAngleDown className="text-2xl" />
        </div>
        <form
          className="mt-5 flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <LabeledInput
            label="Email*"
            name="email"
            id="email"
            type="email"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" olaide@gmail.com"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['email', 'message'], errors)}
          />
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
            label="Phone*"
            name="phone"
            id="phone"
            type="text"
            htmlFor="phone"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder="07012345678"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['phone', 'message'], errors)}
          />
          <div className="relative  w-full">
            <span className="absolute right-2 top-1/2 z-10 my-3 -translate-y-1/2 cursor-pointer">
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
          {/* 
          <div className="flex w-full items-center">
            <div className="flex-1 border-t border-gray-400" />
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-1 border-t border-gray-400" />
          </div>
          <Button
            type="button"
            label="Sign Up with Google"
            className="w-full border border-[#00000099] bg-transparent text-sm font-semibold !text-black"
          />
          <Button
            type="button"
            label="Sign Up with Apple"
            className="w-full border border-[#00000099] bg-transparent text-sm font-semibold !text-black"
          /> */}
          <Button type="submit" label="Continue" className="mt-2 w-full" />
        </form>
        <ProgressBar progress={progress} segments={5} className="mt-24 px-5  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default CreateUserAccount;
