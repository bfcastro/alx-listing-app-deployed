import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/common/PropertyCard";
import type { PropertyProps } from "@/interfaces";

export default function Home() {
  // Tell TypeScript what type your array should hold
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This function is inside the useEffect scope
    const fetchProperties = async () => {
      try {
        const response = await axios.get<PropertyProps[]>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
        );
        setProperties(response.data); // <-- OK, inside scope
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties(); // <-- call it inside useEffect
  }, []); // empty deps array means it runs once on mount

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