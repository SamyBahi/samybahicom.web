import AboutSection from "@/components/about/AboutSection";
import AboutTitle from "@/components/about/AboutTitle";
import Connect from "@/components/about/connect/Connect";
import Education from "@/components/about/education/Education";
import Experience from "@/components/about/experience/Experience";
import ExperienceList from "@/components/about/experience/ExperienceList";
import AboutIntroduction from "@/components/about/introduction/AboutIntroduction";

export const metadata = {
  title: "About",
  description: "Learn more about Samy",
};

export default async function About() {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:pt-24">
      <AboutTitle />
      <AboutIntroduction />
      <Experience />
      <Education />
      <Connect />
    </main>
  );
}
