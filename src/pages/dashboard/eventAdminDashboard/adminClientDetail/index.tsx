import AdminClientDetailHeader from 'components/molecules/m-AdminClientDetailHeader';
import AdminClientInformation from 'components/molecules/m-adminClientInformation';
import AdminBookingHistoryTable from 'components/molecules/m-bookingHistoryTable';
import { useLocation } from 'react-router-dom';

const AdminClientDetail = () => {
  const location = useLocation();
  const { name, email, phone, status } = location.state || {};
  return (
    <div>
      <AdminClientDetailHeader />
      <AdminClientInformation name={name} email={email} phone={phone} status={status} />
      <AdminBookingHistoryTable />
    </div>
  );
};

export default AdminClientDetail;
