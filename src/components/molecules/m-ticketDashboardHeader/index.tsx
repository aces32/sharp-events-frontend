import Button from 'components/atoms/a-button';
import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from '../m-dashboardHeader';

const stats = [
  {
    id: 1,
    title: 'Total Ticket Sales',
    value: '₦ 200,000',
    icon: <FaMoneyBillWave />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 2,
    title: 'Total Revenue',
    value: '₦ 150,000',
    icon: <FaCalendarCheck />,
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Total Sales Growth',
    value: '7%',
    icon: <FaHourglassHalf />,
    bgColor: 'bg-red-100',
  },

  {
    id: 4,
    title: 'Average Ticket Price',
    value: '₦ 6,000',
    icon: <FaHeart />,
    bgColor: 'bg-pink-100',
  },
];
const TicketDashboardHeader = () => {
  return (
    <DashboardHeader
      header="Ticket Sales"
      title="Maximize your revenue with data-driven ticket strategies."
      stats={stats}
      rightSection={
        <div className="grid grid-cols-2 items-center gap-5">
          <Button
            type="button"
            label="Generate Report"
            className="w-full border border-primary bg-white !text-primary"
          />
          <Link to="/dashboard/user/addTicket">
            <Button type="button" label="Add New Ticket" className="w-full" />
          </Link>
        </div>
      }
      className="md:grid-cols-2 lg:grid-cols-4"
    />
  );
};

export default TicketDashboardHeader;
