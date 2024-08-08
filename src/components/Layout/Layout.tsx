import { Disclosure } from "@headlessui/react";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./Navbar";
import { Outlet, useParams } from "react-router-dom";

function Layout() {
  let { category } = useParams();
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Navbar page={category ?? ""} />
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <CartIcon />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
        <MobileMenu />
      </Disclosure>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;

