import { Experience } from "./Experience";
import Image from "next/image";

type ExperienceItemProps = {
  experience: Experience;
  isActive: boolean;
  onMouseEnter: () => void;
};

const ExperienceItem = ({
  experience,
  isActive,
  onMouseEnter,
}: ExperienceItemProps) => {
  const linkOpacity = isActive ? "opacity-100" : "opacity-20";
  return (
    <li
      className={`transition-opacity ${linkOpacity}`}
      onMouseEnter={onMouseEnter}
    >
      <a
        href={experience.attributes.link.data?.attributes.url || "#"}
        target="_blank"
        className="flex space-x-5 w-full p-2"
      >
        <div className="relative h-14 w-14 rounded-md shrink-0 overflow-hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              experience.attributes.image.data.attributes.formats.thumbnail.url
            }
            alt="company logo"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <h3 className="font-medium">{experience.attributes.title}</h3>
            <p className="mt-1 opacity-50 font-medium">
              {experience.attributes.company}
            </p>
          </div>
          <div className="flex items-center space-x-3 opacity-50 grow-0 text-xs">
            <h3 className="font-medium">{experience.attributes.period}</h3>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ExperienceItem;
