import Link from "next/link";

type buttonProps = {
  children: React.ReactNode;
  url: string;
};

const StyledLink = (props: buttonProps) => {
  const { children, url } = props;
  return (
    <Link
      href={url}
      className="border border-secondary border-opacity-20 bg-secondary bg-opacity-10 rounded flex items-center justify-between px-3 py-4 w-full hover:underline"
    >
      {children}
    </Link>
  );
};

export default StyledLink;
