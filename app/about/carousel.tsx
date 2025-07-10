"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import image from "../Images/amaka.jpg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
});
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

interface carouselProps {
  id: number;
  src: StaticImport;
  title: string;
  subtitle?: string;
  price: string;
  description: string[];
}

const carousel: carouselProps[] = [
  {
    id: 1,
    src: image,
    title: "Starter Brand Clarity Package ",
    subtitle: "For New SMEs or Personal Brands",
    price: "150,000 Naira",
    description: [
      "60-minute discovery session",
      "Brand voice & tone guide",
      "Ideal customer profile",
      "One-page brand strategy framework",
      "1 revision round",
    ],
  },
  {
    id: 2,
    src: image,
    title: "Full Brand Strategy Package ",
    subtitle: "For SMEs ready to Grow and Scale",
    price: "300,000 Naira",
    description: [
      "90-minute brand audit & consultation",
      "Full brand strategy document",
      "Mission, vision, values",
      "Ideal customer segmentation",
      "Competitive positioning",
      "Brand messaging",
      "Visual brand direction (Recommendations)",
      "Marketing roadmap (3 months)",
      "2 revision rounds",
    ],
  },
  {
    id: 3,
    src: image,
    title: "Monthly brand & marketing retainer",
    subtitle: "Depending on business size and needs",
    price: "500,000 Naira",
    description: [
      "Ongoing strategy support",
      "2 content calendars/month",
      "Campaign ideas & reviews",
      "Monthly performance check-ins",
      "Team training or reviews (1 session/month)",
      "WhatsApp or email support",
    ],
  },
  {
    id: 4,
    src: image,
    title: "Social Media Strategy",
    price: "150,000 Naira",
    description: [
      "Content Themes",
      "Content Pillars",
      "Hashtag Strategy",
      "Sample Post Captions",
      "Performance Benchmarks",
      "Tools & Tips",
    ],
  },
  {
    id: 5,
    src: image,
    title: "Marketing Audit & Recommendations",
    price: "150,000 Naira",
    description: [
      "Audit of 1 brand touchpoint (website, Instagram, store, etc.)",
      "Report on whats working/not",
      "Actionable Improvement Suggestions",
    ],
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = carousel.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-32 xl:px-48 lg:py-12">
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-lg overflow-hidden p-6 md:p-9 gap-6">
        <div className="flex justify-center items-center">
          <Image
            src={carousel[current].src}
            alt=""
            width={500}
            height={400}
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1
            className={`text-2xl sm:text-3xl font-bold text-gray-800 ${playfair.className}`}
          >
            {carousel[current].title}
          </h1>
          {carousel[current].subtitle && (
            <p
              className={`text-lg sm:text-xl text-gray-600 ${crimson.className}`}
            >
              {carousel[current].subtitle}
            </p>
          )}
          <p className="text-lg sm:text-xl font-semibold text-blue-600">
            {carousel[current].price}
          </p>
          <ul
            className={`${crimson.className} text-gray-700 list-disc list-inside text-sm sm:text-base space-y-1`}
          >
            {carousel[current].description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 lg:block hidden sm:left-6 lg:left-48 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full hover:bg-gray-800"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 lg:block hidden sm:right-6 lg:right-48 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full hover:bg-gray-800"
      >
        &#8594;
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {carousel.map((_, idx) => (
          <button
            title="button"
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full ${
              idx === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
