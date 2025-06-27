import VendorPaymentHeader from 'components/molecules/m-vendorPaymentHeader';
import VendorPaymentTable from 'components/molecules/m-vendorPaymentTable';
import VendorRefundTable from 'components/molecules/m-vendorRefundTable';
import { LineGraph } from 'components/organisms/o-graph';

const lineChartData = [
  { day: 'Mon', value: 1, pending: 1.5 },
  { day: 'Tue', value: 1, pending: 1.5 },
  { day: 'Wed', value: 5, pending: 5.5 },
  { day: 'Thu', value: 4, pending: 4.5 },
  { day: 'Fri', value: 5, pending: 5.5 },
  { day: 'Sat', value: 8, pending: 8.5 },
  { day: 'Sun', value: 8, pending: 8.5 },
];
const VendorPayment = () => {
  return (
    <div>
      <VendorPaymentHeader />
      <div className="my-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold">Booking Trend</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>

        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold">Payments Received vs Pending</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} color="yellow" yKey="pending" />
        </div>
      </div>
      <VendorPaymentTable />
      <VendorRefundTable />
    </div>
  );
};

export default VendorPayment;
