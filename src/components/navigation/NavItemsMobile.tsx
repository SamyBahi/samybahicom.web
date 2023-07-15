import { Popover, Transition } from "@headlessui/react";
import NavItem from "./NavItem";

interface NavItemsMobileProps {
  items: { id: number; title: string; path: string }[];
}

const NavItemsMobile = ({ items }: NavItemsMobileProps) => {
  return (
    <Popover className="relative">
      <Popover.Button className="md:hidden px-4 py-2 rounded-md hover:cursor-pointer opacity-75 focus:outline-none">
        Menu <span className="text-xl">+</span>
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 z-10 rounded-md bg-popover shadow-lg md:hidden p-2 w-36">
          <ul className="flex flex-col gap-2 ">
            {items.map((item: { id: number; title: string; path: string }) => (
              <NavItem key={item.id} path={item.path}>
                {item.title}
              </NavItem>
            ))}
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavItemsMobile;
