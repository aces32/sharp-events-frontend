import NewPassword from 'components/molecules/m-newPassword';
import ResetPasswordSidebar from 'components/molecules/m-resetPasswordSidebar';

import HomeWrapper from 'hoc/home-wrapper';

const Reset = () => {
  return (
    <HomeWrapper>
      <div className="block h-full w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden h-screen w-1/3 md:block">
          <ResetPasswordSidebar />
        </div>
        <div className=" h-full w-full md:w-2/3">
          <NewPassword />
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Reset;
// import Button from 'components/atoms/a-button';
// import HomeWrapper from 'hoc/home-wrapper';
// import changePasswordSchema from 'lib/validationSchema/change-password';
// import { useForm } from 'react-hook-form';
// import { path } from 'ramda';
// import { yupResolver } from '@hookform/resolvers/yup';
// import LabeledInput from 'components/molecules/m-labeled-input';
// import useFetchHook from 'hooks/useFetchHook';
// import { useLocation, useNavigate } from 'react-router-dom';

// interface ResetPasswordProp {
//   npassword: string;
//   cpassword: string;
// }

// const Reset = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [, ResetPassword] = useFetchHook('EventUser/ResetPassword');
//   const { emailAddress, code } = location.state || {};
//   const {
//     formState: { errors },
//     handleSubmit,
//     reset,
//     register,
//   } = useForm<ResetPasswordProp>({
//     resolver: yupResolver(changePasswordSchema),
//   });

//   /* eslint-disable @typescript-eslint/no-unused-vars */
//   const onSubmit = async (val: ResetPasswordProp) => {
//     reset({
//       npassword: '',
//       cpassword: '',
//     });

//     try {
//       const response = await ResetPassword.Post({
//         emailAddress,
//         code: encodeURIComponent(code).trim(),
//         newPassword: val.npassword,
//       });

//       if (response?.success) {
//         navigate('/login');
//       }
//     } catch (error: any) {
//       console.error('Error:', error.response?.data?.error || 'Something went wrong.');
//     }
//   };

//   return (
//     <HomeWrapper>
//       <div className="relative flex w-full flex-col gap-[40px] pb-[60px]">
//         <div className="mx-auto flex h-auto w-3/5 flex-col items-center gap-[16px] border border-secondaryText py-[50px]">
//           <p className="font-sans text-[32px] font-bold text-primaryText">Reset Password</p>
//           <p className="font-sans text-[20px] font-medium text-primaryText">
//             Set your new password
//           </p>

//           <form
//             className="mt-[16px] flex w-3/5 flex-col items-center gap-[24px]"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <LabeledInput
//               label="Password"
//               name="npassword"
//               id="npassword"
//               type="password"
//               htmlFor="npassword"
//               register={register}
//               labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
//               placeholder=" olaide@gmail.com"
//               className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
//               error={path(['npassword', 'message'], errors)}
//             />
//             <LabeledInput
//               label="Confirm Password"
//               name="cpassword"
//               id="cpassword"
//               type="password"
//               htmlFor="cpassword"
//               register={register}
//               labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
//               placeholder=" olaide@gmail.com"
//               className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
//               error={path(['cpassword', 'message'], errors)}
//             />

//             <Button label="Reset Password" type="submit" className="w-full" />
//           </form>
//         </div>
//       </div>
//     </HomeWrapper>
//   );
// };

// export default Reset;
