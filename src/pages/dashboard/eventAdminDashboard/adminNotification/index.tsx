import AdminNotificationTable from 'components/molecules/m-adminNotifcationTable';
import AdminNotificationHeader from 'components/molecules/m-AdminNotificationHeader';
import AdminSupportTable from 'components/molecules/m-adminSupportTable';

const AdminNotification = () => {
  return (
    <div>
      <AdminNotificationHeader />
      <AdminNotificationTable />
      <AdminSupportTable />
    </div>
  );
};

export default AdminNotification;
