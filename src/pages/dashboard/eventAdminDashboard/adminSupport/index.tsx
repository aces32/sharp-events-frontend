import AdminSupportHeader from 'components/molecules/m-adminSupportHeader';
import AdminClientInfo from 'components/molecules/m-clientInfo';
import Message from 'components/molecules/m-messageBox';
import { useLocation } from 'react-router-dom';

const AdminSupport = () => {
  const location = useLocation();
  const { id, name, date, phone, email, message, reply, status } = location.state || {};
  return (
    <div>
      <AdminSupportHeader id={id} />
      <AdminClientInfo name={name} date={date} phone={phone} email={email} />
      <Message name={name} message={message} reply={reply} status={status} />
    </div>
  );
};

export default AdminSupport;
