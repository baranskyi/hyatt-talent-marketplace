import { Star } from 'lucide-react';

export default function StarRating({ rating, showNumber = true, size = 16 }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${
            star <= rating
              ? 'text-hyatt-gold fill-hyatt-gold'
              : 'text-gray-300'
          }`}
        />
      ))}
      {showNumber && (
        <span className="ml-2 text-gray-600 font-medium">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
