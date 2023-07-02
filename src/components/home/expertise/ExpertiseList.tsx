"use client";

import { useState } from "react";
import ExpertiseItem from "./ExpertiseItem";
import { HomeExpertise } from "./Expertise";

type ExpertiseListProps = {
  expertiseData: HomeExpertise[];
};

const ExpertiseList = ({ expertiseData }: ExpertiseListProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const expertiseItems = expertiseData.map((data: HomeExpertise) => (
    <ExpertiseItem
      key={data.id}
      title={data.attributes.title}
      description={data.attributes.description}
      isActive={activeButton === data.id || activeButton === null}
      onMouseEnter={() => handleButtonHover(data.id)}
    />
  ));

  const handleButtonHover = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <ul
      className="flex flex-wrap items-center justify-center  xl:justify-start w-full lg:gap-16 mt-8"
      onMouseLeave={handleMouseLeave}
    >
      {expertiseItems}
    </ul>
  );
};

export default ExpertiseList;
