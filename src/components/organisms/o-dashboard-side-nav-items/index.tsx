// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Dashboard from 'assets/Icon/Dashboard';

import Wallet from 'assets/Icon/Wallet';
import TicketIcon from 'assets/Icon/ticket';
import EventManagementIcon from 'assets/Icon/event-management';
import ServiceProvider from 'assets/Icon/service-provider';
import InvitationIcon from 'assets/Icon/invitation';
import CalendarIcon from 'assets/Icon/calendar';
import AnalyticsIcon from 'assets/Icon/analytics';

import AccountIcon from 'assets/Icon/AccountIcon';

import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';

const DashboardSideNavItems: ParentSideNavItemProps[] = [
  {
    id: uuidv4(),
    name: 'Dashboard',
    path: '/dashboard/user',
    Icon: Dashboard,
  },
  {
    id: uuidv4(),
    name: 'Ticket Sales',
    path: '/dashboard/user/ticket-sales',
    Icon: TicketIcon,
  },
  {
    id: uuidv4(),
    name: 'Event Management',
    path: '/dashboard/user/event-management',
    Icon: EventManagementIcon,
  },
  {
    id: uuidv4(),
    name: 'Wallet',
    path: '/dashboard/user/wallet',
    Icon: Wallet,
  },

  {
    id: uuidv4(),
    name: 'Service Provider',
    path: '/dashboard/user/service-provider',
    Icon: ServiceProvider,
  },
  {
    id: uuidv4(),
    name: 'Invitations',
    path: '/dashboard/user/createInvite',
    Icon: InvitationIcon,
  },
  {
    id: uuidv4(),
    name: 'Book Event',
    path: '/dashboard/user/book-event',
    Icon: CalendarIcon,
  },
  {
    id: uuidv4(),
    name: 'Analytics',
    path: '/dashboard/user/analytics',
    Icon: AnalyticsIcon,
  },
  {
    id: uuidv4(),
    name: 'Profile',
    path: '/dashboard/user/profile-page',
    Icon: AccountIcon,
  },
];

export default DashboardSideNavItems;
