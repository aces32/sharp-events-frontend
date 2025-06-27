import MenuIcon from 'assets/Icon/menu';
import MyPopover from 'hoc/pop-over-wrapper';
import SideBar from 'components/molecules/m-sidebar';
import Bell from 'assets/Icon/Bell';
import Image from 'assets/images/profile.png';
import ArrowDown from 'assets/Icon/arrow-down';
import { useAppSelector } from 'store';
import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';

type TopNavigationProps = {
  navItem: ParentSideNavItemProps[];
};
function TopNavigation({ navItem }: TopNavigationProps) {
  const { userFirstName, userLastName } = useAppSelector((state) => state.user);

  return (
    <header className="flex h-[59px] flex-row items-center border-b-[0.5px] border-b-[#0000001A] bg-white p-4 transition-all duration-500 ease-in-out md:justify-end">
      <div className="md:hidden">
        <MyPopover panelClassName="  h-screen -top-6 -left-3 ">
          <div role="navigation" className=" dark:text-white" aria-label="open side bar">
            <MenuIcon /> {}
          </div>
          <SideBar NavItems={navItem} />
        </MyPopover>
      </div>

      <div className="hidden items-center justify-end space-x-7 pr-5 md:flex">
        <Bell />
        <div className="flex items-center space-x-3">
          <img src={Image} alt="profile" className="size-[40px] rounded-full" />
          <p className="font-Rubik  text-[16px] leading-normal tracking-normal">
            {userFirstName} {userLastName}
          </p>
          <ArrowDown />
        </div>
      </div>
    </header>
  );
}

export default TopNavigation;
