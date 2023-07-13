import axios from "axios";
import AboutSection from "../AboutSection";
import ExperienceList from "./ExperienceList";
import { strapiImage } from "@/app/layout";

export type Experience = {
  id: number;
  attributes: {
    title: string;
    company: string;
    period: string;
    link: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    image: strapiImage;
  };
};

const Experience = async () => {
  const experienceData: Experience[] = await getExperienceData();

  return (
    <AboutSection
      title="Experience"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <ExperienceList experienceData={experienceData} />
    </AboutSection>
  );
};

const getExperienceData = async () => {
  try {
    const res = await axios.get(
      "/experiences?populate[0]=link&populate[1]=image"
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

export default Experience;
