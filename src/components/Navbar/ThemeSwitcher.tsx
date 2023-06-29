import { Transition, Listbox } from "@headlessui/react";
import NavItem from "./NavItem";
import { CheckIcon, SunIcon } from "../svgs";
import { Fragment, useState } from "react";

interface NavItemsMobileProps {
  items?: { title: string; path: string }[];
}

const options = [
  { id: 1, name: "Automatic" },
  { id: 2, name: "Light" },
  { id: 3, name: "Dark" },
];

const ThemeSwitcher = ({ items }: NavItemsMobileProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className=" px-4 py-2 rounded-md text-sm hover:cursor-pointer opacity-75">
          <SunIcon className="text-xl stroke-secondaryl opacity-75 hover:cursor-pointer" />
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className=" absolute right-0 z-10 rounded-md bg-white shadow-lg p-2 w-36">
            {options.map((option) => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {({ selected }: { selected: boolean }) => (
                  <li
                    className={`px-4 py-2 rounded-md text-sm hover:cursor-pointer
                     hover:bg-secondaryl hover:bg-opacity-10
                  `}
                  >
                    <div className="flex justify-between items-center">
                      {selected && <CheckIcon className="text-xl" />}
                      <div
                        className={`flex flex-1 justify-end ${
                          selected && "font-medium"
                        }`}
                      >
                        {option.name}
                      </div>
                    </div>
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default ThemeSwitcher;
