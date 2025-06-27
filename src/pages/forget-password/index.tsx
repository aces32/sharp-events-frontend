import CreateForgetPassword from 'components/molecules/m-createForgetPassword';
import ForgetPasswordSidebar from 'components/molecules/m-forgetPasswordSidebar';

import HomeWrapper from 'hoc/home-wrapper';

const ForgetPassword = () => {
  return (
    <HomeWrapper>
      <div className="block h-full w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden h-screen w-1/3 md:block">
          <ForgetPasswordSidebar />
        </div>
        <div className=" h-full w-full md:w-2/3">
          <CreateForgetPassword />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default ForgetPassword;

// import Button from 'components/atoms/a-button';
// import LabeledInput from 'components/molecules/m-labeled-input';
// import { useForm } from 'react-hook-form';
// import { path } from 'ramda';
// import { yupResolver } from '@hookform/resolvers/yup';
// import ForgetPasswordSchema from 'lib/validationSchema/forget-password';
// import HomeWrapper from 'hoc/home-wrapper';
// import useFetchHook from 'hooks/useFetchHook';
// import { useNavigate } from 'react-router-dom';

// interface ForgetPasswordProps {
//   email: string;
// }
// const ForgetPassword = () => {
//   const navigate = useNavigate();
//   const [, ForgotPassword] = useFetchHook('EventUser/ForgotPassword');
//   const {
//     formState: { errors },
//     handleSubmit,
//     reset,
//     register,
//   } = useForm<ForgetPasswordProps>({
//     resolver: yupResolver(ForgetPasswordSchema),
//   });

//   /* eslint-disable @typescript-eslint/no-unused-vars */
//   const onSubmit = async (val: ForgetPasswordProps) => {
//     reset({
//       email: '',
//     });

//     try {
//       const response = await ForgotPassword.Post({ emailAddress: val.email });
//       if (response?.success) {
//         const resetPasswordUrl = new URL(response.resetPasswordUrl);
//         const emailAddress = resetPasswordUrl.searchParams.get('email');
//         const code = resetPasswordUrl.searchParams.get('code');

//         navigate('/reset-password', { state: { emailAddress, code } });
//       }
//     } catch (error: any) {
//       console.error('Error:', error.response?.data?.error || 'Something went wrong.');
//     }
//   };

//   return (
//     <HomeWrapper>
//       <div className="relative flex w-full flex-col gap-[40px]">
//         <div className="mx-auto flex w-[92%] flex-row gap-[100px]">
//           <div className="flex w-[500px] flex-col gap-[24px]">
//             <p className="font-sans text-[32px] font-bold text-secondaryText">Forgot Password</p>
//             <p className="font-sans text-[16px] font-medium text-black">
//               Fill in your E-mail address to recover your password
//             </p>

//             <form
//               className="mt-[16px] flex w-full flex-col gap-[50px]"
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <LabeledInput
//                 label="Email"
//                 name="email"
//                 id="email"
//                 type="text"
//                 htmlFor="email"
//                 register={register}
//                 labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
//                 placeholder=" olaide@gmail.com"
//                 className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
//                 error={path(['email', 'message'], errors)}
//               />

//               <Button label="Continue" type="submit" className="w-full" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </HomeWrapper>
//   );
// };

// export default ForgetPassword;
