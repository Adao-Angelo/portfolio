import type { Project } from "@/types/project";
import { createContext, useContext } from "react";

type ProjectContext = {
  project: Project;
};

export const ProjectContext = createContext<ProjectContext | undefined>(
  undefined
);

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a project");
  }
  return context;
}
