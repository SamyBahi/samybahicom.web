import Link from "next/link";
import { LinkIcon } from "../svgs";

type buttonProps = {
  children: React.ReactNode;
  url: string;
};

const StyledLink = (props: buttonProps) => {
  const { children, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="border border-secondary border-opacity-20 rounded-md flex items-center justify-between px-3 py-4 w-full hover:underline"
    >
      {children}
      <LinkIcon className="text-xs fill-secondary opacity-50" />
    </a>
  );
};

export default StyledLink;
