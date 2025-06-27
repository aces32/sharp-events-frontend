import Admin from 'assets/Icon/admin';
import AccountSidebar from '../m-accountSidebar';

const data = [
  {
    id: 1,
    Image: <Admin />,
    title: 'Forgot Your Password',
    description: 'Enter email to reset password',
  },
];
const ForgetPasswordSidebar = () => {
  return <AccountSidebar homeLink="/register" authLink="/login" authText="Log In" items={data} />;
};

export default ForgetPasswordSidebar;
