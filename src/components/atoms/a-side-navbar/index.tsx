import { NavLink } from 'react-router-dom';
import { SideBarNavItemProps } from 'interfaces/sidebar-navitems.types';

function SideBarNavItems({ id, name, path, Icon }: SideBarNavItemProps) {
  return (
    <div key={id}>
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          ` flex w-full items-center space-x-5 px-3 py-3  font-Rubik text-[16px]  leading-normal tracking-normal
       ${
         isActive
           ? 'rounded-[8px] border border-primaryText font-bold text-primaryText'
           : 'font-semibold text-black hover:brightness-75'
       }
        `
        }
      >
        <Icon /> <p>{name}</p>
      </NavLink>
    </div>
  );
}
export default SideBarNavItems;
