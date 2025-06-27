import VendorBookingHeader from 'components/molecules/m-vendorBookingHeader';
// import VendorCancelledBookingTable from 'components/molecules/m-vendorCancelledBookingTable';
// import VendorCompletedBookingTable from 'components/molecules/m-vendorCompletedBookingTable';
import VendorUpcomingBookingTable from 'components/molecules/m-vendorUpcomingBookingsTable';
// import { LineGraph } from 'components/organisms/o-graph';

// const lineChartData = [
//   { day: 'Mon', value: 1 },
//   { day: 'Tue', value: 1 },
//   { day: 'Wed', value: 5 },
//   { day: 'Thu', value: 4 },
//   { day: 'Fri', value: 5 },
//   { day: 'Sat', value: 8 },
//   { day: 'Sun', value: 8 },
// ];
const VendorBooking = () => {
  return (
    <div>
      <VendorBookingHeader />

      <VendorUpcomingBookingTable />
      {/* <VendorCompletedBookingTable /> */}
      {/* <VendorCancelledBookingTable /> */}
    </div>
  );
};

export default VendorBooking;
