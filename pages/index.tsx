// pages/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/common/PropertyCard";
import type { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch from your production API using the env variable
        const response = await axios.get<PropertyProps[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );

        // Ensure price and rating are numbers
        const sanitizedData = response.data.map((p) => ({
          ...p,
          price: Number(p.price),
          rating: Number(p.rating),
        }));

        setProperties(sanitizedData);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Optional: sample fallback data for local testing
  useEffect(() => {
    if (properties.length === 0 && !loading && !error) {
      const sampleData: PropertyProps[] = [
        {
          id: 1,
          name: "Modern House in Accra",
          image: "/images/house1.jpg",
          price: 250000,
          rating: 4.5,
          discount: 10,
          address: {
            city: "Accra",
            country: "Ghana",
            state: "Greater Accra",
          },
          category: ["House", "Sale"],
          description: "Beautiful modern house with pool and garden.",
          amenities: ["Pool", "Garage", "Wi-Fi"],
          images: ["/images/house1-1.jpg", "/images/house1-2.jpg"],
        },
        {
          id: 2,
          name: "Luxury Apartment",
          image: "/images/apt1.jpg",
          price: 150000,
          rating: 4.8,
          address: {
            city: "Kumasi",
            country: "Ghana",
            state: "Ashanti",
          },
          category: ["Apartment", "Rent"],
          description: "Spacious apartment in city center.",
          amenities: ["Gym", "Parking", "Wi-Fi"],
          images: ["/images/apt1-1.jpg", "/images/apt1-2.jpg"],
        },
      ];

      setProperties(sampleData);
    }
  }, [properties, loading, error]);

  if (loading) return <p>Loading properties...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}