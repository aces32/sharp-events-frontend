import AdminEventListTable from 'components/molecules/m-adminEventListTable';
import AdminEventManagementHeader from 'components/molecules/m-adminEventMangementHeader';
import { DoughnutChart, LineGraph } from 'components/organisms/o-graph';

const doughnutData = [
  { name: 'Confirmed Event', value: 40, color: '#4CAF50' },
  { name: 'Pending Events', value: 20, color: '#FFFF00' },
  { name: 'in progress events', value: 30, color: '#FFA500' },
  { name: 'Canceled Event', value: 10, color: '#FF5722' },
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
const AdminEventManagement = () => {
  return (
    <div>
      <AdminEventManagementHeader />
      <div className="mb-5 grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">
            Event Status Distribution
          </h3>
          <hr className="py-1" />
          <DoughnutChart doughnutData={doughnutData} />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="font-Rubik  text-base font-semibold text-[#000000CC]">
            Event Performance Over Time
          </h3>
          <hr className="py-1" />
          <LineGraph lineChartData={lineChartData} />
        </div>
      </div>
      <AdminEventListTable />
    </div>
  );
};

export default AdminEventManagement;
