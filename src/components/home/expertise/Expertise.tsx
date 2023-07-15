import axios from "axios";
import ExpertiseList from "./ExpertiseList";
export const revalidate = 10;

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
      <h1 className="font-bold">My expertise</h1>
      <ExpertiseList expertiseData={expertiseData} />
    </section>
  );
};

const getExpertise = async () => {
  try {
    // const res = await axios.get("/expertises?sort[0]=id");
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/expertises?sort[0]=id",
      {
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const data = await res.json();

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Error " + error.response?.status);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};

export default Expertise;
