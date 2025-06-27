import VendorSupportChat from 'components/molecules/m-vendorSupportChat';
import VendorDashboardLayout from 'hoc/vendorDashboardLayout';
import CreateBooking from 'pages/dashboard/vendorDashboard/createBooking';
import CreateBundle from 'pages/dashboard/vendorDashboard/createBundle';
import CreateService from 'pages/dashboard/vendorDashboard/createService';
import VendorDashboard from 'pages/dashboard/vendorDashboard/dashboard';
import Financials from 'pages/dashboard/vendorDashboard/financial';
import QuotationDesign from 'pages/dashboard/vendorDashboard/QuotationDesign';
import VendorBooking from 'pages/dashboard/vendorDashboard/vendorBookings';
import VendorEventsCalender from 'pages/dashboard/vendorDashboard/vendorEventsCalender';
import VendorNotication from 'pages/dashboard/vendorDashboard/vendorNotification';
import VendorPayment from 'pages/dashboard/vendorDashboard/vendorPayment';
import VendorProfile from 'pages/dashboard/vendorDashboard/vendorProfile';
import VendorQuotation from 'pages/dashboard/vendorDashboard/vendorQuotation';
import VendorServices from 'pages/dashboard/vendorDashboard/vendorServices';
import { Route, Routes } from 'react-router-dom';
import VendorReview from 'pages/dashboard/vendorDashboard/VendorReview';
import VendorMessage from 'pages/dashboard/vendorDashboard/vendorSupport';
import Statement from 'pages/dashboard/vendorDashboard/statement';
import VendorCustomer from 'pages/dashboard/vendorDashboard/vendorCustomer';
import EditServiceOffered from 'pages/dashboard/vendorDashboard/editServiceOffered';

const VendorDashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<VendorDashboardLayout />}>
        <Route index element={<VendorDashboard />} />
        <Route path="booking" element={<VendorBooking />} />
        <Route path="payment" element={<VendorPayment />} />
        <Route path="calender" element={<VendorEventsCalender />} />
        <Route path="reviews" element={<VendorReview />} />
        <Route path="profile" element={<VendorProfile />} />
        <Route path="notification" element={<VendorNotication />} />
        <Route path="message" element={<VendorMessage />} />
        <Route path="/support/:id" element={<VendorSupportChat />} />
        <Route path="services" element={<VendorServices />} />
        <Route path="createService" element={<CreateService />} />
        <Route path="createBundle" element={<CreateBundle />} />
        <Route path="/createBooking/:id" element={<CreateBooking />} />
        <Route path="quotations" element={<VendorQuotation />} />\
        <Route path="quotationDesign" element={<QuotationDesign />} />
        <Route path="financials" element={<Financials />} />
        <Route path="/statement/:id" element={<Statement />} />
        <Route path="customer" element={<VendorCustomer />} />
        <Route path="/editService/:id" element={<EditServiceOffered />} />
      </Route>
    </Routes>
  );
};

export default VendorDashboardRoutes;
