import { path } from 'ramda';

import Logo from 'assets/Icon/logo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EventStaffRegiterSchema from 'lib/eventStaffRegisterSchema';
import usePasswordToggle from 'hoc/password-visibility';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import encrypt from 'utils/encrypt';
import { useEffect } from 'react';
import useFetchHook from 'hooks/useFetchHook';
import Button from 'components/atoms/a-button';
import LabeledInput from '../m-labeled-input';

interface Props {
  setUserTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'welcome'>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
interface RegisterProps {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  password: string;
  vendorId: string;
}
const CreateVendorStaffAccount = ({ setUserTab, setEmail }: Props) => {
  const [inputType, icon] = usePasswordToggle();
  const [searchParams] = useSearchParams();
  const [, postCreateVendorStaff] = useFetchHook('authentication/vendor-staff-register');
  const {
    formState: { errors },
    setValue,
    register,
    handleSubmit,
    reset,
  } = useForm<RegisterProps>({ resolver: yupResolver(EventStaffRegiterSchema) });
  useEffect(() => {
    const email = searchParams.get('email');
    const vendorName = searchParams.get('vendorName');
    const vendorId = searchParams.get('vendorId');
    if (email) setValue('email', email);
    if (vendorName) setValue('businessName', vendorName);
    if (vendorId) setValue('vendorId', vendorId);
  }, [searchParams, setValue]);
  const onSubmit = async (val: any) => {
    console.log(val);
    const vendorId = searchParams.get('vendorId');
    console.log(vendorId);
    const encryptedPassword = encrypt(val.password);
    // const email = searchParams.get('email');
    const response = await postCreateVendorStaff.Post({
      email: val.email,
      vendorId,
      phone: val.phone,
      firstName: val.firstName,
      lastName: val.lastName,
      password: encryptedPassword,
    });
    console.log(response);
    if (response?.code === '00') {
      toast.success(response.message);
      setUserTab('verify');
      setEmail(val.email);
    } else {
      toast.error(response.message);
    }
    reset({ email: '', vendorId: '', phone: '', firstName: '', lastName: '', password: '' });
  };
  return (
    <div className=" flex h-full w-full items-center justify-center pt-10 text-center md:h-screen md:pt-10 lg:h-full lg:pt-10 ">
      <div className="relative h-full w-full px-5 pb-32  md:w-2/3 md:px-0 lg:w-1/2 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">Invited to the team</h3>
        <p className="text-base font-semibold">
          Provide Details and Start collaborating with your team
        </p>

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
            disabled
          />
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
            // disabled
          />
          <LabeledInput
            label="Phone Number*"
            id="phone"
            type="tel"
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
          <Button type="submit" label="Continue" className="mt-2 w-full" />
        </form>
      </div>
    </div>
  );
};

export default CreateVendorStaffAccount;
