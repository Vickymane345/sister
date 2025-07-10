"use client";
import Marquee from "react-fast-marquee";
import React, { useState } from "react";
import bgImage from "../Images/amaka.jpg";
import Image from "next/image";
import image1 from "../Images/ms.png"
import { Playfair_Display } from "next/font/google";
import {
  CiInstagram,
  CiLinkedin,
} from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

function Home() {
  const [borderline, setBorderline] = useState(false);

  return (
    <div className={`overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={bgImage}
          alt=""
          className="opacity-85  "
          fill
          style={{ objectFit: "cover", zIndex: "-1", visibility: "inherit" }}
        />
        <div className="lg:flex  text-white    items-center  font-bold">
          <div className="w-[30em] hidden lg:block ">
            <ul className="lg:space-y-4 space-y-2 px-6 text-lg lg:text-6xl">
              <li
                onMouseEnter={() => setBorderline(true)}
                className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log("hover started!")}
                >
                  <Link href="/about" className={`${playfair.className}`}>
                    ABOUT
                  </Link>
                </motion.button>
              </li>
              <li
                onMouseEnter={() => setBorderline(true)}
                className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/resume" className={`${playfair.className}`}>
                    RESUME
                  </Link>
                </motion.button>
              </li>
              <li
                onMouseEnter={() => setBorderline(true)}
                className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32  pb-2" : ""} cursor-pointer`}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/blog" className={`${playfair.className}`}>
                    BLOG
                  </Link>
                </motion.button>
              </li>
              <li
                onMouseEnter={() => setBorderline(true)}
                className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className={`${playfair.className}`}>
                    CONTACT
                  </Link>
                </motion.button>
              </li>
            </ul>
          </div>

          <div className="lg:m-auto lg:w-[30em] w-72 px-5 py-6 lg:px-0 lg:py-0">
            <div className="text-end">
              <p className={`${playfair.className} text-sm lg:text-lg`}>
                MY PERSONAL PORTFOLIO
              </p>
            </div>
            <div className="flex  bg-red-500 ">
              <div className="bg-white lg:p-5 p-3">
                <Image src={bgImage} className="lg:w-10 w-6 " alt="" />
              </div>
              <div className="lg:text-3xl text-sm m-auto lg:px-4">
                <p className={`${playfair.className}`}>Francisca Udechukwu</p>
              </div>
            </div>
            <div>
              <Marquee speed={20} className={`${playfair.className}`}>
                A seasoned Sales amd Marketing expert with a passion for driving
                growth and crafting strategies that turn potential to success.
                Let`s connect and take your brand to the next level!
              </Marquee>
            </div>
          </div>

          <div className="relative mt-20 justify-center w-[35em] h-full hidden lg:block ">
            <motion.svg
              className="absolute w-full h-full"
              viewBox="0 0 300 300"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text fill="black" fontSize="14" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0%">
                  BRAND MANAGER· MARKETING STRATEGIST· BRAND MANAGER· MARKETING STRATEGIST 
                </textPath>
              </text>
            </motion.svg>

            <div className="rounded-full relative overflow-hidden  mt-30 ml-10  z-10">
              <Image src={image1} alt="Francisca Udechukwu" className="w- " />
            </div>
          </div>
          <div className="flex items-center py-20">
            <div className="  lg:hidden ">
              <ul className="lg:space-y-4 space-y-2 px-6 text-2xl lg:text-6xl">
                <li
                  onMouseEnter={() => setBorderline(true)}
                  className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                  >
                    <Link href="/about" className={`${playfair.className}`}>
                      ABOUT
                    </Link>
                  </motion.button>
                </li>
                <li
                  onMouseEnter={() => setBorderline(true)}
                  className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/resume" className={`${playfair.className}`}>
                      RESUME
                    </Link>
                  </motion.button>
                </li>
                <li
                  onMouseEnter={() => setBorderline(true)}
                  className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32  pb-2" : ""} cursor-pointer`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/blog" className={`${playfair.className}`}>
                      BLOG
                    </Link>
                  </motion.button>
                </li>
                <li
                  onMouseEnter={() => setBorderline(true)}
                  className={`${borderline ? "hover:border-b-red-500 hover:border-b-2 w-32 pb-2" : ""} cursor-pointer`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className={`${playfair.className}`}>
                      CONTACT
                    </Link>
                  </motion.button>
                </li>
              </ul>
            </div>

            <div className="relative mt-20 justify-center w-[15em]  lg:hidden ">
            <motion.svg
              className="absolute w-full -top-7 "
              viewBox="0 0 300 300"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text fill="black" fontSize="24" letterSpacing="7">
                <textPath href="#circlePath" startOffset="0%">
                  BRAND MANAGER· MARKETING STRATEGIST 
                </textPath>
              </text>
            </motion.svg>

            <div className="rounded-full relative overflow-hidden w-49 ml-4 z-10">
              <Image src={image1} alt="Francisca Udechukwu" className=" " />
            </div>
          </div>
          </div>
        </div>
        <div className="flex justify-between pr-2  lg:pr-6 items-center ">
          <div className="flex bg-gray-950 text-white space-x-12 lg:space-x-16 px-4 items-center py-4 lg:py-3">
            <div>
              <Link href="https://www.tiktok.com/@brandlyamaka?_t=ZM-8x5yO9zuT3Q&_r=1">
                <FaTiktok size={20}/>
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/aamaka?igsh=bHQ5ZW50NHh6M2lt&utm_source=qr">
                <CiInstagram size={20} />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/franciscaudechukwu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <CiLinkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <p className="opacity-60 lg:text-gray-700 text-xs lg:text-lg">
              2025 Francisca Udchukwu
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
