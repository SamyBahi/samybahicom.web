import axios from "axios";
import ExpertiseList from "./ExpertiseList";

export type HomeExpertise = {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
};

const Expertise = async () => {
  const expertiseData = await getExpertise();

  return (
    <section
      aria-label="expertise"
      className="max-w-[1200px] w-full mt-6 md:mt-32 animate-in"
      style={{ "--index": 2 } as React.CSSProperties}
    >
      <h6 className="font-bold text-center lg:text-start">My expertise</h6>
      <ExpertiseList expertiseData={expertiseData} />
    </section>
  );
};

const getExpertise = async () => {
  try {
    const res = await axios.get("/expertises");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default Expertise;
