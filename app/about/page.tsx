"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import image from "../Images/about.jpg";
import image1 from "../Images/achieve.png";
import image2 from "../Images/idea.png";
import image3 from "../Images/grow.png";
import image4 from "../Images/call.png";
import image5 from "../Images/proposal.png";
import image6 from "../Images/plan.png";
import image8 from "../Images/aim.png";
import image9 from "../Images/camera.png";
import image10 from "../Images/awards.png";
import { TfiClose } from "react-icons/tfi";
import Services from "./card";
import Carousel from "./carousel";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import { motion, useInView, useScroll } from "motion/react";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});
function About() {
  const [borderline, setBorderline] = useState(false);
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

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
        <h1 className="lg:text-6xl text-xl font-bold">About Me</h1>
      </div>
      <div className="lg:px-44 px-5">
        <div>
          <div
            className={`lg:py-14 lg:px-16 lg:gap-10 items-center lg:flex bg-black text-white `}
          >
            <div className="py-10 lg:py-0">
              <Image
                src={image}
                className="lg:w-full w-72 m-auto lg:m-0 rounded-full"
                alt=""
              />
            </div>
            <div className="p-7 lg:p-0">
              <p
                className={`${crimson.className} lg:text-3xl text-lg text-justify lg:text-start `}
              >
                Hello, I am Francisca Udechukwu, a{" "}
                <span className={`${playfair.className}`}>
                  Brand Manager and Marketing Specialist{" "}
                </span>{" "}
                with extensive experience in driving brand growth, increasing
                customer engagement, and elevating brand visibility. Known for
                delivering innovative marketing strategies, managing
                cross-platform campaigns, and leading successful product
                launches, Francisca is committed to aligning brand vision with
                business objectives and measurable performance outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center pt-32 pb-12">
          <h1>
            <a className="after:content-['--'] before:content-['--'] text-xl">
              {" "}
              Services{" "}
            </a>
          </h1>
        </div>
        <Services />
      </div>
      <div>
        <div className="py-20 px-4 sm:px-8 lg:px-24">
          <div className="text-center pb-14">
            <h1>
              <a className="after:content-['--'] before:content-['--'] text-xl font-semibold">
                Why Work With Me
              </a>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-500">
            <div className="text-center space-y-4">
              <Image
                src={image1}
                className="w-24 sm:w-28 lg:w-32 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>
                8+ years across finance, hospitality, and consumer brands
              </p>
            </div>
            <div className="text-center space-y-4">
              <Image
                src={image2}
                className="w-24 sm:w-28 lg:w-32 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>
                Clear, actionable strategies
              </p>
            </div>
            <div className="text-center space-y-4">
              <Image
                src={image3}
                className="w-40 sm:w-48 lg:w-60 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>I guide. You grow</p>
            </div>
          </div>
        </div>

        <div className="py-14 px-4 sm:px-8 lg:px-24">
          <div className="text-center pb-14">
            <h1>
              <a className="after:content-['--'] before:content-['--'] text-xl font-semibold">
                How it Works
              </a>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-500">
            <div className="text-center space-y-4">
              <Image
                src={image4}
                className="w-24 sm:w-28 lg:w-32 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>
                Book a Free Discovery Call
              </p>
            </div>
            <div className="text-center space-y-4">
              <Image
                src={image5}
                className="w-24 sm:w-28 lg:w-32 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>
                Receive Your Custom Proposal
              </p>
            </div>
            <div className="text-center space-y-4">
              <Image
                src={image6}
                className="w-24 sm:w-28 lg:w-32 mx-auto"
                alt=""
              />
              <p className={`${crimson.className}`}>
                Get a Full Strategy and Handoff Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-44 z-10"
      >
        <div>
          <Carousel />
        </div>
      </motion.div>

      <div className="lg:py-9 pb-8 lg:pb-0">
        <div className="text-center pb-14">
          <h1>
            <a className="after:content-['--'] before:content-['--'] text-xl font-semibold">
              Fun Fact
            </a>
          </h1>
        </div>

        <div className="px-4 sm:px-10 lg:px-24">
          <div className="py-10 bg-[#efdcc3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-500 rounded-xl">
            <div className="text-center space-y-4">
              <Image src={image8} className="w-20 sm:w-24 mx-auto" alt="" />
              <p className={`${crimson.className}`}>8+ Projects Completed</p>
            </div>
            <div className="text-center space-y-4">
              <Image src={image9} className="w-20 sm:w-24 mx-auto" alt="" />
              <p className={`${crimson.className}`}>29+ Photos Taken</p>
            </div>
            <div className="text-center space-y-4">
              <Image src={image10} className="w-20 sm:w-24 mx-auto" alt="" />
              <p className={`${crimson.className}`}>1 Award Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
