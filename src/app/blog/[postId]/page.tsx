import PostContent from "@/components/blog/postContent/PostContent";
import MainContainer from "@/components/ui/MainContainer";

export default function Post({ params }: { params: { postId: string } }) {
  return (
    <MainContainer>
      <PostContent postId={params.postId} />
    </MainContainer>
  );
}
