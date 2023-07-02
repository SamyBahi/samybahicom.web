import { Project } from "@/app/work/page";
import PersonalProjectsItem from "./PersonalProjectsItem";

type PersonalProjectsListProps = {
  projectsData: Project[];
};

const PersonalProjectsList = ({ projectsData }: PersonalProjectsListProps) => {
  return (
    <ul
      className="lg:w-[900px] border rounded-md  flex flex-col border-opacity-20 border-secondary mt-10 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      {projectsData.map((project) => (
        <PersonalProjectsItem projectData={project} key={project.id} />
      ))}
    </ul>
  );
};

export default PersonalProjectsList;
