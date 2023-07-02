"use client";

import ExperienceItem from "./ExperienceItem";
import { Experience } from "./Experience";
import { useState } from "react";

type ExperienceListProps = {
  experienceData: Experience[];
};

const ExperienceList = ({ experienceData }: ExperienceListProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonHover = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <ul
      className="w-full md:w-1/2 flex-col space-y-5"
      onMouseLeave={handleMouseLeave}
    >
      {experienceData.map((experience: Experience) => (
        <ExperienceItem
          experience={experience}
          key={experience.id}
          isActive={activeButton === experience.id || activeButton === null}
          onMouseEnter={() => handleButtonHover(experience.id)}
        />
      ))}
    </ul>
  );
};

export default ExperienceList;
