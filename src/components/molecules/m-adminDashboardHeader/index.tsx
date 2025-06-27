import { useAppSelector } from 'store';
import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';

import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Events Booked',
    value: '65',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Total Revenue',
    value: '₦500,000',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Pending Events',
    value: '5',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Customer Satisfaction Rating',
    value: '4.5/5',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const AdminDashboardHeader = () => {
  const { userFirstName, userLastName } = useAppSelector((state) => state.user);
  return (
    <DashboardHeader
      header={` Welcome ${userFirstName} ${userLastName},`}
      title="Streamline your event operations, boost revenue, and delight your attendees."
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

export default AdminDashboardHeader;
