import { NavLink } from "react-router-dom";
import { MenuItem } from "./../../types/MenuItem";
import menuItems from "./../../utils/menu";

type NavBarProps = {
  page: string;
}

const classNavLink = " rounded-md px-3 py-2 text-sm font-medium";

function Navbar({ page }: NavBarProps) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <img
          alt="Fake Shop UI"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-8"
        />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {menuItems.map((item: MenuItem) => (
            <NavLink
              key={item.name}
              to={`/${item.path}`}
              className={({ isActive }) => isActive ? `bg-gray-900 text-white ${classNavLink}` : `text-gray-300 hover:bg-gray-700 hover:text-white ${classNavLink}` }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

