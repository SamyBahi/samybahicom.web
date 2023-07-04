import { LinkIcon } from "@/components/svgs";
import TagsList from "@/components/ui/TagsList";
import { PostCard } from "../BlogSection";
import Link from "next/link";

type PostItemProps = {
  postData: PostCard;
  isActive: boolean;
  onMouseEnter: () => void;
};

const PostItem = ({ postData, isActive, onMouseEnter }: PostItemProps) => {
  const linkOpacity = isActive ? "opacity-100" : "opacity-20";
  return (
    <li
      className={`flex justify-between transition-opacity mt-12 ${linkOpacity}`}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex flex-col justify-between">
        <div>
          <Link
            href={"/blog/" + postData.id}
            className="flex items-center space-x-4 hover:underline"
          >
            <h2 className="text-lg lg:text-2xl font-medium">
              {postData.attributes.title}
            </h2>
            <LinkIcon className="opacity-50" />
          </Link>
          <p className="mt-3 opacity-50">{postData.attributes.description}</p>
        </div>
        <div>
          <TagsList tags={postData.attributes.tags.data} />
        </div>
      </div>
      <div className="w-1/3 md:w-1/4 lg:w-1/5 aspect-video bg-secondary rounded shrink-0"></div>
    </li>
  );
};

export default PostItem;
