import { DetailedHTMLProps, PropsWithChildren } from "react";

interface AboutSectionProps extends PropsWithChildren {
  title: string;
  style?: React.CSSProperties;
}

const AboutSection = ({ title, style, children }: AboutSectionProps) => {
  return (
    <section
      aria-label={title + "section"}
      className="max-w-[1200px] w-full flex flex-col md:flex-row gap-2 md:gap-2 lg:gap-9 col-reverse mt-14 animate-in"
      style={style}
    >
      <h2 className="w-28 shrink-0 opacity-50 font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default AboutSection;
