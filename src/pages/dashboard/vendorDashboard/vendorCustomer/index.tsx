import DashboardHeader from 'components/molecules/m-dashboardHeader';
import { useState } from 'react';
import VerifyCustomer from '../verifyCustomer';
import CustomerIdentity from '../customerIdentity';
import CustomerImage from '../customerImage';
import CustomerDetails from '../customerDetails';

const VendorCustomer = () => {
  const [tab, setTab] = useState<'verify' | 'identity' | 'image' | 'details'>('verify');
  const tabContent = {
    verify: <VerifyCustomer setTab={setTab} />,
    identity: <CustomerIdentity setTab={setTab} />,
    image: <CustomerImage setTab={setTab} />,
    details: <CustomerDetails setTab={setTab} />,
  };
  return (
    <div>
      <DashboardHeader
        header="Account Verification"
        title="Verify Your Identity and get started."
      />
      <div>{tabContent[tab]}</div>
    </div>
  );
};

export default VendorCustomer;
