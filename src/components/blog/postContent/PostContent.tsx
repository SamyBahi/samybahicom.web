import axios from "axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export type Post = {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
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
  };
};

type PostContentProps = {
  postId: string;
};

const PostContent = async ({ postId }: PostContentProps) => {
  const postData: Post = await getPostData(postId);

  return (
    <article aria-label="Post content" className="max-w-[1200px] w-full">
      <div className="animate-in">
        <h1 className="text-2xl md:text-3xl font-bold">
          {postData.attributes.title}
        </h1>
        <p className="opacity-60 text-lg md:text-xl mt-2 font-medium">
          {postData.attributes.description}
        </p>
      </div>
      <div
        className="w-full aspect-video bg-secondary rounded mt-10 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      ></div>
      <div
        className="prose prose-secondary prose-p:opacity-60 prose-p:font-medium prose-h2:text-xl md:prose-h2:text-2xl mt-10 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <ReactMarkdown>{postData.attributes.content}</ReactMarkdown>
      </div>
    </article>
  );
};

const getPostData = async (postId: string) => {
  try {
    const res = await axios.get(
      `/blog-posts/${postId}?populate[tags][fields]=title&fields[0]=title&fields[1]=description&fields[2]=content`
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default PostContent;
