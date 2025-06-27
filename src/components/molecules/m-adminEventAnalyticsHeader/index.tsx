import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Revenue (YTD)',
    value: '₦500,000',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Events Hosted',
    value: '75',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Venue Occupancy Rate',
    value: '80%',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Customer Satisfaction',
    value: '4.8/5',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const AdminEventAnalyticsHeader = () => {
  return (
    <DashboardHeader
      header="Event Analytics"
      title="Get a deeper understanding of your attendees and their behavior"
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

export default AdminEventAnalyticsHeader;
