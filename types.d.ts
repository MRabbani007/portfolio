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
  detail?: string;
};

export type MetaData = {
  id: string;
  _id?: string;

  title: string;
  detail?: string;
  slug: string;
  category: string;
  tags: string[];
  status: string;
  icon?: string;
  sortIndex?: number;
  banner?: string;

  author?: string;
  authorID?: string;
  authorProfile?: string;

  views?: number;
  likes?: number;
  comments?: number;

  filename: string;
  pathname: string;
  downloadURL: string;

  createdAt?: TimeStamp | null;
  publishedAt?: TimeStamp | null;
  updatedAt?: TimeStamp | null;
};

export type TimeStamp = { seconds: number; nanoseconds: number };
