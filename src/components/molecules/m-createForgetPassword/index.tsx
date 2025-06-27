import Logo from 'assets/Icon/logo';

import { path } from 'ramda';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ForgetPasswordSchema from 'lib/validationSchema/forget-password';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/a-button';
import useFetchHook from 'hooks/useFetchHook';

import { toast } from 'react-toastify';
import LabeledInput from '../m-labeled-input';

interface ForgetPasswordProps {
  email: string;
}
const CreateForgetPassword = () => {
  const [, ForgotPassword] = useFetchHook('authentication/forget-password');
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<ForgetPasswordProps>({
    resolver: yupResolver(ForgetPasswordSchema),
  });
  console.log(errors);

  const onSubmit = async (val: ForgetPasswordProps) => {
    console.log(val);
    const response = await ForgotPassword.Post({
      email: val.email,
    });
    console.log(response);
    if (response?.code === '00') {
      toast(response?.message);
    }

    reset({
      email: '',
    });
  };
  return (
    <div className="flex h-full w-full items-center justify-center pt-10 text-center md:h-screen lg:h-full ">
      <div className="relative h-full w-full px-5 pb-32  md:w-2/3 md:px-0 lg:w-1/2 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold capitalize">Forgot your Password</h3>
        <p className="text-base font-semibold capitalize">Enter your email to reset password</p>

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
          <Button type="submit" label="Recover My Password" className="mt-2 w-full" />
        </form>
        <p className="pt-5 font-Rubik text-sm font-medium capitalize">
          Already have an account?{' '}
          <Link to="/login" className="text-primaryText">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateForgetPassword;
