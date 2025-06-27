import CreateVendorAccount from 'components/molecules/m-createVendorAccount';
import VendorInvite from 'components/molecules/m-vendorInvite';
import VendorSideBar from 'components/molecules/m-vendorSideBar';
import VendorVerification from 'components/molecules/m-vendorVerification';
import VendorWelcomePage from 'components/molecules/m-vendorWelcomePage';
import HomeWrapper from 'hoc/home-wrapper';
import { useState } from 'react';

const VendorSignUp = () => {
  const [vendorTab, setVendorTab] = useState<'details' | 'verify' | 'invite' | 'welcome'>(
    'details',
  );
  const [email, setEmail] = useState<string>('');
  const [vendorName, setVendorName] = useState<string>('');
  const [vendorId, setVendorId] = useState<string>('');
  const tabContent = {
    details: <CreateVendorAccount setVendorTab={setVendorTab} setEmail={setEmail} />,
    verify: (
      <VendorVerification
        setVendorTab={setVendorTab}
        email={email}
        setVendorName={setVendorName}
        setVendorId={setVendorId}
      />
    ),
    invite: (
      <VendorInvite setVendorTab={setVendorTab} vendorName={vendorName} vendorId={vendorId} />
    ),
    welcome: <VendorWelcomePage />,
  };
  return (
    <HomeWrapper>
      <div className="relative block h-full w-full justify-between bg-[#F6F7F9] md:flex">
        <div className="hidden w-1/3 md:block">
          <VendorSideBar />
        </div>
        <div className=" h-full w-full md:w-2/3">{tabContent[vendorTab]}</div>
      </div>
    </HomeWrapper>
  );
};

export default VendorSignUp;
