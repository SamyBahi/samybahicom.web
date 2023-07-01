type ExpertiseItemProps = {
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
};

const ExpertiseItem = ({
  title,
  description,
  isActive,
  onMouseEnter,
}: ExpertiseItemProps) => {
  const linkOpacity = isActive ? "opacity-100" : "opacity-20";

  return (
    <div
      aria-label="expertise item"
      className={`w-80 h-28 hover:cursor-default transition-opacity ${linkOpacity} `}
      onMouseEnter={onMouseEnter}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default ExpertiseItem;
