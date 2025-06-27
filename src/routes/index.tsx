import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardRoutes from 'routes/dashboard-routes';
import Login from 'pages/login';
import Register from 'pages/register';
import ForgetPassword from 'pages/forget-password';
import Reset from 'pages/reset-password';
import LandingPage from 'pages';
import EventDetails from 'pages/event-details';
import SearchEvent from 'pages/searchEvent';
import AdminSignUp from 'pages/adminSignUp';
import UserSignUp from 'pages/userSignUp';
import VendorSignUp from 'pages/vendorSignUp';
import VendorStaffRegister from 'pages/vendorStaffRegister';
import EventStaffRegister from 'pages/eventStaffRegister';
import ServicePage from 'pages/servicePage';
import OwnerDashboardRoutes from './ownerDashboard';
import VendorDashboardRoutes from './vendorRoutes';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/admin" element={<AdminSignUp />} />
        <Route path="/register/user" element={<UserSignUp />} />
        <Route path="/register/vendor" element={<VendorSignUp />} />
        <Route path="event-details/:id" element={<EventDetails />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/dashboard/user/*" element={<DashboardRoutes />} />
        <Route path="/dashboard/Admin/*" element={<OwnerDashboardRoutes />} />
        <Route path="/dashboard/vendor/*" element={<VendorDashboardRoutes />} />
        <Route path="/search" element={<SearchEvent />} />
        <Route path="/vendor-staff-register" element={<VendorStaffRegister />} />
        <Route path="/event-staff-register" element={<EventStaffRegister />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
