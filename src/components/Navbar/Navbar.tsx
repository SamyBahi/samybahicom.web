"use client";

import Link from "next/link";
import { GitHubLogo, SamyBahiLogo, SunIcon } from "../svgs";
import NavItems from "./NavItems";
import NavItemsMobile from "./NavItemsMobile";
import ThemeSwitcher from "./ThemeSwitcher";

const items: { id: number; title: string; path: string }[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Work", path: "/work" },
  { id: 4, title: "Blog", path: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="max-w-[1200px] mx-auto flex justify-between items-center p-2.5">
      <Link href={"/"}>
        <SamyBahiLogo className=" text-4xl fill-secondaryl" />
      </Link>
      <div className="flex items-center gap-5">
        <NavItems items={items} />
        <NavItemsMobile items={items} />
        <GitHubLogo />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
