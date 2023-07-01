import Expertise from "@/components/home/expertise/Expertise";
import Hero from "@/components/home/hero/Hero";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:pt-24">
      <Hero />
      <Expertise />
    </main>
  );
};

export default Home;
