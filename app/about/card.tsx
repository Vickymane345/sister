import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useRef } from "react";
import image1 from "../Images/strategy.png";
import image2 from "../Images/digitalmarketing.png";
import image3 from "../Images/brandingpo-removebg-preview.png";
import image4 from "../Images/insight.png";
import image5 from "../Images/sem.png";
import image6 from "../Images/isales.png";
import Image from "next/image";
import { motion, useInView } from "motion/react";

import { Playfair_Display, Crimson_Text } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

interface cardsProps {
  src: StaticImport;
  title: string;
  description: string;
}

const cards: cardsProps[] = [
  {
    src: image1,
    title: "Brand Strategy & Market Research",
    description:
      "I specialize in developing data-driven brand strategies and uncovering deep market insights to help businesses grow with clarity and purpose. By combining qualitative and quantitative research methods, I identify consumer behavior trends, competitive positioning, and emerging market opportunities",
  },
  {
    src: image2,
    title: " Digital Marketing & Social Media Strategy",
    description:
      "As a digital marketing specialist, I leverage online channels to promote businesses and engage with customers. My approach includes utilizing social media, email marketing, and SEO to enhance brand awareness and drive lead generation through cost-effective strategies.",
  },
  {
    src: image3,
    title: "  Campaign Management & Product Positioning",
    description:
      "I specialize in planning and executing integrated marketing campaigns that elevate brand visibility and drive measurable results. With a strong focus on product positioning, I craft compelling value propositions tailored to target audiences, ensuring each campaign resonates with the right market segments.",
  },
  {
    src: image4,
    title: " Consumer Insights & Data Analysis",
    description:
      "I uncover meaningful consumer insights through rigorous data analysis to inform smarter business and marketing decisions. By leveraging both qualitative and quantitative methods, I identify behavioral patterns, customer needs, and market trends that drive strategic planning. My work transforms complex data into clear, actionable insights—fueling product development, brand messaging, and customer experience strategies.",
  },
  {
    src: image5,
    title: " SEO/SEM, Email Marketing, Content Creation",
    description:
      "I drive digital growth through a strategic blend of SEO/SEM, targeted email marketing, and high-impact content creation. By optimizing search visibility and managing paid campaigns, I increase web traffic, lead generation, and conversion rates.",
  },
  {
    src: image6,
    title: " Sales Forecasting, Budget Management, Public Relations",
    description:
      "I bring a strategic approach to aligning financial planning with brand visibility and market performance. Through accurate sales forecasting, I help anticipate demand, set realistic targets, and inform decision-making across teams. I manage budgets with a focus on maximizing ROI, ensuring efficient allocation of resources across marketing and operational functions.",
  },
];

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12 xl:px-24">
      <motion.div
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="text-center py-8 px-6 border border-white shadow-xl rounded-lg bg-white h-full"
            >
              <div>
                <Image
                  src={card.src}
                  alt={card.title}
                  className="w-24 h-auto mx-auto"
                />
              </div>
              <div className="mt-4">
                <h1
                  className={`${playfair.className} text-lg md:text-xl font-bold`}
                >
                  {card.title}
                </h1>
              </div>
              <div className="mt-3">
                <p
                  className={`${crimson.className} text-gray-500 text-sm md:text-base`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
