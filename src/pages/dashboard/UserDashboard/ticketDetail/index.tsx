import { useParams, Link } from 'react-router-dom';
import Button from 'components/atoms/a-button';

import { FaCalendarCheck, FaHourglassHalf, FaMoneyBillWave, FaHeart } from 'react-icons/fa';
import DashboardHeader from 'components/molecules/m-dashboardHeader';

const stats = [
  {
    id: '001',
    ticketId: '#012345',
    eventCenter: 'Oniru',
    ticketSale: 1200,
    ticketRevenue: 600000,
    dateCreated: '28/07/2024',
    details: [
      {
        id: 1,
        title: 'Total Number Of Ticket',
        value: 'N 200,000',
        icon: <FaMoneyBillWave />,
        bgColor: 'bg-yellow-100',
      },
      {
        id: 2,
        title: 'Sold ticket',
        value: 'N 150,000',
        icon: <FaCalendarCheck />,
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        title: 'Available Ticket',
        value: '7%',
        icon: <FaHourglassHalf />,
        bgColor: 'bg-red-100',
      },

      {
        id: 4,
        title: 'Ticket Refunded',
        value: 'N 6,000',
        icon: <FaHeart />,
        bgColor: 'bg-pink-100',
      },
    ],
  },
  {
    id: '002',
    ticketId: '#012345',
    eventCenter: 'D-Place',
    ticketSale: 1000,
    ticketRevenue: 500000,
    dateCreated: '20/07/2024',
    details: [
      {
        id: 1,
        title: 'Total Number Of Ticket',
        value: 'N 300,000',
        icon: <FaMoneyBillWave />,
        bgColor: 'bg-yellow-100',
      },
      {
        id: 2,
        title: 'Sold ticket',
        value: 'N 250,000',
        icon: <FaCalendarCheck />,
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        title: 'Available Ticket',
        value: '7%',
        icon: <FaHourglassHalf />,
        bgColor: 'bg-red-100',
      },

      {
        id: 4,
        title: 'Ticket Refunded',
        value: 'N 8,000',
        icon: <FaHeart />,
        bgColor: 'bg-pink-100',
      },
    ],
  },
  {
    id: '003',
    ticketId: '#012345',
    eventCenter: 'Arise',
    ticketSale: 1500,
    ticketRevenue: 600000,
    dateCreated: '17/07/2024',
    details: [
      {
        id: 1,
        title: 'Total Number Of Ticket',
        value: 'N 400,000',
        icon: <FaMoneyBillWave />,
        bgColor: 'bg-yellow-100',
      },
      {
        id: 2,
        title: 'Sold ticket',
        value: 'N 350,000',
        icon: <FaCalendarCheck />,
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        title: 'Available Ticket',
        value: '11%',
        icon: <FaHourglassHalf />,
        bgColor: 'bg-red-100',
      },

      {
        id: 4,
        title: 'Ticket Refunded',
        value: 'N 10,000',
        icon: <FaHeart />,
        bgColor: 'bg-pink-100',
      },
    ],
  },
  {
    id: '004',
    ticketId: '#012345',
    eventCenter: 'Fortune',
    ticketSale: 2500,
    ticketRevenue: 1250000,
    dateCreated: '14/07/2024',
    details: [
      {
        id: 1,
        title: 'Total Number Of Ticket',
        value: 'N 500,000',
        icon: <FaMoneyBillWave />,
        bgColor: 'bg-yellow-100',
      },
      {
        id: 2,
        title: 'Sold ticket',
        value: 'N 550,000',
        icon: <FaCalendarCheck />,
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        title: 'Available Ticket',
        value: '20%',
        icon: <FaHourglassHalf />,
        bgColor: 'bg-red-100',
      },

      {
        id: 4,
        title: 'Ticket Refunded',
        value: 'N 12,000',
        icon: <FaHeart />,
        bgColor: 'bg-pink-100',
      },
    ],
  },
  {
    id: '005',
    ticketId: '#012345',
    eventCenter: 'Celina',
    ticketSale: 2000,
    ticketRevenue: 1000000,
    dateCreated: '07/07/2024',
    details: [
      {
        id: 1,
        title: 'Total Number Of Ticket',
        value: 'N 900,000',
        icon: <FaMoneyBillWave />,
        bgColor: 'bg-yellow-100',
      },
      {
        id: 2,
        title: 'Sold ticket',
        value: 'N 750,000',
        icon: <FaCalendarCheck />,
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        title: 'Available Ticket',
        value: '72%',
        icon: <FaHourglassHalf />,
        bgColor: 'bg-red-100',
      },

      {
        id: 4,
        title: 'Ticket Refunded',
        value: 'N 9,000',
        icon: <FaHeart />,
        bgColor: 'bg-pink-100',
      },
    ],
  },
];

const TicketDetail = () => {
  const { id } = useParams<{ id: string }>();
  const statsData = stats.find((item) => item.id === id);
  return (
    <DashboardHeader
      header={statsData?.eventCenter || ''}
      title="Check your  Event Ticket detail with ease"
      stats={statsData?.details || []}
      rightSection={
        <Link to="/dashboard/user/createInvite">
          <Button type="button" label="Create Invite" />
        </Link>
      }
      className="md:grid-cols-2 lg:grid-cols-4"
    />
  );
};

export default TicketDetail;
