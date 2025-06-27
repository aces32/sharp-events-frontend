import DashboardHeader from '../m-dashboardHeader';

const AdminSupportHeader = ({ id }: { id: string }) => {
  return (
    <DashboardHeader
      header={`Support Request ${id}`}
      title="Urgent Request Regarding Booking Issues"
    />
  );
};

export default AdminSupportHeader;
