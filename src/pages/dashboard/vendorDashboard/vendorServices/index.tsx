import VendorPackagesTable from 'components/molecules/m-vendorPackagesTable';
import VendorServiceListingTable from 'components/molecules/m-vendorServiceListingTable';
import VendorServicesHeader from 'components/molecules/m-vendorServicesHeader';

const VendorServices = () => {
  return (
    <div>
      <VendorServicesHeader />
      <VendorServiceListingTable />
      <VendorPackagesTable />
    </div>
  );
};

export default VendorServices;
