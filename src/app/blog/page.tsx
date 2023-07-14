import BlogSection from "@/components/blog/BlogSection";
import MainContainer from "@/components/ui/MainContainer";

export const metadata = {
  title: "About",
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
