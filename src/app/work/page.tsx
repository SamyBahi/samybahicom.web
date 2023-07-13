import MainContainer from "@/components/ui/MainContainer";
import PersonalProjects from "@/components/work/PersonalProjects/PersonalProjects";
import { strapiImage } from "../layout";

export type Project = {
  id: number;
  attributes: {
    title: string;
    description: string;
    type: string;
    githubLink: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    tags: {
      data: [
        {
          id: number;
          attributes: {
            title: string;
          };
        }
      ];
    };
    thumbnail: strapiImage;
  };
};

export default function Work() {
  return (
    <MainContainer>
      <PersonalProjects />
    </MainContainer>
  );
}
