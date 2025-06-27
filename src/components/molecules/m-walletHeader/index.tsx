import Button from 'components/atoms/a-button';
import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Income',
    value: '₦ 200,000',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Expenses',
    value: ' ₦80,000',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: 'Balance',
    value: '₦ 120,000',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Net earning',
    value: '₦ 120,000',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];
const WalletHeader = () => {
  return (
    <DashboardHeader
      header="Wallet"
      title="Take control of your finances"
      stats={stats}
      rightSection={<Button type="button" label="Add transaction" />}
      className="md:grid-cols-2 lg:grid-cols-4"
    />
  );
};

export default WalletHeader;
