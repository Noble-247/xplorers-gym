type Programs = {
  id: number;
  title: string;
  info: string;
  path: string;
  icon: React.ReactNode;
};

type Values = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
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
  price: string;
  features: Features[];
};

type Trainers = {
  id: number;
  image: string;
  imageWidth: number;
  ImageHeight: number;
  name: string;
  job: string;
  socials: string[];
};
