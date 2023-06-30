"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavItemProps extends PropsWithChildren {
  path: string;
}

const NavItem = ({ path, children }: NavItemProps) => {
  const pathname: string = usePathname();

  const isCurrentPage = pathname === path;
  //hover:opacity-100 transition-opacity text-secondary opacity-75

  return (
    <li>
      <Link
        href={path}
        className={`block px-4 py-2 rounded-md text-sm hover:cursor-pointer text-secondary ${
          isCurrentPage
            ? "bg-secondary bg-opacity-10"
            : "opacity-75 hover:opacity-100 transition-opacity"
        } `}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
