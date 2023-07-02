import { Project } from "@/app/work/page";
import { GitHubLogo, LinkIcon } from "../../svgs";
import TagsList from "@/components/ui/TagsList";

type PersonalProjectsItemProps = {
  projectData: Project;
};

const PersonalProjectsItem = ({ projectData }: PersonalProjectsItemProps) => {
  return (
    <li>
      <a
        href="#"
        className="flex flex-col space-y-6 lg:flex-row p-3 lg:space-x-6 lg:space-y-0"
      >
        <div className="w-full lg:w-1/3 aspect-video bg-secondary rounded shrink-0"></div>
        <div>
          <div className="display flex justify-between">
            <h2 className="text-2xl font-bold">
              {projectData.attributes.title}
            </h2>
            <LinkIcon className="opacity-50" />
          </div>
          <p className="opacity-50">{projectData.attributes.description}</p>
        </div>
      </a>
      <div className="border-t border-secondary border-opacity-20 flex justify-between items-center py-1 px-5 text-[#fcfcfc]">
        <TagsList tags={projectData.attributes.tags.data} />
        <div>
          <a
            href={projectData.attributes.githubLink.data.attributes.url}
            target="_blank"
            className="text-xl"
            aria-label="github link"
          >
            <GitHubLogo />
          </a>
        </div>
      </div>
    </li>
  );
};

export default PersonalProjectsItem;
