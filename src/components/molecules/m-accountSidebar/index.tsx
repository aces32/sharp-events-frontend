import { Link } from 'react-router-dom';

interface SideBar {
  Image: JSX.Element;
  title: string;
  description: string;
  id: number;
}
interface SidebarProps {
  items: SideBar[];
  homeLink: string;
  authLink: string;
  authText: string;
}

const AccountSidebar = ({ items, homeLink, authLink, authText }: SidebarProps) => {
  return (
    <div className="sticky hidden h-full w-full bg-white px-10 pt-10 md:block md:px-3">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex items-center justify-start gap-3 pb-5">
            {item.Image}
            <div>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-sm font-medium">{item.description}</p>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-20 left-0 w-full px-3">
        <div className=" w-full overflow-hidden ">
          <div className=" flex w-full justify-between text-sm font-bold">
            <Link to={homeLink}>Back to home</Link>
            <Link to={authLink} className="text-primaryText">
              {authText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
