import { experiences } from "../../const/experiences";
import Experience from "./Experience";

export default function ExperienceList() {
  return (
    <>
      {experiences.map((exp) => (
        <Experience key={exp.title} {...exp} />
      ))}
    </>
  );
}
