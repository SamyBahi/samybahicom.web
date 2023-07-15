import axios from "axios";
import PersonalProjectsList from "./PersonalProjectsList";
import { Project } from "@/app/work/page";
import Empty from "@/components/ui/Empty";

const PersonalProjects = async () => {
  const projectsData: Project[] = await getProjectsData();

  return (
    <section aria-label="Personal projects" className="max-w-[1200px] w-full">
      <h1 className="text-xl md:text-3xl font-bold animate-in">
        Personal projects
      </h1>
      <div
        className="mt-10 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {projectsData.length !== 0 && (
          <PersonalProjectsList projectsData={projectsData} />
        )}
        {projectsData.length === 0 && <Empty />}
      </div>
    </section>
  );
};

const getProjectsData = async () => {
  try {
    const res = await axios.get(
      "/works?populate[githubLink][fields][0]=url&populate[tags][fields][0]=title&populate=thumbnail&populate[appLink][fields][0]=url&filters[type]=personal&fields[0]=title&fields[1]=description"
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

export default PersonalProjects;
