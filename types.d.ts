type Programs = {
  id: number;
  title: string;
  info: string;
  path: string;
};

type Values = {
  id: number;
  title: string;
  description: string;
};

type Faqs = {
  id: number;
  question: string;
  answer: string;
};

type Testimonials = {
  id: number;
  name: string;
  quote: string;
  occupation: string;
  avatar: string;
};

type GalleryImages = {
  id: number;
  image: string;
  width: number;
  height: number;
};

type Features = {
  id: number;
  feature: string;
  available: boolean;
};

type Plans = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: Features[];
};
