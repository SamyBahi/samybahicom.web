import axios from "axios";
import PostList from "./postsList/PostList";

export type PostCard = {
  id: number;
  attributes: {
    title: string;
    description: string;
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

const BlogSection = async () => {
  const postsData: PostCard[] = await getPostsData();

  return (
    <section aria-label="Personal projects" className="max-w-[1200px] w-full">
      <h1 className="text-3xl font-bold animate-in">Blog</h1>
      {/* <input type="text" className="mt-10" /> */}
      <div
        className="mt-10 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <PostList postsData={postsData} />
      </div>
    </section>
  );
};

const getPostsData = async () => {
  try {
    const res = await axios.get(
      "/blog-posts?populate[tags][fields]=title&fields[0]=title&fields[1]=description"
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

export default BlogSection;
