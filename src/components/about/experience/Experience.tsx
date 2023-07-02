import axios from "axios";
import AboutSection from "../AboutSection";
import ExperienceList from "./ExperienceList";

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
    const res = await axios.get("/experiences?populate=link");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default Experience;
