type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogPost = {
  meta: Meta;
  content: any;
};

type Project = {
  id: number;
  name: string;
  title: string;
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
