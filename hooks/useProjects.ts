import { useProjectsStore } from "@/stores/useProjectsStore";
import { useEffect } from "react";

export const useProjects = () => {
  const {
    projects,
    loading,
    error,
    currentProject,
    fetchProjects,
    fetchProjectById,
    addProject,
    updateProject,
    deleteProject,
    filterProjectsByTechnology,
    searchProjects,
    resetError,
  } = useProjectsStore();

  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects();
    }
  }, [fetchProjects, projects.length]);

  return {
    projects,
    loading,
    error,
    currentProject,
    fetchProjects,
    fetchProjectById,
    addProject,
    updateProject,
    deleteProject,
    filterProjectsByTechnology,
    searchProjects,
    resetError,
  };
};
