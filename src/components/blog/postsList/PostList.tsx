"use client";
import PostItem from "./PostItem";
import { PostCard } from "../BlogSection";
import { useState } from "react";

type PostListProps = {
  postsData: PostCard[];
};

const PostList = ({ postsData }: PostListProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonHover = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <ul onMouseLeave={handleMouseLeave}>
      {postsData.map((postData: PostCard) => (
        <PostItem
          postData={postData}
          key={postData.id}
          isActive={activeButton === postData.id || activeButton === null}
          onMouseEnter={() => handleButtonHover(postData.id)}
        />
      ))}
    </ul>
  );
};

export default PostList;
