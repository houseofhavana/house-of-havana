import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating?: number; // Optional: for stars
  source?: "google" | "other"; // Optional: for source icon
  date?: string; // Optional
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating = 5,
  source = "google",
  date,
}) => (
  <div className="p-6 flex flex-col min-h-[300px]">
    <div className="heading-5-italic mb-3 tracking-wide">{name}</div>
    <div className="text-base text-foreground/50 mb-6 flex-1">{review}</div>
    <div className="flex items-center justify-between mt-auto">
      {/* Star rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-white text-2xl">★</span>
        ))}
      </div>
      {/* Source icon */}
      {source === "google" && (
        <span title="Google" className="ml-2">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <g>
              <circle fill="#fff" cx="24" cy="24" r="24"/>
              <path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.4 2.7-2.9 3.5v2.9h4.7c2.7-2.5 4.3-6.1 4.3-10.5z"/>
              <path fill="#34A853" d="M24 36c3.6 0 6.6-1.2 8.8-3.2l-4.7-2.9c-1.3.9-3 1.4-4.1 1.4-3.2 0-5.9-2.2-6.8-5.1h-4.8v3.1C15.2 33.8 19.3 36 24 36z"/>
              <path fill="#FBBC05" d="M17.2 26.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2v-3.1h-4.8C11.5 21.1 11 22.5 11 24s.5 2.9 1.4 4.1l4.8-3.1z"/>
              <path fill="#EA4335" d="M24 18.9c1.9 0 3.6.6 4.9 1.7l3.7-3.7C30.6 15.2 27.6 14 24 14c-4.7 0-8.8 2.2-11.2 5.8l4.8 3.1c.9-2.9 3.6-5.1 6.8-5.1z"/>
            </g>
          </svg>
        </span>
      )}
    </div>
    {date && (
      <div className="text-xs text-foreground/50 mt-2">{date}</div>
    )}
  </div>
);

export default ReviewCard; 