export type Feature = {
  id: number;
  label: string;
  image: string;
  title: string;
  description: string;
};

export type Browser = {
  name: string;
  minVersion: string;
  logo: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};
