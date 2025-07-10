"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useState } from "react";
import image1 from "../Images/engagement.png";
import image2 from "../Images/retention.png";
import image3 from "../Images/marketStrategy.png";
import image4 from "../Images/trainingevent.png";
import image5 from "../Images/campaignManagement.png";
import image6 from "../Images/eventPlanning.png";
import Image from "next/image";

type CardData = {
  id: number;
  imageUrl: StaticImport;
  title: string;
  description: string;
};

const cards: CardData[] = [
  {
    id: 1,
    imageUrl: image1,
    title: "Customer Engagement ",
    description:
      "Increased customer engagement for Film House Group by 25%, leveraging partnership marketing with brands like Hardrock Café, Skit Store NG, and Shoprite",
  },
  {
    id: 2,
    imageUrl: image2,
    title: "Customer Acquisition & Retention",
    description:
      "Drove attendance and sales for JARA Orange Weekend, Black Friday, and Drinks Carnival, attracting over 2,000 customers.",
  },
  {
    id: 3,
    imageUrl: image3,
    title: "Marketing Strategies",
    description:
      "Revamped email marketing strategies at XoticBrands E-Commerce, boosting open rates from 25% to 35%",
  },
  {
    id: 4,
    imageUrl: image4,
    title: "Training & Development",
    description:
      "Trained over 20 associates at Bethmoda Jewelry, improving team performance by 30%",
  },
  {
    id: 5,
    imageUrl: image5,
    title: "Campaign Management ",
    description:
      "Directed marketing campaigns for major blockbusters like Venom, Aliens, Borderlands, Deadpool, and Wolverine, The Hunger games, The monkey man, Adire, Kingdom of the planet of apes and many others, contributing to their box office success.",
  },
  {
    id: 6,
    imageUrl: image6,
    title: "Events Planning and Production",
    description:
      "Produced immersive premiere events and execution for movies like A quiet place,Twisters, What about us, Lakatabu, Kung Fu Panda, Garfield and many more, generating high audience engagement and media impact",
  },
];

function Achievement() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.ceil(cards.length / 2) - 1;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row w-full gap-6 px-2 shrink-0"
            >
              {cards.slice(i * 2, i * 2 + 2).map((card) => (
                <div
                  key={card.id}
                  className="w-full md:w-1/2 bg-white rounded-lg shadow p-4"
                >
                  <div className="w-full h-40 bg-gray-200 mb-3 rounded overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 gap-4 flex-wrap sm:flex-nowrap">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="flex-1 sm:flex-none px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            disabled={index === maxIndex}
            className="flex-1 sm:flex-none px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
