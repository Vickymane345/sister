"use client";
import React, { useRef } from "react";
import image1 from "../Images/Gallery/Venom/image1.png";
import image2 from "../Images/Gallery/Venom/image2.png";
import image3 from "../Images/Gallery/Venom/image3.png";
import image4 from "../Images/Gallery/Venom/image4.png";
import image5 from "../Images/Gallery/Venom/image5.png";
import image6 from "../Images/Gallery/Venom/image6.png";
import image7 from "../Images/Gallery/Venom/image7.png";
import image8 from "../Images/Gallery/Venom/image8.png";
import image9 from "../Images/Gallery/Venom/image9.png";
import image10 from "../Images/Gallery/Venom/image10.png";
import image11 from "../Images/Gallery/Venom/image11.png";
import img1 from "../Images/Gallery/Joker/image1.png";
import img2 from "../Images/Gallery/Joker/image2.png";
import img3 from "../Images/Gallery/Joker/image3.png";
import img4 from "../Images/Gallery/Joker/image4.png";
import img5 from "../Images/Gallery/Joker/image5.png";
import img6 from "../Images/Gallery/Joker/image6.png";
import img7 from "../Images/Gallery/Joker/image7.png";
import img8 from "../Images/Gallery/Joker/image8.png";
import pic1 from "../Images/Gallery/neo/image1.png";
import pic2 from "../Images/Gallery/neo/image2.png";
import pic3 from "../Images/Gallery/neo/image3.png";
import pic4 from "../Images/Gallery/neo/image4.png";
import pic5 from "../Images/Gallery/neo/image5.png";
import pic6 from "../Images/Gallery/neo/image6.png";
import pic7 from "../Images/Gallery/neo/image7.png";
import pic8 from "../Images/Gallery/neo/image8.png";
import pic9 from "../Images/Gallery/neo/image9.png";
import pic10 from "../Images/Gallery/neo/image10.png";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "motion/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ x: -150, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="text-center ">
        <h1 className={`${playfair.className} text-4xl text-center`}>
          Gallery
        </h1>

        <h2 className={`${playfair.className} py-4 text-2xl text-gray-400`}>
          Blockbuster Campaign In Action
        </h2>
        <div
          className={`${playfair.className} pb-8 text-xl lg:w-[50vw] w-80 m-auto `}
        >
          <Marquee>Promotional Campaigns And Movie Premiere For Venom.</Marquee>
        </div>
      </div>

      <div className="py-12">
        <section className="lg:flex px-5 lg:px-0 justify-evenly ">
          <div className=" space-y-5 ">
            <div className="flex justify-center gap-7 ">
              <Image src={image1} alt="" />
              <Image src={image2} alt="" />
            </div>
            <div className=" ">
              <Image src={image3} alt="" />
            </div>
          </div>
          <div className="space-y-5 py-4 lg:py-0  ">
            <div>
              <Image src={image4} className="w-full lg:w-72 " alt="" />
            </div>
            <div>
              <Image src={image5} className="w-full lg:w-72" alt="" />
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className=" space-y-5">
              <Image src={image6} alt="" />
              <Image src={image7} alt="" />
              <Image src={image8} alt="" className="w-full h-[30vh]" />
            </div>
            <div className="me-auto space-y-5">
              <Image src={image9} alt="" />
              <Image src={image10} alt="" />
              <Image src={image11} alt="" className="h-[30.5vh] w-full" />
            </div>
          </div>
        </section>
        <section>
          <div
            className={`${playfair.className} py-20 text-xl lg:w-[50vw] w-80  m-auto `}
          >
            <Marquee>
              Promotional Campaigns And Movie Premiere For Joker, Deadpool &
              Wolverine .
            </Marquee>
          </div>
          <div className="lg:flex justify-evenly px-5 lg:px-0">
            <div className="space-y-7">
              <div className="flex gap-4">
                <Image src={img1} className="w-full" alt="" />
                <Image src={img2} alt="" className="w-full" />
              </div>
              <div className="flex gap-5">
                <Image src={img3} alt="" />
                <Image src={img4} alt="" />
              </div>
            </div>
            <div>
              <div className="py-5 lg:py-0">
                <Image src={img5} className="w-full lg:w-72" alt="" />
              </div>
            </div>
            <div className="space-y-7">
              <div className="">
                <Image src={img6} alt="" className="w-full" />
              </div>
              <div className="flex lg:gap-5">
                <Image src={img7} className="h-[30vh] w-43 lg:w-54" alt="" />
                <Image src={img8} className="h-[30vh]" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className={`${playfair.className} py-20 text-xl lg:w-[50vw] w-80 m-auto `}
          >
            <Marquee>
              Promotional Campaigns And Movie Premiere For Joker, Deadpool &
              Wolverine .
            </Marquee>
          </div>
          <div className="lg:flex justify-evenly gap-5 lg:px-16 px-5">
            <div className="space-y-7">
              <div className="flex gap-5">
                <Image src={pic1} alt="" />
                <Image src={pic2} alt="" />
              </div>
              <div className="flex gap-5">
                <Image src={pic3} alt="" />
                <Image src={pic4} alt="" />
              </div>
            </div>
            <div>
              <div className="py-5 lg:py-0 space-y-7">
                <Image src={pic5} alt="" className="w-full" />
                <Image src={pic6} className="h-[35vh] w-full" alt="" />
              </div>
            </div>
            <div className="space-y-7">
              <div className="flex gap-5 ">
                <Image src={pic7} alt="" />
                <Image src={pic8} alt="" />
              </div>
              <div className="flex gap-5">
                <Image src={pic9} alt="" />
                <Image src={pic10} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Gallery;
