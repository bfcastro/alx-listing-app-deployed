export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  discount?: number;
  address: {
    city: string;
    country: string;
  };
  category: string[];
  description?: string;
  amenities?: string[];   
  images?: string[];     
}

