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
    title: 'Approved Event Center',
    value: '10.00',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Pending Event Center',
    value: '1.00',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Cancelled Event Center',
    value: '1.00',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];

const EventMangementHeader = () => {
  return (
    <div>
      <DashboardHeader
        header="Event Management"
        title="Check your  Event Ticket detail with ease"
        stats={stats}
        className="md:grid-cols-2 lg:grid-cols-4"
      />
    </div>
  );
};

export default EventMangementHeader;
