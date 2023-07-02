import axios from "axios";
import AboutSection from "../AboutSection";
import EducationItem from "./EducationItem";

export type Education = {
  id: number;
  attributes: {
    degree: string;
    speciality: string;
    university: string;
  };
};

const Education = async () => {
  const educationData: Education[] = await getEducationData();

  const educationList = educationData.map((educationItem: Education) => (
    <EducationItem key={educationItem.id} education={educationItem} />
  ));

  return (
    <AboutSection
      title="Education"
      style={{ "--index": 1.5 } as React.CSSProperties}
    >
      <ul className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row md:w-1/2 justify-between">
        {educationList}
      </ul>
    </AboutSection>
  );
};

const getEducationData = async () => {
  try {
    const res = await axios.get("/educations");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default Education;
