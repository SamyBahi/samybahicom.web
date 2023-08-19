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
          className="p-1 underline text-secondary text-center rounded-md md:bg-secondary/10 md:p-2 md:shadow-inner md:min-w-[70px]"
          key={tag.id}
        >
          #{tag.attributes.title}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
