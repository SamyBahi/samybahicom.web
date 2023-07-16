import BlogSection from "@/components/blog/BlogSection";
import MainContainer from "@/components/ui/MainContainer";

export const revalidate = 600;

export const metadata = {
  title: "Blog | Samy Bahi",
  description:
    "I write blog posts about my experiences in development and design. You can also read case studies of my personal projects.",
};

export default function Blog() {
  return (
    <MainContainer>
      <BlogSection />
    </MainContainer>
  );
}
