import { strapiImage } from "@/app/layout";
import axios from "axios";
import Image from "next/image";
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
    thumbnail: strapiImage;
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
        className="w-full aspect-video rounded-lg mt-10 relative overflow-hidden animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <Image
          src={
            process.env.NEXT_PUBLIC_API_URL +
            postData.attributes.thumbnail.data.attributes.formats.medium.url
          }
          alt="project thumbnail"
          fill
          sizes="100%"
          priority
        />
      </div>
      <div
        className="prose prose-secondary prose-p:text-secondary prose-p:text-opacity-60 prose-p:font-medium prose-img:rounded-lg prose-h2:text-xl md:prose-h2:text-2xl mt-10 animate-in"
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
      `/blog-posts/${postId}?populate[tags][fields]=title&populate=thumbnail&fields[0]=title&fields[1]=description&fields[2]=content`
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

export default PostContent;
