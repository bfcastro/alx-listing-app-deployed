import type { NextApiRequest, NextApiResponse } from "next";
import type { PropertyProps } from "@/interfaces";

const mockProperties: PropertyProps[] = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    image: "/images/villa.jpg",
    rating: 4.8,
    address: { city: "Accra", country: "Ghana" },
    category: ["Villa", "Luxury", "Oceanfront"],
    price: 250,
    discount: 15,
    description:
      "Enjoy a stunning ocean view, modern amenities, and private beach access in this luxurious villa.",
  },
  {
    id: 2,
    name: "Modern City Apartment",
    image: "/images/apartment.jpg",
    rating: 4.6,
    address: { city: "Kumasi", country: "Ghana" },
    category: ["Apartment", "Modern", "Urban"],
    price: 180,
    description:
      "Located in the heart of Kumasi, this stylish apartment offers comfort and convenience.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = mockProperties.find((p) => p.id === Number(id));

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  return res.status(200).json(property);
}
