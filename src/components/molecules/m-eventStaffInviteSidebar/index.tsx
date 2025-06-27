import Admin from 'assets/Icon/admin';
import AccountSidebar from '../m-accountSidebar';

const EventStaffInviteSidebar = () => {
  const data = [
    {
      id: 1,
      Image: <Admin />,
      title: 'Your details',
      description: 'Provide an email and password',
    },
  ];
  return (
    <AccountSidebar items={data} homeLink="/register" authLink="/register" authText="Sign Up" />
  );
};

export default EventStaffInviteSidebar;
