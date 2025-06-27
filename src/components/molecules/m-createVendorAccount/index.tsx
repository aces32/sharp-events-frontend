import Admin from 'assets/Icon/admin';
import Logo from 'assets/Icon/logo';
import Button from 'components/atoms/a-button';
import { FaAngleDown } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { path } from 'ramda';
import { useForm } from 'react-hook-form';
import usePasswordToggle from 'hoc/password-visibility';
import useFetchHook from 'hooks/useFetchHook';
import Label from 'components/atoms/a-input-label';
import encrypt from 'utils/encrypt';
import VendorRegisterSchema from 'lib/validationSchema/vendorRegisterSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import LabeledInput from '../m-labeled-input';
import ProgressBar from '../m-progress';

interface Props {
  setVendorTab: React.Dispatch<React.SetStateAction<'details' | 'verify' | 'invite' | 'welcome'>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
interface VendorRegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  phone: string;
  password: string;
  service: string[];
}
const CreateVendorAccount = ({ setVendorTab, setEmail }: Props) => {
  const [, registerVendor] = useFetchHook('authentication/vendor-owner-register');
  const [, getService] = useFetchHook('vendor/services');

  const [inputType, icon] = usePasswordToggle();
  const [progress, setProgress] = useState(40);
  const [service, setService] = useState<{ id: string; name: string }[]>([]);
  useEffect(() => {
    const handleService = async () => {
      const response: { data: { id: string; name: string }[] } = await getService.Get();
      const serviceData = response.data || [];
      if (serviceData.length) {
        const uniqueServicesMap = new Map(serviceData.map((item) => [item.name, item]));
        const serviceEl = Array.from(uniqueServicesMap.values());
        serviceEl.sort((a, b) => a.name.localeCompare(b.name));
        setService(serviceEl);
      }
    };
    handleService();
  }, []);
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<VendorRegisterProps>({ resolver: yupResolver(VendorRegisterSchema) });
  const onSubmit = async (val: any) => {
    const encryptedPassword = encrypt(val.password);
    const response = await registerVendor.Post({
      ownerEmail: val.email,
      vendorName: val.businessName,
      vendorPhoneNumber: val.phone,
      ownerPhoneNumber: val.phone,
      ownerFirstName: val.firstName,
      ownerLastName: val.lastName,
      nicheId: val.service,
      password: encryptedPassword,
    });
    if (response?.code === '00') {
      setEmail(val.email);

      setVendorTab('verify');
      setProgress(40);
      toast(response?.description);

      reset({
        email: '',
        businessName: '',
        phone: '',
        firstName: '',
        lastName: '',
        service: [],
        password: '',
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
            label="Business Name*"
            name="businessName"
            id="businessName"
            type="text"
            htmlFor="businessName"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder="Enter your business name"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['businessName', 'message'], errors)}
          />
          <div className="w-full">
            <Label
              label="Service Type*"
              className="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              htmlFor="service"
            />
            <select
              id="service"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              {...register('service', { required: 'Service is required' })}
            >
              {' '}
              <option value="">Select a service</option>
              {service.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <LabeledInput
            label="Email*"
            name="email"
            id="email"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
            placeholder=" olaide@gmail.com"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['email', 'message'], errors)}
          />
          <LabeledInput
            label="Phone Number*"
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
          <Button type="submit" label="Continue" className="mt-2 w-full" />
        </form>
        <ProgressBar progress={progress} segments={5} className="mt-24 px-10  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default CreateVendorAccount;
