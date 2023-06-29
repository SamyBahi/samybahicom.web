import NavItem from "./NavItem";

interface NavItemsProps {
  items: { id: number; title: string; path: string }[];
}

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <ul className="hidden md:flex items-center gap-1">
      {items.map((item: { id: number; title: string; path: string }) => (
        <NavItem key={item.id} path={item.path}>
          {item.title}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavItems;
