import Message from 'components/molecules/m-messageBox';
import { useLocation } from 'react-router-dom';
import VendorSupportHeaderChat from '../m-vendorSupportHeaderChat';
import VendorClientInfo from '../m-vendorClientInfo';

const VendorSupportChat = () => {
  const location = useLocation();
  const { id, name, date, phone, email, message, reply, status } = location.state || {};
  return (
    <div>
      <VendorSupportHeaderChat id={id} />
      <VendorClientInfo name={name} date={date} phone={phone} email={email} />
      <Message message={message} name={name} reply={reply} status={status} />
    </div>
  );
};

export default VendorSupportChat;
