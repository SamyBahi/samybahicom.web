import axios from "axios";
import ConnectList from "./ConnectList";

type HomeHero = {
  id: number;
  attributes: {
    title: string;
    speech: string;
  };
};

const Hero = async () => {
  const heroData: HomeHero = await getHero();

  return (
    <section aria-label="Hero" className="max-w-[1200px] w-full">
      <h1 className="text-center text-xl lg:text-start lg:text-3xl font-bold animate-in">
        {heroData.attributes.title}
      </h1>
      <div className="flex flex-col lg:flex-row my-6 gap-7 items-center animate-in">
        <div className="h-52 w-52 bg-secondary rounded-lg"></div>
        <div>
          <p className="text-justify md:text-start max-w-[440px]">
            {heroData.attributes.speech}
          </p>
        </div>
      </div>
      <ConnectList />
    </section>
  );
};

const getHero = async () => {
  try {
    const res = await axios.get("/home-hero");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default Hero;
