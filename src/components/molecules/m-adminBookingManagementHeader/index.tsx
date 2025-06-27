import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Bookings',
    value: '150',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Bookings Confirmed',
    value: '30',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Bookings Pending',
    value: '30',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Canceled Bookings',
    value: '20',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const AdminBookingManagementHeader = () => {
  return (
    <DashboardHeader
      header=" Booking Management"
      title="Efficient Booking Management for Increased Revenue and Attendee Satisfaction"
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

export default AdminBookingManagementHeader;
