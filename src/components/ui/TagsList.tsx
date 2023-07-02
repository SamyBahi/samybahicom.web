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
          className=" bg-indigo-600 font-bold  p-3 rounded-full shadow-indigo-500/50 shadow-inner min-w-[70px] text-center"
          key={tag.id}
        >
          #{tag.attributes.title}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
