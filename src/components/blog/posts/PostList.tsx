import { LinkIcon } from "@/components/svgs";
import TagsList from "@/components/ui/TagsList";
import PostItem from "./PostItem";
import { Post } from "../BlogSection";

type PostListProps = {
  postsData: Post[];
};

const PostList = ({ postsData }: PostListProps) => {
  return (
    <ul>
      {postsData.map((postData: Post) => (
        <PostItem postData={postData} />
      ))}
    </ul>
  );
};

export default PostList;
