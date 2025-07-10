"use client";
import Link from "next/link";
import { RiContactsLine } from "react-icons/ri";
import React, { useState } from "react";
import image1 from "../Images/history.png";
import image2 from "../Images/project.png";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import SliderList from "./slider";
import YoutubeCard from "./card";
import Achievement from "./achievement";
import { motion, useScroll } from "motion/react";
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const playfairs = Playfair_Display({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});

function Resume() {
  const [borderline, setBorderline] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
        className="z-50"
      />
      <div
        className={` cursor-pointer fixed bg-black left-0 right-0 w-14 py-3  m-auto z-50 `}
      >
        <Link href="/">
          <TfiClose
            onMouseEnter={() => setBorderline(true)}
            onMouseLeave={() => setBorderline(false)}
            size={40}
            className={`text-white m-auto ${borderline ? "hover:opacity-100" : "opacity-50"}`}
          />
        </Link>
      </div>

      <div className="text-center py-24">
        <h1 className="text-6xl font-bold">Resume</h1>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:px-62 px-8"
      >
        <div className="relative z-40 lg:border-l-6 border-l border-l-gray-300 lg:h-[515vh] h-[570vh] ">
          <section className="flex items-center">
            <div className=" lg:w-20 z-50 lg:right-10 right-6 top-4 bg-gray-200  rounded-full py-3 relative ">
              <Image className="lg:w-20 w-12" src={image1} alt="" />
            </div>
            <div className="">
              <h1 className={`text-2xl ${playfair.className} `}>
                Work History
              </h1>
            </div>
          </section>

          <div className="pt-9 lg:grid lg:grid-cols-7 ">
            <div className="pt-12 col-span-4">
              <section>
                <div className="flex  z-50 relative items-center lg:space-x-6 space-x-3">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      Feb 2020-2023
                    </p>
                  </div>
                </div>

                <div className="py-16 px-2 lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Marketing and Communications Manager
                      </h1>
                      <h2 className="text-gray-400">
                        EDLP Nigeria Limited (JARA Stores)
                      </h2>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8 text-sm lg:text-lg text-justify`}
                      >
                        As Marketing and Communications Manager at JARA Stores,
                        I was responsible for driving brand growth, customer
                        engagement, and market visibility. Over a three-year
                        period, I organically grew the company’s Instagram
                        following from just 125 to over 8,000, leveraging
                        strategic content planning, community engagement, and
                        targeted campaigns. I also led end-to-end marketing
                        strategies for multiple store launches across Nigeria.
                        Each campaign successfully attracted over 1,000
                        customers on opening days, through a mix of hyperlocal
                        marketing, influencer partnerships, and community
                        outreach. My role encompassed brand management, digital
                        marketing, content creation, media relations, and
                        customer acquisition strategies — all tailored to the
                        retail landscape and consumer behavior in Nigeria.
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      Feb 2023-2024
                    </p>
                  </div>
                </div>
                <div className="pt-9  lg:px-16 px-4">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Brand Manager
                      </h1>
                      <h2 className="text-gray-400">Film House Group</h2>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8 text-sm lg:text-lg  text-justify`}
                      >
                        As Brand Manager at Film House Group, I led high-impact
                        marketing initiatives that significantly elevated brand
                        visibility and customer engagement. Notable campaigns
                        included “A Chocolate Day Out with Wonka,” which drove a
                        20% increase in revenue projections, and “The Deadpool &
                        Wolverine Experience,” which boosted audience engagement
                        by 65%. I also developed experiential marketing
                        strategies such as the Scavenger Hunt and Adire Feedback
                        Wall, which contributed to a 40% increase in brand
                        awareness and enhanced the overall customer experience.
                        My role blended creative concept development with
                        strategic execution across digital, experiential, and
                        partnership-driven channels to strengthen brand affinity
                        in Nigeria’s dynamic entertainment market.
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="flex py-12 items-center">
                <div className="lg:w-20 w-12 px-3 z-50 lg:right-10  right-6 top-4 bg-gray-200  rounded-full py-3 relative ">
                  <Image className="lg:w-20 w-12" src={image2} alt="" />
                </div>
                <div className="">
                  <h1 className={`text-2xl ${playfair.className} `}>
                    Projects
                  </h1>
                </div>
              </section>
              <section className="py-10">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      APR 2023 - JUN 2023
                    </p>
                  </div>
                </div>

                <div className="py-16 px-4 lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Marketing Consultant
                      </h1>
                      <h2 className="text-gray-400">Meilleur Scents</h2>
                      <p
                        className={`${crimson.className} text-gray-500 text-justify text-sm lg:text-lg leading-8`}
                      >
                        As a marketing consultant for Meilleur Scents, I played
                        a key role in developing and implementing strategic
                        initiatives that enhanced brand visibility and customer
                        engagement. Through targeted campaigns, digital
                        marketing improvements, and refined promotional tactics,
                        I successfully contributed to a 5% increase in overall
                        business performance. My efforts helped attract a
                        broader audience, boost sales, and strengthen the
                        company`s market presence.
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="flex  items-center">
                <div className="lg:w-20 w-12 px-3 z-50 lg:right-10  right-6 top-4 bg-gray-200  rounded-full py-3 relative ">
                  <Image className="lg:w-20 w-12" src={image2} alt="" />
                </div>
                <div className="">
                  <h1 className={`text-2xl ${playfair.className} `}>
                    Education
                  </h1>
                </div>
              </section>
              <section className="pt-10">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2023-2024
                    </p>
                  </div>
                </div>

                <div className="pt-16 px-8 lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        MASTERS DEGREE
                      </h1>
                      <h2 className="text-gray-400">
                        Rome Business School, Lagos
                      </h2>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        Executive Masters - Marketing and Sales
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="py-10">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2023-2024
                    </p>
                  </div>
                </div>

                <div className="py-16 px-8  lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        BSC DEGREE
                      </h1>
                      <h2 className="text-gray-400">
                        Babcock University, ilishan - Remo, Nigeria
                      </h2>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        Bsc Mass Communication
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="flex  items-center">
                <div className=" lg:w-20 w-12 px-3 z-50 lg:right-10  right-6 top-4 bg-gray-200  rounded-full py-3 relative ">
                  <Image className="lg:w-20  w-12" src={image2} alt="" />
                </div>
                <div className="">
                  <h1 className={`text-2xl ${playfair.className} `}>
                    Certifications
                  </h1>
                </div>
              </section>
              <section className="py-16">
                <div className="flex py-10 z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2023
                    </p>
                  </div>
                </div>

                <div className=" px-8 lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Marketing Strategy
                      </h1>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        CXL Institute
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2023
                    </p>
                  </div>
                </div>

                <div className="py-16 px-8  lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Branding A-Z
                      </h1>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        Philips Consulting
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2022
                    </p>
                  </div>
                </div>

                <div className="py-16 px-8  lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Professional in Marketing
                      </h1>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        Chartered Institute of Marketing UK
                      </p>
                    </section>
                  </div>
                </div>
              </section>
              <section className="">
                <div className="flex  z-50 relative items-center space-x-6">
                  <div className="   relative    ">
                    <div className="w-6 z-40 right-4 relative bg-red-600  rounded-full py-3"></div>
                  </div>
                  <div className="border-2 border-red-200 py-2 px-6">
                    <p className={`${crimson.className} text-xs text-red-500`}>
                      2022
                    </p>
                  </div>
                </div>

                <div className="py-16 px-8  lg:px-16">
                  <div>
                    <section className="space-y-3">
                      <h1 className={`${playfairs.className} text-lg `}>
                        Fundamentals of Digital Marketing
                      </h1>
                      <p
                        className={`${crimson.className} text-gray-500 leading-8`}
                      >
                        Google
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-start-5 col-end-8 py-9 lg:py-0">
              <div className="text-center pb-14">
                <h1>
                  <a className="after:content-['--'] before:content-['--'] text-xl">
                    {" "}
                    Publishing Platforms{" "}
                  </a>
                </h1>
              </div>
              <section>
                <SliderList />
              </section>
              <section className="pt-28">
                <div className="text-center pb-14">
                  <h1>
                    <a className="after:content-['--'] before:content-['--'] text-xl">
                      {" "}
                      Testimonials{" "}
                    </a>
                  </h1>
                </div>
                <div className="pt-20">
                  <div className="border border-white  shadow-2xl">
                    <div className="relative">
                      <div className=" relative border border-gray-200 shadow-inner  w-20 bg-gray-300 m-auto py-7 px-3  rounded-full bottom-8">
                        <RiContactsLine
                          className="m-auto "
                          color="white"
                          size={25}
                        />
                      </div>
                    </div>
                    <div className="text-center px-8 space-y-3 pb-9">
                      <h1 className={`text-xl ${playfairs.className}`}>
                        Elizabeth
                      </h1>
                      <h2
                        className={`${crimson.className} text-lg text-gray-400`}
                      >
                        Meilleur Scents
                      </h2>
                      <p>
                        It was a pleasure working with Francisca for the pasts
                        months, and i can confidently say that your expertise
                        has been an integral part of growing my business. Your
                        communication skills are top-notch, and you always
                        respond quickly to any questions or concerns i have.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-20">
                <div className="text-center pb-14">
                  <h1>
                    <a className="after:content-['--'] before:content-['--'] text-xl">
                      {" "}
                      Podcasts{" "}
                    </a>
                  </h1>
                </div>

                <div>
                  <YoutubeCard />
                </div>
              </section>
              <section>
                <div className="text-center pb-14">
                  <h1>
                    <a className="after:content-['--'] before:content-['--'] text-xl">
                      {" "}
                      Key Achievement{" "}
                    </a>
                  </h1>
                </div>

                <div>
                  <Achievement />
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
