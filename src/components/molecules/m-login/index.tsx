import Logo from 'assets/Icon/logo';
import Button from 'components/atoms/a-button';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoginSchema from 'lib/validationSchema/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { path } from 'ramda';
import LabeledInput from 'components/molecules/m-labeled-input';
import usePasswordToggle from 'hoc/password-visibility';
import useFetchHook from 'hooks/useFetchHook';
import { setAuthToken } from 'utils/cookies';
import Toast from 'components/atoms/a-Toast';
import { useAppDispatch } from 'store';
import { UserSliceAction } from 'store/reducers/user';
import Input from 'components/atoms/a-input';
import Label from 'components/atoms/a-input-label';
import encrypt from 'utils/encrypt';
import ProgressBar from '../m-progress';

interface LoginProps {
  email: string;
  password: string;
}
const LoginAccount = () => {
  const dispatch = useAppDispatch();
  const { setUserData } = UserSliceAction;

  const [, postLoginCredentials] = useFetchHook('authentication/login');
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<LoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const [inputType, icon] = usePasswordToggle();
  const navigate = useNavigate();
  const onSubmit = async (val: LoginProps) => {
    const encryptedPassword = encrypt(val.password);
    console.log('Submitted login email:', val.email);

    const response = await postLoginCredentials.Post({
      email: val.email,
      password: encryptedPassword,
    });
    console.log(response);

    if (response?.code === '00') {
      const threeDayFromNow = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
      const userData = response?.data.user;
      setAuthToken(response?.data?.token, threeDayFromNow);
      console.log('Setting user data from:', response?.data?.user);

      dispatch(
        setUserData({
          companyEmail: response?.data?.user.email || '',
          companyName: '',
          eventUserId: '',
          userFirstName: response?.data?.user.firstName || '',
          userLastName: response?.data?.user.lastName || '',
          serviceId: response?.data?.user.nicheId || '',
          serviceName: response?.data?.user.nicheName || '',
        }),
      );

      Toast('login successful', { type: 'success' });
      const userRole = userData?.roles;
      if (userRole?.includes('USER')) {
        navigate('/dashboard/user');
      } else if (userRole?.includes('EVENT_OWNER')) {
        navigate('/dashboard/admin');
      } else if (userRole?.includes('VENDOR')) {
        navigate('/dashboard/vendor');
      }
    }

    reset({
      email: '',
      password: '',
    });
  };
  return (
    <div className=" flex h-screen w-full items-center justify-center pt-10 text-center ">
      <div className="relative h-full w-full px-5 md:w-2/3 md:px-0 lg:w-2/5 ">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-bold">Login into your account</h3>
        <p className="text-base font-semibold">enter your email and password to login</p>
        <form
          className="mt-4 flex w-full flex-col items-center gap-3 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <LabeledInput
            label="Email*"
            name="email"
            id="email"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-1 font-Rubik text-[14px] font-bold text-black"
            placeholder="user@gmail.com"
            className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
            error={path(['email', 'message'], errors)}
          />
          <div className="relative w-full ">
            <span className="absolute right-2 top-1/2 z-10 my-3 -translate-y-1/2 cursor-pointer">
              {icon}
            </span>
            <LabeledInput
              label="Password*"
              name="password"
              id="password"
              type={inputType}
              htmlFor="password"
              register={register}
              labelClassName="flex w-full flex-col gap-1 font-Rubik text-[14px] font-bold text-black"
              placeholder="*********"
              className="w-full rounded-[8px] border border-[#00000099] bg-transparent px-[16px] py-2 font-medium outline-none"
              error={path(['password', 'message'], errors)}
            />
          </div>
          <Button label="Log In" type="submit" className="w-full" />
          <div className="flex w-full items-center justify-between text-xs font-medium text-primary">
            <div className="flex items-center gap-2">
              <Input type="checkbox" name="remember" id="remember" />
              <Label label="Remember me" htmlFor="remember" className="" />
            </div>
            <Link to="/forget-password">Forgot password?</Link>
          </div>
        </form>
        <ProgressBar progress={50} segments={2} className="mt-24 px-5  md:mt-20 md:px-0" />
      </div>
    </div>
  );
};

export default LoginAccount;
