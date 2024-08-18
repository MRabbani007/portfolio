type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  sortIndex: number;
};

type BlogPost = {
  meta: Meta;
  content: any;
};

export interface SliderItem {
  id: number;
  bgColor?: string;
  icon?: ReactNode | string | null;
  title: string;
  name?: string;
  desc?: string;
  about: string;
  images: string[];
  live_URL?: string;
}

type Project = {
  id: number;
  name: string;
  title: string;
  pinned?: boolean;
  bgColor?: string;
  subtitle: string;
  mainImage: string;
  images: string[];
  imageNames: string[];
  live_URL: string;
  code_URL: string;
  about: string;
  features: string[];
  build: string[];
  technologies: string[];
};

type Resource = {
  name: string;
  text: string;
  image: string;
  url: string;
};

export type Skill = {
  name: string;
  image: string;
  group: number;
};
