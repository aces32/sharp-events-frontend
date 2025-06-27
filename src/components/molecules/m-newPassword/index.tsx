import Button from 'components/atoms/a-button';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { path } from 'ramda';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import changePasswordSchema from 'lib/validationSchema/change-password';
import Logo from 'assets/Icon/logo';
import usePasswordToggle from 'hoc/password-visibility';
import useFetchHook from 'hooks/useFetchHook';
import LabeledInput from '../m-labeled-input';

interface ResetPasswordProp {
  npassword: string;
  cpassword: string;
}
const NewPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [nPasswordType, nPasswordIcon] = usePasswordToggle();
  const [cPasswordType, cPasswordIcon] = usePasswordToggle();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const [, ResetPassword] = useFetchHook('authentication/reset-password');
  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = useForm<ResetPasswordProp>({
    resolver: yupResolver(changePasswordSchema),
  });
  const onSubmit = async (val: ResetPasswordProp) => {
    console.log(val);
    const response = await ResetPassword.Post({
      email,
      password: val.npassword,
      token,
    });
    if (response?.code === '00') {
      navigate('/login');

      reset({
        npassword: '',
        cpassword: '',
      });
    }
  };
  return (
    <div className="flex h-full w-full items-center justify-center pt-10 text-center md:h-screen lg:h-full ">
      <div className="relative h-full w-full px-5 pb-32  md:w-2/3 md:px-0 lg:w-1/2 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold capitalize">Set new password</h3>
        <p className="text-base font-semibold capitalize">
          Set your password to get access to your account
        </p>

        <form
          className="mt-5 flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative  w-full">
            <span className="absolute right-2 top-1/2 z-10 my-3 -translate-y-1/2 cursor-pointer">
              {' '}
              {nPasswordIcon}
            </span>
            <LabeledInput
              label="Password"
              name="npassword"
              id="npassword"
              type={nPasswordType}
              htmlFor="npassword"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="*********"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['npassword', 'message'], errors)}
            />
          </div>
          <div className="relative  w-full">
            <span className="absolute right-2 top-1/2 z-10 my-3 -translate-y-1/2 cursor-pointer">
              {' '}
              {cPasswordIcon}
            </span>
            <LabeledInput
              label="Confirm Password"
              name="cpassword"
              id="cpassword"
              type={cPasswordType}
              htmlFor="cpassword"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-sans text-[14px] font-bold text-black"
              placeholder="*********"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['cpassword', 'message'], errors)}
            />
          </div>

          <Button label="Reset Password" type="submit" className="w-full" />
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

export default NewPassword;
