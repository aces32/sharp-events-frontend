import DashboardHeader from '../m-dashboardHeader';

const VendorEventCalenderHeader = () => {
  return (
    <DashboardHeader
      header="Calendar"
      title="get a quick snapshot of your recent activity, track key metrics, quotations, bookings, and client feedback."
      rightSection={
        <select className="rounded-lg border border-[#00000066] px-4 py-3">
          <option value="month">Filter by Month</option>
          <option value="year">Filter by Year</option>
        </select>
      }
    />
  );
};

export default VendorEventCalenderHeader;
