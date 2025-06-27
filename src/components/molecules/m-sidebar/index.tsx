import { ParentSideNavItemProps } from 'interfaces/sidebar-navitems.types';
import SideBarNavItems from 'components/atoms/a-side-navbar';
import Logo from 'assets/images/logo.png';
import { UserSliceAction } from 'store/reducers/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from 'utils/cookies';
import Toast from 'components/atoms/a-Toast';

interface SideBarProps {
  NavItems: ParentSideNavItemProps[];
}

const SideBar = ({ NavItems }: SideBarProps) => {
  const { clearUserData } = UserSliceAction;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(clearUserData());
    removeAuthToken();
    Toast('Logged out successfully', { type: 'success' });
    navigate('/');
  };
  return (
    <aside className="h-full w-[250px]  space-y-4 divide-y-[0.5px] divide-[#0000001A] overflow-y-auto overflow-x-hidden  bg-white     transition-all  duration-500 ease-in-out   lg:fixed lg:left-0 lg:top-0 ">
      <div className=" px-4 pt-5">
        <img src={Logo} alt="sharp event pic" className="" />
      </div>

      <nav className="px-1 pt-4" aria-label="Side Bar Navigation Menu">
        {NavItems.map((item) => (
          <SideBarNavItems
            key={item.id}
            id={item.id}
            name={item.name}
            path={item.path}
            Icon={item.Icon}
          />
        ))}
      </nav>
      <div className="px-5 py-10">
        <button
          type="button"
          onClick={handleLogOut}
          className="block w-full rounded-md bg-[#FF0000] px-4 py-2 text-center font-Rubik text-base font-semibold text-white transition hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};
export default SideBar;
