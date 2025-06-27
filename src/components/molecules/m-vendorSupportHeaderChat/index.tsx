import DashboardHeader from '../m-dashboardHeader';

const VendorSupportHeaderChat = ({ id }: { id: string }) => {
  return (
    <DashboardHeader
      header={`Support Request ${id}`}
      title="Urgent Request Regarding Booking Issues"
    />
  );
};

export default VendorSupportHeaderChat;
