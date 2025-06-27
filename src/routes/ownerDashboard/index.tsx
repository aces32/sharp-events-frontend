import AdminDashboardLayout from 'hoc/adminDashboardLayout';

import EventDashboard from 'pages/dashboard/eventAdminDashboard';
import AdminEventManagement from 'pages/dashboard/eventAdminDashboard/adminEventManagement';
import AdminBookingManagement from 'pages/dashboard/eventAdminDashboard/adminBookingManagement';
import CreateEventCenters from 'pages/dashboard/eventAdminDashboard/create-event-center';
import { Route, Routes } from 'react-router-dom';
import AdminRevenueAndFinace from 'pages/dashboard/eventAdminDashboard/adminRevenue';
import AdminEventAnalytics from 'pages/dashboard/eventAdminDashboard/adminEventAnalytics';
import AdminClientManagement from 'pages/dashboard/eventAdminDashboard/adminClientManagement';
import AdminClientDetail from 'pages/dashboard/eventAdminDashboard/adminClientDetail';
import AdminNotification from 'pages/dashboard/eventAdminDashboard/adminNotification';
import AdminSupport from 'pages/dashboard/eventAdminDashboard/adminSupport';
import EventCenters from 'pages/dashboard/UserDashboard/event-centers';
import ViewEvent from 'pages/dashboard/eventAdminDashboard/view-event';
import EditEvent from 'pages/dashboard/eventAdminDashboard/editEvent';
import AdminTourRequestTable from 'components/molecules/m-adminTourRequestsTable';

const OwnerDashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminDashboardLayout />}>
        <Route index element={<EventDashboard />} />
        <Route path="settings" element={<CreateEventCenters />} />
        <Route path="view-event/:id" element={<ViewEvent />} />
        <Route path="edit-event/:id" element={<EditEvent />} />
        <Route path="event-centers" element={<EventCenters />} />
        <Route path="event" element={<AdminEventManagement />} />
        <Route path="booking" element={<AdminBookingManagement />} />
        <Route path="finance" element={<AdminRevenueAndFinace />} />
        <Route path="analytics" element={<AdminEventAnalytics />} />
        <Route path="client" element={<AdminClientManagement />} />
        <Route path="/client/:id" element={<AdminClientDetail />} />
        <Route path="notification" element={<AdminNotification />} />
        <Route path="/support/:id" element={<AdminSupport />} />
        <Route path="tour/:id" element={<AdminTourRequestTable />} />
      </Route>
    </Routes>
  );
};

export default OwnerDashboardRoutes;
