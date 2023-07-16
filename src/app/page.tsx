import Expertise from "@/components/home/expertise/Expertise";
import Hero from "@/components/home/hero/Hero";
import MainContainer from "@/components/ui/MainContainer";
export const revalidate = 1800;

const Home = () => {
  return (
    <MainContainer>
      <Hero />
      <Expertise />
    </MainContainer>
  );
};

export default Home;
