export interface Project {
  id: number;
  created_at: string;
  name: string;
  description: string;
  github_url: string;
  live_url?: string | null;
  image_url?: string | null;
  technologies: string[];
}

export interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  currentProject: Project | null;
}
