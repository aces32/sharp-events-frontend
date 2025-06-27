import { useAppSelector } from 'store';
import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';

import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Booked Event Center',
    value: '12.00',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Pending Event Center',
    value: '1.00',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Total Ticket Sales',
    value: '₦ 200,000',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  { id: 4, title: 'Favorite Event Centers', value: '6', icon: <FaHeart />, bgColor: 'bg-pink-100' },
];

const UserDashboardHeader = () => {
  const { userFirstName, userLastName } = useAppSelector((state) => state.user);
  return (
    <DashboardHeader
      header={` Welcome ${userFirstName} ${userLastName},`}
      title="Track your booked event regularly for more memories."
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

export default UserDashboardHeader;
