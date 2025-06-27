import AdminInvite from 'components/molecules/m-adminInvite';
import AdminSidebar from 'components/molecules/m-adminSidebar';
import AdminVerification from 'components/molecules/m-adminVerification';
import AdminWelcomePage from 'components/molecules/m-adminWelcomePage';
import CreateAdminAccount from 'components/molecules/m-createAdminAccount';

import HomeWrapper from 'hoc/home-wrapper';
import { useState } from 'react';

const AdminSignUp = () => {
  const [adminTab, setAdminTab] = useState<'details' | 'verify' | 'invite' | 'welcome'>('details');
  const [email, setEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [companyId, setCompanyId] = useState<string>('');
  const tabContent = {
    details: <CreateAdminAccount setAdminTab={setAdminTab} setEmail={setEmail} />,
    verify: (
      <AdminVerification
        setAdminTab={setAdminTab}
        email={email}
        setCompanyName={setCompanyName}
        setCompanyId={setCompanyId}
      />
    ),
    invite: (
      <AdminInvite setAdminTab={setAdminTab} companyName={companyName} companyId={companyId} />
    ),
    welcome: <AdminWelcomePage />,
  };
  return (
    <HomeWrapper>
      <div className="relative block h-full w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden w-1/3 md:block">
          <AdminSidebar />
        </div>
        <div className=" h-full w-full md:w-2/3">{tabContent[adminTab]}</div>
      </div>
    </HomeWrapper>
  );
};

export default AdminSignUp;
