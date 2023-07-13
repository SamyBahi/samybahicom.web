import axios from "axios";
import { EmailIcon, GitHubLogo, LinkIcon, LinkedinLogo } from "../svgs";
import StyledLink from "./StyledLink";

type link = {
  id: number;
  attributes: {
    title: string;
    url: string;
  };
};

const ConnectList = async () => {
  const links: link[] = await getLinks();

  const githubLink =
    links[links.map((link: link) => link.attributes.title).indexOf("github")]
      .attributes.url;

  const linkedinLink =
    links[links.map((link: link) => link.attributes.title).indexOf("linkedin")]
      .attributes.url;

  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 lg:justify-start">
      <div
        className="w-48 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <StyledLink url="mailto:samy.bahi.perso@gmail.com">
          <div className="flex gap-2 items-center">
            <EmailIcon className="text-2xl fill-secondary" />
            Contact me
          </div>
        </StyledLink>
      </div>
      <div
        className="w-48 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <StyledLink url={githubLink || "#"}>
          <div className="flex gap-2 items-center">
            <GitHubLogo className="text-2xl fill-secondary" />
            GitHub
          </div>
        </StyledLink>
      </div>
      <div
        className="w-48 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <StyledLink url={linkedinLink || "#"}>
          <div className="flex gap-2 items-center">
            <LinkedinLogo className="text-2xl fill-secondary" />
            LinkedIn
          </div>
        </StyledLink>
      </div>
    </div>
  );
};

const getLinks = async () => {
  try {
    const res = await axios.get(
      "/links?filters[title]=linkedin&filters[title]=github&fields[0]=title&fields[1]=url"
    );

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Error " + error.response?.status);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};

export default ConnectList;
