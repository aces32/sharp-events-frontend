import UserDashboardHeader from 'components/molecules/m-userDashboardHeader';
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
  { name: 'Completed', value: 60, color: '#4CAF50' },
  { name: 'Upcoming', value: 30, color: '#FFFF00' },
  { name: 'In Progress', value: 10, color: '#FF5722' },
];
const Dashboard = () => {
  return (
    <>
      <UserDashboardHeader />
      <div className="my-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base  font-semibold text-[#000000CC]">Booking Trend</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik text-base  font-semibold text-[#000000CC]">Revenue Growth</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
      </div>
      <div className="my-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">Event Popularity</h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">Booking Status</h3>
          <hr className="py-1" />
          <DoughnutChart doughnutData={doughnutData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
