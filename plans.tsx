export interface Features {
  feature: string;
  available: boolean;
}

export interface Plans {
  id: number;
  name: string;
  description: string;
  price: number;
  features: {
    feature: string;
    available: boolean;
  };
}
