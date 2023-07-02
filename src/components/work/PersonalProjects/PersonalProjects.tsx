import axios from "axios";
import PersonalProjectsList from "./PersonalProjectsList";
import { Project } from "@/app/work/page";

const PersonalProjects = async () => {
  const projectsData: Project[] = await getProjectsData();

  return (
    <section aria-label="Personal projects" className="max-w-[1200px] w-full">
      <h1 className="text-xl md:text-3xl font-bold animate-in">
        Personal projects
      </h1>
      <PersonalProjectsList projectsData={projectsData} />
    </section>
  );
};

const getProjectsData = async () => {
  try {
    const res = await axios.get(
      "/works?populate[githubLink][fields][0]=url&populate[tags][fields][0]=title&filters[type]=personal&fields[0]=title&fields[1]=description"
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default PersonalProjects;