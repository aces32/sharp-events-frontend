import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';

import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Average Rating',
    value: '4.5/5',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Number of Reviews',
    value: '125',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Positive Feedback',
    value: '85%',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Review Response Rate',
    value: '80%',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const ReviewHeader = () => {
  return (
    <DashboardHeader
      header="Ratings & reviews"
      title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
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

export default ReviewHeader;
