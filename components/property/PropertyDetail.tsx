import React from "react";
import type { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Image */}
      <div className="w-full h-80 overflow-hidden rounded-lg mb-6">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Basic Info */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{property.name}</h1>
        <span className="text-yellow-600 font-semibold">
          {property.rating.toFixed(2)}★
        </span>
      </div>

      {/* Location */}
      <p className="text-gray-600 text-sm mb-3">
        {property.address.city}, {property.address.country}
      </p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {property.description ??
          "No description provided for this property. Please check back later."}
      </p>

      {/* Categories */}
      {property.category && (
        <div className="flex flex-wrap gap-2 mb-6">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Pricing */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Price per night</div>
          <div className="text-lg font-bold text-gray-900">
            ${property.price.toLocaleString()}
          </div>
        </div>

        {property.discount ? (
          <div className="text-sm text-red-600 font-semibold bg-red-50 px-2 py-1 rounded">
            {property.discount}% off
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PropertyDetail;