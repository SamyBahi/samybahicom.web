import { Project } from "@/app/work/page";
import PersonalProjectsItem from "./PersonalProjectsItem";

type PersonalProjectsListProps = {
  projectsData: Project[];
};

const PersonalProjectsList = ({ projectsData }: PersonalProjectsListProps) => {
  return (
    <ul className="space-y-6">
      {projectsData.map((project) => (
        <PersonalProjectsItem projectData={project} key={project.id} />
      ))}
    </ul>
  );
};

export default PersonalProjectsList;
