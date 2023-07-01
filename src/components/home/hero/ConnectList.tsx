import { EmailIcon, GitHubLogo, LinkIcon, LinkedinLogo } from "../../svgs";
import StyledLink from "../../ui/StyledLink";

const ConnectList = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 md:space-y-0 md:flex-row md:space-x-6 lg:justify-start">
      <div
        className="w-48 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <StyledLink url="mailto:samy.bahi.perso@gmail.com">
          <div className="flex gap-2 items-center">
            <EmailIcon className="text-2xl fill-secondary" />
            Contact me
          </div>
          <LinkIcon className="text-xs fill-secondary" />
        </StyledLink>
      </div>
      <div
        className="w-48 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <StyledLink url="#">
          <div className="flex gap-2 items-center">
            <GitHubLogo className="text-2xl fill-secondary" />
            GitHub
          </div>
          <LinkIcon className="text-xs fill-secondary" />
        </StyledLink>
      </div>
      <div
        className="w-48 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <StyledLink url="#">
          <div className="flex gap-2 items-center">
            <LinkedinLogo className="text-2xl fill-secondary" />
            LinkedIn
          </div>
          <LinkIcon className="text-xs fill-secondary" />
        </StyledLink>
      </div>
    </div>
  );
};

export default ConnectList;
