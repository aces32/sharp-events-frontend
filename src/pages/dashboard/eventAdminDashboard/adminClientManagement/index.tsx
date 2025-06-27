import AdminClientManagementHeader from 'components/molecules/m-adminClientManagementHeader';
import AdminClientManagementTable from 'components/molecules/m-clientManagementTable';

const AdminClientManagement = () => {
  return (
    <div>
      <AdminClientManagementHeader />
      <AdminClientManagementTable />
    </div>
  );
};

export default AdminClientManagement;
