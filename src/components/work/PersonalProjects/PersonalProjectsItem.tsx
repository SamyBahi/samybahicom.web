import { Project } from "@/app/work/page";
import { GitHubLogo, LinkIcon } from "../../svgs";
import TagsList from "@/components/ui/TagsList";
import Image from "next/image";

type PersonalProjectsItemProps = {
  projectData: Project;
};

const PersonalProjectsItem = ({ projectData }: PersonalProjectsItemProps) => {
  return (
    <li
      className="lg:w-[900px] border rounded-md  flex flex-col border-opacity-20 border-secondary mt-10 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <a
        href={projectData.attributes.appLink.data?.attributes.url || "#"}
        className="flex flex-col space-y-6 lg:flex-row p-3 lg:space-x-6 lg:space-y-0"
      >
        <div className="w-full lg:w-1/3 aspect-video rounded shrink-0 relative overflow-hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              projectData.attributes.thumbnail.data.attributes.formats.medium
                .url
            }
            alt="project thumbnail"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className="w-full">
          <div className="display flex justify-between items-center lg:items-start">
            <h2 className="text-lg md:text-2xl font-bold">
              {projectData.attributes.title}
            </h2>
            <LinkIcon className="opacity-50" />
          </div>
          <p className="opacity-50">{projectData.attributes.description}</p>
        </div>
      </a>
      <div className="border-t border-secondary border-opacity-20 flex justify-between items-center py-1 px-5 ">
        {projectData.attributes.tags.data && (
          <TagsList tags={projectData.attributes.tags.data} />
        )}
        <div>
          <a
            href={projectData.attributes.githubLink.data?.attributes.url || "#"}
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
