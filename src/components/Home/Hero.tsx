import axios from "axios";
import StyledLink from "../ui/StyledLink";
import { GitHubLogo, LinkIcon, LinkedinLogo } from "../svgs";

type HomeHero = {
  data: {
    id: number;
    attributes: {
      title: string;
      speech: string;
    };
  };
};

const getHero = async () => {
  try {
    const data = await axios.get("/home-hero");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const Hero = async () => {
  const heroData: HomeHero = await getHero();

  return (
    <section aria-label="Hero" className="max-w-[1200px] w-full">
      <h1 className="text-3xl font-bold">{heroData.data.attributes.title}</h1>
      <div className="flex mt-6 gap-7 items-center">
        <div className="h-52 w-52 bg-secondary rounded-lg"></div>
        <div>
          <p className="text-sm w-[440px]">{heroData.data.attributes.speech}</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-6">
        <div className="w-1/6">
          <StyledLink url="mailto:samy.bahi.perso@gmail.com">
            Contact me
            <LinkIcon className=" text-xs fill-secondary" />
          </StyledLink>
        </div>
        <div className="w-1/6">
          <StyledLink url="mailto:samy.bahi.perso@gmail.com">
            <div className="flex gap-2">
              <GitHubLogo className="text-2xl fill-secondary" />
              GitHub
            </div>
            <LinkIcon className=" text-xs fill-secondary" />
          </StyledLink>
        </div>
        <div className="w-1/6">
          <StyledLink url="mailto:samy.bahi.perso@gmail.com">
            <div className="flex gap-2">
              <LinkedinLogo className="text-2xl fill-secondary" />
              LinkedIn
            </div>
            <LinkIcon className=" text-xs fill-secondary" />
          </StyledLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
