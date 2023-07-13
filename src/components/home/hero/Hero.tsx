import axios from "axios";
import ConnectList from "@/components/ui/ConnectList";
import Image from "next/image";
import { strapiImage } from "@/app/layout";

type HomeHero = {
  id: number;
  attributes: {
    title: string;
    speech: string;
    image: strapiImage;
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
        <div className="h-52 w-52 rounded-lg shrink-0 relative overflow-hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              heroData.attributes.image.data.attributes.url
            }
            alt="profile picture"
            fill
            sizes="101%"
            priority
          />
        </div>
        <div>
          <p className="text-justify md:text-start max-w-[440px]">
            {heroData.attributes.speech}
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <ConnectList />
      </div>
    </section>
  );
};

const getHero = async () => {
  try {
    const res = await axios.get("/home-hero?populate=image");

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Error " + error.response?.status);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};

export default Hero;
