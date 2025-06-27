import { Route, Routes } from 'react-router-dom';
import DashboardLayout from 'hoc/dashboard-layout';
import Dashboard from 'pages/dashboard/UserDashboard/dashboard/index';
// import EventCenters from 'pages/dashboard/UserDashboard/event-centers';
import ProfilePage from 'pages/dashboard/profile-page';
// import ViewEvent from 'pages/dashboard/view-event';
// import CreateEventCenters from 'pages/dashboard/eventAdminDashboard/create-event-center';
import TicketSales from 'pages/dashboard/UserDashboard/ticketSales';
import AddTicket from 'pages/dashboard/UserDashboard/addTicket';
import TicketDetail from 'pages/dashboard/UserDashboard/ticketDetail';
import CreateInvite from 'pages/dashboard/UserDashboard/createInvite';
import EventManagement from 'pages/dashboard/UserDashboard/eventManagement';
import Wallet from 'pages/dashboard/UserDashboard/wallet';
import ServiceProvider from 'pages/dashboard/UserDashboard/serviceProvider';

function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="event-centers" element={<EventCenters />} /> */}
        {/* <Route path="event-centers/create-event-center" element={<CreateEventCenters />} /> */}
        <Route path="profile-page" element={<ProfilePage />} />
        {/* <Route path="view-event/:id" element={<ViewEvent />} /> */}
        <Route path="ticket-sales" element={<TicketSales />} />
        <Route path="addTicket" element={<AddTicket />} />
        <Route path="createInvite" element={<CreateInvite />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
        <Route path="event-management" element={<EventManagement />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="service-provider" element={<ServiceProvider />} />
        <Route path="*" element={<div>coming soon</div>} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
