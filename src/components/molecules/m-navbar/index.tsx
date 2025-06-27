import { NavLink, useNavigate } from 'react-router-dom';

import Menu from 'assets/Icon/menu';
import MyPopover from 'hoc/pop-over-wrapper';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={` flex justify-between space-x-2 px-7 py-4 font-Inter `}>
      <div className="lg:w-1/5">
        <NavLink
          to="/"
          className="text-[1.5rem] font-extrabold leading-[1.816rem] text-primaryText hover:brightness-75 xl:text-[2rem] "
        >
          SHARP EVENT
        </NavLink>
      </div>

      <div className="  hidden  w-4/5 justify-end space-x-5 lg:flex">
        <button
          type="button"
          className="px-20  text-[1rem] font-bold leading-[1.21rem] text-black outline-none hover:text-primary"
        >
          List Your Space
        </button>
        <button
          type="button"
          className=" rounded-xl  border-[0.125rem] border-primaryText  bg-transparent  px-[2.688em] py-[0.813rem] text-center text-[0.813rem] font-semibold leading-[0.983rem] text-primaryText drop-shadow-lg hover:brightness-150 "
          onClick={() => navigate('/login')}
        >
          Log In{' '}
        </button>
        <button
          type="button"
          onClick={() => navigate('/register')}
          className=" rounded-xl  bg-primaryText   px-[2.688em] py-[0.813rem] text-center text-[0.813rem] font-semibold leading-[0.983rem] text-white drop-shadow-lg hover:brightness-150 "
        >
          Sign Up
        </button>
      </div>
      <MyPopover panelClassName="block lg:hidden w-[20rem] -left-[19rem]">
        <div className="block lg:hidden">
          <Menu /> {}
        </div>
        <div className="space-y-4 p-2">
          <div>
            <button type="button" className="px-3 py-0.5 text-[1rem] font-[800] text-black">
              List Your Space
            </button>
          </div>
          <div>
            <button
              type="button"
              className="  bg-white px-3 py-0.5 text-[1rem] font-[800] text-black"
              onClick={() => navigate('/login')}
            >
              Login In{' '}
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="  px-3 py-0.5 text-[1rem] font-[800] "
            >
              Sign Up
            </button>
          </div>
        </div>
      </MyPopover>
    </div>
  );
};

export default Navbar;
