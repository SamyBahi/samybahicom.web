import Link from "next/link";

type buttonProps = {
  children: React.ReactNode;
  url: string;
};

const StyledLink = (props: buttonProps) => {
  const { children, url } = props;
  return (
    <a
      href={url}
      className="border border-secondary border-opacity-20 rounded-md flex items-center justify-between px-3 py-4 w-full hover:underline"
    >
      {children}
    </a>
  );
};

export default StyledLink;
