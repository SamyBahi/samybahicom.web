import AboutTitle from "@/components/about/AboutTitle";
import Connect from "@/components/about/connect/Connect";
import Education from "@/components/about/education/Education";
import Experience from "@/components/about/experience/Experience";
import AboutIntroduction from "@/components/about/introduction/AboutIntroduction";
import MainContainer from "@/components/ui/MainContainer";

export const revalidate = 1800;

export const metadata = {
  title: "About | Samy Bahi",
  description:
    "Learn more about Samy Bahi, A Software & Machine Learning engineer.",
};

export default async function About() {
  return (
    <MainContainer>
      <AboutTitle />
      <AboutIntroduction />
      <Experience />
      <Education />
      <Connect />
    </MainContainer>
  );
}
