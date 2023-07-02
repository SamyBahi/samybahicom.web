import { Education } from "./Education";

type EducationProps = {
  education: Education;
};

const EducationItem = ({ education }: EducationProps) => {
  return (
    <li className="flex flex-col space-y-1">
      <div>
        <h3 className="font-medium">{education.attributes.degree}</h3>
        <h4 className="">{education.attributes.speciality}</h4>
      </div>
      <p className="font-medium opacity-50">
        {education.attributes.university}
      </p>
    </li>
  );
};

export default EducationItem;
