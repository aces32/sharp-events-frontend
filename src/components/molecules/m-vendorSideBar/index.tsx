import Admin from 'assets/Icon/admin';
import AccountSidebar from '../m-accountSidebar';

const data = [
  { id: 1, Image: <Admin />, title: 'Your details', description: 'Provide an email and password' },
  {
    id: 2,
    Image: <Admin />,
    title: 'Verify your email',
    description: 'Enter your verification code',
  },
  {
    id: 3,
    Image: <Admin />,
    title: 'Invite your team',
    description: 'Start Collaborating with your team',
  },
  {
    id: 4,
    Image: <Admin />,
    title: 'Welcome to SharpEvent.',
    description: 'Manage your bookings and events in one place',
  },
];

const VendorSideBar = () => {
  return <AccountSidebar homeLink="/register" authLink="/login" authText="Log In" items={data} />;
};

export default VendorSideBar;
