import type { Project } from "@/types/project";
import type { ReactNode } from "react";
import { ProjectContext } from "./ProjectContext";

interface ProjectRootProps {
  project: Project;
  children: ReactNode;
}

export default function ProjectRoot({ project, children }: ProjectRootProps) {
  return (
    <ProjectContext.Provider value={{ project }}>
      <div>{children}</div>
    </ProjectContext.Provider>
  );
}
