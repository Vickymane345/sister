"use client";

import Image from "next/image";
import React from "react";
import image1 from "../Images/consumer.png";
import image2 from "../Images/youtube.png";
import image3 from "../Images/mgc.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CardData = {
  imageUrl: StaticImport;
  title: string;
  youtubeLink: string;
};
const YoutubeCard: React.FC = () => {
  const cards: CardData[] = [
    {
      imageUrl: image1,
      title: "Checking The Pulse Of Consumer Demand With Rising Inflation",
      youtubeLink: "https://youtu.be/n7Pfk4oEsPk?si=xsDwIBC7ifGlCbQH",
    },
    {
      imageUrl: image2,
      title:
        "How to Make People Buy Without Selling Hard – Branding Secrets with Francisca Chiamaka",
      youtubeLink: "https://youtu.be/yDmj8KHk_JI?si=cBxb0HWVuwRcv1xd",
    },
    {
      imageUrl: image3,
      title: "MGC International Womens Day 2025 Webinar",
      youtubeLink: "https://youtu.be/CdCyf87Jn9c?si=UysjEzHcVdnF6vRv",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">YouTube Channels</h1>
      <div className="grid grid-cols-1 gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm"
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <a
                href={card.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Visit Channel
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoutubeCard;
