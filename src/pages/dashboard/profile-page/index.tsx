import Button from 'components/atoms/a-button';

import { useForm } from 'react-hook-form';
import ProfilePageSchema from 'lib/validationSchema/ProfilePageSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { path } from 'ramda';
import LabeledInput from 'components/molecules/m-labeled-input';
import { useEffect, useState } from 'react';
import useFetchHook from 'hooks/useFetchHook';
import Toast from 'components/atoms/a-Toast';

interface ProfilePageProps {
  firstName: string;
  lastName: string;
  companyName: string;
  companyEmail: string;
}
const ProfilePage = () => {
  const [, updateUserProfile] = useFetchHook('EventUser/UpdateEventUser');
  const [, getUserProfile] = useFetchHook('EventCenter/GetEventUserByEmailAddress');
  const userEmail = localStorage.getItem('email');
  const [user, setUser] = useState({
    userFirstName: '',
    userLastName: '',
    companyEmail: '',
    companyName: '',
  });

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<ProfilePageProps>({
    resolver: yupResolver(ProfilePageSchema),
  });

  const getProfile = async () => {
    const response = await getUserProfile.GetPayload(`userEmailAddress=${userEmail}`);
    if (response?.success) {
      setUser(response.eventUser);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const onSubmit = async (val: any) => {
    // proper validation needs to be done
    if (val.companyName === '' && val.userFirstName === '' && val.userLastName === '') {
      return;
    }

    const body = {
      companyEmail: user?.companyEmail,
      companyName: val.companyName === '' ? user?.companyName : val.companyName,
      userEmailAddress: userEmail,
      userFirstName: val.firstName === '' ? user?.userFirstName : val.firstName,
      userLastName: val.lastName === '' ? user?.userLastName : val.lastName,
      isManager: true,
    };

    const response = await updateUserProfile.Update(body);
    if (response?.success) {
      setUser(response.eventUser);
      // save user data or not
      // const userData = JSON.stringify(response?.eventUser);
      // localStorage.setItem('user', userData);
      Toast(response.message, { type: 'success' });

      reset({
        firstName: '',
        lastName: '',
        companyEmail: '',
        companyName: '',
      });

      getProfile();
    }
  };

  return (
    <div className="flex items-center justify-center py-[3%]">
      <form
        className="mt-[16px] flex w-3/5 flex-col items-center gap-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-row gap-[2%]">
          <LabeledInput
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            htmlFor="firstName"
            register={register}
            labelClassName="flex w-[49%] flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
            placeholder={user?.userFirstName}
            className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
            error={path(['firstName', 'message'], errors)}
          />
          <LabeledInput
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            htmlFor="lastName"
            register={register}
            labelClassName="flex w-[49%] flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
            placeholder={user?.userLastName}
            className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
            error={path(['lastName', 'message'], errors)}
          />
        </div>
        <LabeledInput
          label="Company Name"
          name="companyName"
          id="companyName"
          type="text"
          htmlFor="name"
          register={register}
          labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
          placeholder={user?.companyName}
          className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
          error={path(['name', 'message'], errors)}
        />
        {/* to use disable or remove completely?? */}
        {/* <div className="relative w-full ">
            <LabeledInput
              label="Company Email"
              name="companyEmail"
              id="companyEmail"
              type="text"
              htmlFor="email"
              register={register}
              labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
              placeholder={user?.companyEmail}
              className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
              error={path(['email', 'message'], errors)}
              disabled
            />
          </div> */}
        {/* <LabeledInput
            label=" Manager Email"
            name="managerEmail"
            id="managerEmail"
            type="text"
            htmlFor="email"
            register={register}
            labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
            placeholder=" olaide@gmail.com"
            className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
            error={path(['managerEmail', 'message'], errors)}
          /> */}
        {/* <Label
            htmlFor="phoneNumber"
            label="Phone Number"
            className="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
          />
          <div className="flex w-full flex-row gap-[2%]">
            <select
              name="CountryCode"
              id="CountryCode"
              className="h-[55px] w-[20%] rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
            >
              <option>+234</option>
            </select>
            <Input
              id="phone"
              type="number"
              name="phone"
              register={register}
              className="h-[55px] w-[78%] rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
              placeholder="87601230"
              error={path(['phone', 'message'], errors)}
            />
          </div> */}
        {/* <div className="relative w-full ">
            <LabeledInput
              label="Company Address"
              name="address"
              id="address"
              type="text"
              htmlFor="address"
              register={register}
              labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
              placeholder="Company Adress"
              className="h-[55px] w-full rounded-[8px] border-none bg-inputbg px-[16px] font-medium outline-none"
              error={path(['address', 'message'], errors)}
            />
          </div> */}
        <div>{/* Image will be rendered here */}</div>
        {/* <LabeledInput
                  label='Profile Image'
                  name='profileImage'
                  id="imageName"
                  type="file"
                  htmlFor="image name"
                  // handleChange={(e) => handleChange(e.target.files)}
                  accept="image/png, image/gif, image/jpeg"
                  labelClassName="flex w-full flex-col gap-[16px] font-sans text-[14px] font-normal text-black"
                  placeholder="50"
                  className=" my-4 block  w-full 
                                    rounded-md border border-gray-300 text-black shadow-sm
                                    file:mr-4 file:rounded-lg file:rounded-r-full file:border-y-0  file:border-l-0
                                    file:border-r-[0.05rem] file:border-white file:bg-gray-50
                                    file:px-4 file:py-3 file:text-sm file:font-medium
                                    hover:file:text-white focus:outline-none md:w-full

                                    lg:md:w-full
                                    xl:w-full"
                  error={path(['profileImage', 'message'], errors)}
                />   
 */}

        <Button label="Update Profile" type="submit" className="w-full" />
        {/* <p>{user}</p> */}
      </form>
    </div>
  );
};

export default ProfilePage;
