import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Vendor',
    value: '100',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Booked vendors',
    value: ' 55',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Available vendor',
    value: '45',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
];
const ServiceProviderHeader = () => {
  return (
    <DashboardHeader
      header="Service Provider"
      title="find and partner with reliable service providers"
      stats={stats}
      className="md:grid-cols-2 lg:grid-cols-3"
    />
  );
};

export default ServiceProviderHeader;
