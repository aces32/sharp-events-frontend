// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Dashboard from 'assets/Icon/Dashboard';

import Wallet from 'assets/Icon/Wallet';
// import TicketIcon from 'assets/Icon/ticket';
import EventManagementIcon from 'assets/Icon/event-management';
import ServiceProvider from 'assets/Icon/service-provider';
import InvitationIcon from 'assets/Icon/invitation';
import CalendarIcon from 'assets/Icon/calendar';
// import AnalyticsIcon from 'assets/Icon/analytics';

// import AccountIcon from 'assets/Icon/AccountIcon';

import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';

const AdminDashboardSideNavItems: ParentSideNavItemProps[] = [
  {
    id: uuidv4(),
    name: 'Dashboard Overview',
    path: '/dashboard/admin',
    Icon: Dashboard,
  },
  {
    id: uuidv4(),
    name: 'Event Management',
    path: '/dashboard/admin/event',
    Icon: EventManagementIcon,
  },
  {
    id: uuidv4(),
    name: 'Booking Management',
    path: '/dashboard/admin/booking',
    Icon: CalendarIcon,
  },
  {
    id: uuidv4(),
    name: 'Revenue and Finance',
    path: '/dashboard/admin/finance',
    Icon: Wallet,
  },
  {
    id: uuidv4(),
    name: 'Event Analytics',
    path: '/dashboard/admin/analytics',
    Icon: EventManagementIcon,
  },
  {
    id: uuidv4(),
    name: 'Event Center Settings',
    path: '/dashboard/admin/event-centers',
    Icon: ServiceProvider,
  },

  {
    id: uuidv4(),
    name: 'Client Management',
    path: '/dashboard/admin/client',
    Icon: InvitationIcon,
  },
  {
    id: uuidv4(),
    name: 'Notification and support',
    path: '/dashboard/admin/notification',
    Icon: CalendarIcon,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Analytics',
  //   path: '/dashboard/analytics',
  //   Icon: AnalyticsIcon,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Profile',
  //   path: '/dashboard/profile-page',
  //   Icon: AccountIcon,
  // },
];

export default AdminDashboardSideNavItems;
