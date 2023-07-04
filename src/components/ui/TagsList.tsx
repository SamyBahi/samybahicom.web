type TagsListProps = {
  tags: {
    id: number;
    attributes: {
      title: string;
    };
  }[];
};

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <ul className="flex gap-2 flex-wrap text-xs">
      {tags.map((tag) => (
        <li
          className="p-1 underline font-bold text-secondary text-center rounded-full md:bg-indigo-600 md:shadow-indigo-500/50 md:p-2 md:shadow-inner md:min-w-[70px] md:text-[#fcfcfc]"
          key={tag.id}
        >
          #{tag.attributes.title}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
