export interface BlogPost {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColorClass: string;
  stats?: string;
  links: ProjectLink[];
}