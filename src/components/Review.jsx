import { Star } from "lucide-react";
import React from "react";
import Heading from "./Heading";

const reviews = [
  {
    name: "John Doe",
    review: "This platform helped me find my lost wallet. Amazing experience!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Emma Smith",
    review:
      "I found a lost puppy and connected with the owner here. Great website!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael Brown",
    review: "Very helpful! I retrieved my laptop within a day of posting.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Review = () => {
  return (
    <div className="py-10 bg-background text-center">
      <Heading
        title={"User Reviews"}
        subtitle={
          "Discover how our platform has helped people reunite with their lost belongings through real user experiences. From misplaced wallets to beloved pets, read heartfelt stories of successful recoveries. Your next found item could be just a post away!"
        }
      />
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-background shadow-xl border border-text p-6 rounded-xl text-text"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
