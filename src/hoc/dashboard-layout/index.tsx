import { Outlet } from 'react-router-dom';
import SideBar from 'components/molecules/m-sidebar';
import DashboardSideNavItems from 'components/organisms/o-dashboard-side-nav-items';
import TopNavigation from 'components/molecules/m-top-navigation';
import WithDashboard from 'lib/dashboard-wrapper';

const DashboardLayout = () => {
  return (
    <div>
      <div className="hidden md:block">
        <SideBar NavItems={DashboardSideNavItems} />
      </div>

      <div
        className={`absolute left-0 top-0 min-h-screen w-full  md:left-[250px] md:w-[calc(100%-250px)] `}
      >
        <TopNavigation navItem={DashboardSideNavItems} />
        <section className="min-h-[80vh] bg-[#f6f7f9] p-5 transition-all duration-500 ease-in-out ">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default WithDashboard(DashboardLayout);
