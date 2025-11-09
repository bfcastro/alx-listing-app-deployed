import type { NextApiRequest, NextApiResponse } from "next";
import type { PropertyProps } from "@/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<PropertyProps[]>) {
  const properties: PropertyProps[] = [
    {
      id: 1,
      name: "Luxury Beachfront Villa",
      image: "/images/villa.jpg",
      rating: 4.8,
      address: { city: "Accra", country: "Ghana" },
      category: ["Villa", "Luxury", "Oceanfront"],
      price: 250,
      discount: 15,
    },
    {
      id: 2,
      name: "Modern City Apartment",
      image: "/images/apartment.jpg",
      rating: 4.6,
      address: { city: "Kumasi", country: "Ghana" },
      category: ["Apartment", "Modern", "Urban"],
      price: 180,
    },
    {
      id: 3,
      name: "Mountain Cabin Retreat",
      image: "/images/cabin.jpg",
      rating: 4.9,
      address: { city: "Aburi", country: "Ghana" },
      category: ["Cabin", "Nature", "Quiet"],
      price: 120,
    },
  ];

  res.status(200).json(properties);
}
