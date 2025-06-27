import AdminEventAnalyticsHeader from 'components/molecules/m-adminEventAnalyticsHeader';
import AdminEventBookingTable from 'components/molecules/m-eventBookingsTable';
import AdminPaymentStatusTable from 'components/molecules/m-paymentStatusTable';
import { DoughnutChart, LineGraph } from 'components/organisms/o-graph';

const doughnutData = [
  { name: '5-star ratings', value: 60, color: '#4CAF50' },
  { name: '4-star ratings', value: 30, color: '#FFFF00' },
  { name: '3-star ratings', value: 10, color: '#FF5722' },
];
const lineChartData = [
  { day: 'Mon', value: 1 },
  { day: 'Tue', value: 1 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 5 },
  { day: 'Sat', value: 8 },
  { day: 'Sun', value: 8 },
];
const AdminEventAnalytics = () => {
  return (
    <div>
      <AdminEventAnalyticsHeader />
      <div className="mb-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">Event Hosted</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">
            Customer Satisfaction
          </h3>
          <hr className="py-1" />
          <DoughnutChart doughnutData={doughnutData} />
        </div>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">
          Revenue Growth Over Time
        </h3>
        <hr className="py-1" />
        <LineGraph lineChartData={lineChartData} />
      </div>
      <AdminEventBookingTable />
      <AdminPaymentStatusTable />
    </div>
  );
};

export default AdminEventAnalytics;
