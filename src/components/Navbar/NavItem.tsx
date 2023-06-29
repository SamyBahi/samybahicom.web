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
  //hover:opacity-100 transition-opacity text-secondaryl opacity-75

  return (
    <li>
      <Link
        href={path}
        className={`block px-4 py-2 rounded-md text-sm hover:cursor-pointer${
          isCurrentPage
            ? "text-secondaryl bg-secondaryl bg-opacity-10"
            : "hover:opacity-100 transition-opacity text-secondaryl opacity-75"
        } `}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
