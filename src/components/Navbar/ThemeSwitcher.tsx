import { Transition, Listbox } from "@headlessui/react";
import NavItem from "./NavItem";
import { CheckIcon, MoonIcon, SunIcon } from "../svgs";
import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface NavItemsMobileProps {
  items?: { title: string; path: string }[];
}

const options = [
  { id: 1, value: "system", name: "Automatic" },
  { id: 2, value: "light", name: "Light" },
  { id: 3, value: "dark", name: "Dark" },
];

const ThemeSwitcher = ({ items }: NavItemsMobileProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      localStorage.setItem("theme", "system");
      return;
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <Listbox value={theme} onChange={setTheme}>
        <Listbox.Button
          className="px-4 py-2 rounded-md hover:cursor-pointer opacity-75"
          aria-label="theme switcher button"
        >
          {theme === "dark" && (
            <MoonIcon className="text-lg fill-secondary opacity-75 hover:cursor-pointer" />
          )}
          {theme === "light" && (
            <SunIcon className="text-xl stroke-secondary opacity-75 hover:cursor-pointer" />
          )}
          {theme === "system" && systemTheme === "dark" && (
            <MoonIcon className="text-lg fill-secondary opacity-75 hover:cursor-pointer" />
          )}
          {theme === "system" && systemTheme === "light" && (
            <SunIcon className="text-xl stroke-secondary opacity-75 hover:cursor-pointer" />
          )}
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-10 rounded-md bg-popover shadow-lg p-2 w-36">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option.value}
                as={Fragment}
              >
                {({ selected }: { selected: boolean }) => (
                  <li
                    className={`px-4 py-2 rounded-md hover:cursor-pointer
                     hover:bg-secondary hover:bg-opacity-10
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
