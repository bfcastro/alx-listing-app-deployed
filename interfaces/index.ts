
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
  address: AddressProps; //
  category: string[];
  description?: string;
  amenities?: string[];
  images?: string[];
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}