import VendorDashboardHeader from 'components/molecules/m-vendorDashboardHeader';
import VendorActivityStreamTable from 'components/molecules/m-vendorPaymentHistoryTable';
import VendorUpcomingBookingTable from 'components/molecules/m-vendorUpcomingBookingsTable';
import { DoughnutChart, LineGraph } from 'components/organisms/o-graph';

const lineChartData = [
  { day: 'Mon', value: 1 },
  { day: 'Tue', value: 1 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 5 },
  { day: 'Sat', value: 8 },
  { day: 'Sun', value: 8 },
];
const doughnutData = [
  { name: 'Draft Quotation (10%)', value: 10, color: '#808080' },
  { name: 'Sent Quotation (30%)', value: 30, color: '#0000FF' },
  { name: 'Viewed Quotation (40%)', value: 40, color: '#FFFF00' },
  { name: 'Accepted Quotation (15%)', value: 15, color: '#008000' },
  { name: 'Rejected Quotation (5%)', value: 5, color: '#FF0000' },
];

const VendorDashboard = () => {
  return (
    <div>
      <VendorDashboardHeader />
      <div className="mb-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base  font-semibold text-[#000000CC]">
            Quotation Status Distribution
          </h3>
          <hr className="py-1" />
          <DoughnutChart doughnutData={doughnutData} />
        </div>

        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base font-semibold text-[#000000CC]">
            Booking Trend Over Time
          </h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
      </div>
      <VendorUpcomingBookingTable />
      <VendorActivityStreamTable />
    </div>
  );
};

export default VendorDashboard;
