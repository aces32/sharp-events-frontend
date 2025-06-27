import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Client',
    value: '12',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Total Active Client',
    value: '₦500,000',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Total Inactive Client',
    value: '15',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Client Return Rate',
    value: '64%',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const AdminClientManagementHeader = () => {
  return (
    <DashboardHeader
      header="Client Management"
      title="Customize event center settings to suit your needs, including layout, services, and integrations"
      stats={stats}
      rightSection={
        <select className="rounded-lg border border-[#00000066] px-4 py-3">
          <option value="month">Filter by Month</option>
          <option value="year">Filter by Year</option>
        </select>
      }
      className="md:grid-cols-2 lg:grid-cols-4"
    />
  );
};

export default AdminClientManagementHeader;
