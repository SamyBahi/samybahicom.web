import PostContent from "@/components/blog/postContent/PostContent";
import MainContainer from "@/components/ui/MainContainer";
export const revalidate = 600;

export default function Post({ params }: { params: { postId: string } }) {
  return (
    <MainContainer>
      <PostContent postId={params.postId} />
    </MainContainer>
  );
}
