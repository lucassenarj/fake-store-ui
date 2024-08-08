import { DisclosureButton } from "@headlessui/react";
import { TfiClose, TfiMenu } from "react-icons/tfi";


function MobileNavitation() {
  return (
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      <TfiMenu aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
      <TfiClose aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
    </DisclosureButton>
  );
};


export default MobileNavitation;

