import { projects } from "../const/projects";
import Project from "./Project";

export default function ProjectList() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          url={project.url}
          tech={project.tech}
          index={index}
        />
      ))}
    </div>
  );
}
