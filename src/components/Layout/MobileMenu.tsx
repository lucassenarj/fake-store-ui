import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MenuItem } from "./../../types/MenuItem";
import menuItems from "./../../utils/menu";

function MobileMenu() {
  return (
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {menuItems.map((item: MenuItem) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.path}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};


export default MobileMenu;

