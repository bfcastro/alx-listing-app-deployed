import { useState, useEffect } from "react";
import axios from "axios";

// Define TypeScript interface for a review
interface Review {
  id: number | string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  propertyId: string | number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch reviews when the component mounts or when propertyId changes
  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;

      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500 italic">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500 italic">No reviews yet for this property.</p>;
  }

  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium text-gray-800">{review.reviewerName}</h4>
              <span className="text-yellow-600 font-semibold">{review.rating}★</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{review.comment}</p>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
