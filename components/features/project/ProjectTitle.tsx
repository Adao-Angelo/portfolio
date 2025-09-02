import { useProjectContext } from "./ProjectContext";

export default function ProjectTitle() {
  const { project } = useProjectContext();

  return <h1>{project.name}</h1>;
}
