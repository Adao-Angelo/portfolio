import { supabase } from "@/lib/supabaseClient";
import { Project, ProjectsState } from "@/types/project";
import { create } from "zustand";

interface ProjectsStore extends ProjectsState {
  fetchProjects: () => Promise<void>;
  fetchProjectById: (id: number) => Promise<void>;
  addProject: (project: Omit<Project, "id" | "created_at">) => Promise<void>;
  updateProject: (id: number, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: number) => Promise<void>;
  filterProjectsByTechnology: (technology: string) => Project[];
  searchProjects: (query: string) => Project[];
  resetError: () => void;
}

export const useProjectsStore = create<ProjectsStore>((set, get) => ({
  projects: [],
  loading: false,
  error: null,
  currentProject: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase
        .from("Projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const projectsWithTechArray =
        data?.map((project) => ({
          ...project,
          technologies: project.technologies
            ? JSON.parse(project.technologies)
            : [],
        })) || [];

      set({
        projects: projectsWithTechArray,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  fetchProjectById: async (id: number) => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase
        .from("Projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      const projectWithTechArray = data
        ? {
            ...data,
            technologies: data.technologies
              ? JSON.parse(data.technologies)
              : [],
          }
        : null;

      set({
        currentProject: projectWithTechArray,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  addProject: async (project) => {
    set({ loading: true, error: null });

    try {
      const projectToInsert = {
        ...project,
        technologies: JSON.stringify(project.technologies || []),
      };

      const { data, error } = await supabase
        .from("Projects")
        .insert([projectToInsert])
        .select()
        .single();

      if (error) throw error;

      const projectWithTechArray = data
        ? {
            ...data,
            technologies: data.technologies
              ? JSON.parse(data.technologies)
              : [],
          }
        : null;

      set((state) => ({
        projects: projectWithTechArray
          ? [projectWithTechArray, ...state.projects]
          : state.projects,
        loading: false,
      }));
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  updateProject: async (id, updates) => {
    set({ loading: true, error: null });

    try {
      const updatesToSend = {
        ...updates,
        ...(updates.technologies && {
          technologies: JSON.stringify(updates.technologies),
        }),
      };

      const { data, error } = await supabase
        .from("Projects")
        .update(updatesToSend)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      const projectWithTechArray = data
        ? {
            ...data,
            technologies: data.technologies
              ? JSON.parse(data.technologies)
              : [],
          }
        : null;

      set((state) => ({
        projects: projectWithTechArray
          ? state.projects.map((project) =>
              project.id === id ? projectWithTechArray : project
            )
          : state.projects,
        currentProject:
          state.currentProject?.id === id
            ? projectWithTechArray
            : state.currentProject,
        loading: false,
      }));
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  deleteProject: async (id) => {
    set({ loading: true, error: null });

    try {
      const { error } = await supabase.from("Projects").delete().eq("id", id);

      if (error) throw error;

      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
        currentProject:
          state.currentProject?.id === id ? null : state.currentProject,
        loading: false,
      }));
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  filterProjectsByTechnology: (technology) => {
    const { projects } = get();
    const lowerTech = technology.toLowerCase();

    return projects.filter((project) =>
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerTech)
      )
    );
  },

  searchProjects: (query) => {
    const { projects } = get();
    const lowerQuery = query.toLowerCase();

    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(lowerQuery)
        )
    );
  },

  resetError: () => set({ error: null }),
}));
