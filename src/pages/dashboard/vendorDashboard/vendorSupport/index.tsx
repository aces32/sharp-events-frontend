import VendorChat from 'components/molecules/m-vendorChat';
import VendorMessageHeader from 'components/molecules/m-vendorSupportHeader';

const VendorMessage = () => {
  return (
    <div>
      <VendorMessageHeader />
      <VendorChat />
    </div>
  );
};

export default VendorMessage;
