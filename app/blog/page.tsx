"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../Images/amaka.jpg";
import Marquee from "react-fast-marquee";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import { CiHome, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import Link from "next/link";
import image from "../Images/about.jpg";
import Gallery from "./Gallerys";
import { motion } from "motion/react";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

function Blog() {
  return (
    <div>
      <Image
        src={bgImage}
        alt=""
        className="fixed"
        fill
        style={{ objectFit: "cover", zIndex: "-1", visibility: "inherit" }}
      />
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="lg:w-[35vw] px-8 lg:px-0 m-auto pt-20 pb-5 text-white">
          <div className="text-end">
            <p className={`${playfair.className}`}>MY PERSONAL PORTFOLIO</p>
          </div>
          <div className="flex  bg-red-500 ">
            <div className="bg-white lg:p-5 p-3">
              <Image src={bgImage} className="lg:w-10 w-9" alt="" />
            </div>
            <div className="lg:text-4xl m-auto ">
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
        <div className="flex space-x-4 text-white items-center justify-center">
          <div>
            <Link href="">
              <CiTwitter size={30} />
            </Link>
          </div>
          <div>
            <Link href="">
              <CiInstagram size={30} />
            </Link>
          </div>
          <div>
            <Link href="">
              <CiLinkedin size={30} />
            </Link>
          </div>
        </div>
        <div className="py-4 flex items-center justify-center space-x-2 text-white">
          <div>
            <CiHome className="" size={30} />
          </div>
          <div>
            <Link href="/home">Home</Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white z-50 py-10"
      >
        <div className="py-10">
          <h1 className={`${playfair.className} text-4xl text-center`}>
            Brandly Amaka
          </h1>
        </div>

        <div className="space-x-5 lg:px-72 px-8">
          <Image src={image} className="lg:float-start  lg:w-72 " alt="" />

          <div className="space-y-9 text-justify py-10 lg:py-10">
            <p className={`${crimson.className} text-xl leading-8`}>
              For African and diaspora SME owners, who are overwhelmed by
              inconsistent brand messaging and a lack of strategy, Brandly Amaka
              is the go-to brand strategy consultancy that helps you clarify,
              structure, and elevate your brand — not just to look good, but to
              sell, scale, and stand out in any market.
            </p>
            <p className={`${crimson.className} leading-8 text-xl`}>
              Unlike generic marketing coaches, we offer culture-conscious,
              market-specific strategies built from hands-on experience with
              African brands across hospitality, finance, and retail — designed
              to work with limited budgets and limitless ambition.
            </p>
            <p className={`${crimson.className} leading-8 text-xl`}>
              I built Brandly Amaka to serve the kind of entrepreneurs who often
              go unseen — African SME owners and diaspora brands with big
              visions but no guide for building their brand properly.
            </p>
            <p className={`${crimson.className} leading-8 text-xl`}>
              My own journey started from the ground up — helping businesses
              shape their story through content, then moving into brand strategy
              roles across hospitality and finance
            </p>
            <p className={`${crimson.className} leading-8 text-xl`}>
              Along the way, I saw a pattern: most small businesses had great
              products or services, but no brand clarity, no structure, and no
              way to communicate value confidently.
            </p>

            <p className={playfair.className}>
              Brandly Amaka exists to change that.
            </p>
          </div>
          <div>
            <div className="py-10">
              <h1 className={`${playfair.className} text-4xl text-center`}>
                Our Mission
              </h1>
            </div>
            <div className="">
              <Image src={bgImage} className="lg:float-end lg:w-60" alt="" />
              <div className="space-y-10 py-10 lg:py-0">
                <p className={`${crimson.className} text-xl leading-8`}>
                  To become the #1 brand growth partner for African SMEs and
                  diaspora-led businesses by delivering innovative, data-driven,
                  and culturally relevant marketing solutions that drive
                  measurable results.
                </p>
                <p className={`${crimson.className} text-xl leading-8`}>
                  We are committed to empowering emerging African brands with
                  the tools, strategies, and storytelling needed to scale
                  globally — helping them compete confidently in local and
                  international markets.
                </p>
                <p className={`${crimson.className} text-xl leading-8`}>
                  Our goal is to bridge the gap between ambition and execution
                  by offering branding, digital marketing, and growth
                  consultancy tailored specifically to the unique challenges and
                  opportunities facing African entrepreneurs and the diaspora
                  community.
                </p>
                <p className={`${crimson.className} text-xl leading-8`}>
                  By combining local insight with global standards, we aim to
                  build lasting partnerships that fuel sustainable growth,
                  unlock brand potential, and contribute to the broader economic
                  advancement of Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="py-20">
        <Gallery />
      </div>
    </div>
  );
}

export default Blog;
