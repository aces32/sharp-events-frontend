import UserSidebar from 'components/molecules/m-UserSidebar';
import CreateUserAccount from 'components/molecules/m-createUserAccount';
import UserVerification from 'components/molecules/m-userVerification';
import UserWelcomePage from 'components/molecules/m-userWelcomePage';
import HomeWrapper from 'hoc/home-wrapper';
import { useState } from 'react';

const UserSignUp = () => {
  const [userTab, setUserTab] = useState<'details' | 'verify' | 'welcome'>('details');
  const [email, setEmail] = useState<string>('');
  const tabContent = {
    details: <CreateUserAccount setUserTab={setUserTab} setEmail={setEmail} />,
    verify: <UserVerification setUserTab={setUserTab} email={email} />,
    welcome: <UserWelcomePage />,
  };
  return (
    <HomeWrapper>
      <div className="block h-full w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden w-1/3 md:block">
          <UserSidebar />
        </div>
        <div className=" h-full w-full md:w-2/3">{tabContent[userTab]}</div>
      </div>
    </HomeWrapper>
  );
};

export default UserSignUp;
