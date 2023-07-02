import ConnectList from "@/components/ui/ConnectList";
import AboutSection from "../AboutSection";

const Connect = () => {
  return (
    <AboutSection
      title="Connect"
      style={{ "--index": 2 } as React.CSSProperties}
    >
      <div className="flex flex-col space-y-3">
        <div>
          <p className="font-medium">Want to learn more about me ?</p>
          <p> Feel free to email me or connect with me on my socials.</p>
        </div>
        <ConnectList />
      </div>
    </AboutSection>
  );
};

export default Connect;
