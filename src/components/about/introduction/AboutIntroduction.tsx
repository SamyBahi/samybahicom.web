import axios from "axios";
import AboutSection from "../AboutSection";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const AboutIntroduction = async () => {
  const introData = await getIntro();

  return (
    <AboutSection title="My journey">
      <div className="prose prose-secondary prose-p:text-sm prose-h2:text-xl md:prose-h2:text-2xl">
        <ReactMarkdown>{introData.attributes.content}</ReactMarkdown>
      </div>
    </AboutSection>
  );
};

const getIntro = async () => {
  try {
    const res = await axios.get("/about-intro");

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error("Error " + error.response?.status);
    } else {
      throw new Error("Unexpected Error");
    }
  }
};

export default AboutIntroduction;
