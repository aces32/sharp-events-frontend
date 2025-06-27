import Admin from 'assets/Icon/admin';
import AccountSidebar from '../m-accountSidebar';

const data = [
  {
    id: 1,
    Image: <Admin />,
    title: 'Set New password',
    description: 'your password to Get access to your account.',
  },
];
const ResetPasswordSidebar = () => {
  return <AccountSidebar homeLink="/register" authLink="/login" authText="Log In" items={data} />;
};

export default ResetPasswordSidebar;
