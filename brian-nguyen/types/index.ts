export interface DisplayCard {
  title: string;
  degree: string;
  from: string;
  to: string;
  link: string;
  image: string;
}

export interface ProjectCard {
  title: string;
  tag: string[];
  desc: string;
  gitLink: string;
  demo?: string;
  image: string;
}
