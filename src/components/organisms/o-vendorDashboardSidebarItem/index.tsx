// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Dashboard from 'assets/Icon/Dashboard';

import Wallet from 'assets/Icon/Wallet';
// import TicketIcon from 'assets/Icon/ticket';
import EventManagementIcon from 'assets/Icon/event-management';
import ServiceProvider from 'assets/Icon/service-provider';
// import InvitationIcon from 'assets/Icon/invitation';
import CalendarIcon from 'assets/Icon/calendar';
// import AnalyticsIcon from 'assets/Icon/analytics';

import AccountIcon from 'assets/Icon/AccountIcon';

import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';

const VendorDashboardSideNavItems: ParentSideNavItemProps[] = [
  {
    id: uuidv4(),
    name: 'Dashboard',
    path: '/dashboard/vendor',
    Icon: Dashboard,
  },
  {
    id: uuidv4(),
    name: 'Services & Pricing',
    path: '/dashboard/vendor/services',
    Icon: Dashboard,
  },
  {
    id: uuidv4(),
    name: 'Quotations',
    path: '/dashboard/vendor/quotations',
    Icon: Dashboard,
  },
  {
    id: uuidv4(),
    name: 'Bookings',
    path: '/dashboard/vendor/booking',
    Icon: CalendarIcon,
  },
  {
    id: uuidv4(),
    name: 'Payments',
    path: '/dashboard/vendor/payment',
    Icon: Wallet,
  },
  {
    id: uuidv4(),
    name: 'Events Calendar',
    path: '/dashboard/vendor/calender',
    Icon: CalendarIcon,
  },
  {
    id: uuidv4(),
    name: 'Financials',
    path: '/dashboard/vendor/financials',
    Icon: EventManagementIcon,
  },
  {
    id: uuidv4(),
    name: 'Ratings & Reviews',
    path: '/dashboard/vendor/reviews',
    Icon: EventManagementIcon,
  },
  {
    id: uuidv4(),
    name: 'Messaging',
    path: '/dashboard/vendor/message',
    Icon: ServiceProvider,
  },
  {
    id: uuidv4(),
    name: 'Profile Settings',
    path: '/dashboard/vendor/profile',
    Icon: AccountIcon,
  },
  {
    id: uuidv4(),
    name: 'Notification and support',
    path: '/dashboard/vendor/notification',
    Icon: CalendarIcon,
  },

  //   {
  //     id: uuidv4(),
  //     name: 'Client Management',
  //     path: '/dashboard/admin/client',
  //     Icon: InvitationIcon,
  //   },

  // {
  //   id: uuidv4(),
  //   name: 'Analytics',
  //   path: '/dashboard/analytics',
  //   Icon: AnalyticsIcon,
  // },
  // {
];

export default VendorDashboardSideNavItems;
