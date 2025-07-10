"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { MdEventAvailable } from "react-icons/md";
import { TfiClose, TfiLocationPin } from "react-icons/tfi";
import Form from "./form";

function Contact() {
  const [borderline, setBorderline] = useState(false);

  return (
    <div>
      <div className="fixed bg-black left-0 right-0 w-14 py-3 m-auto z-50 cursor-pointer">
        <Link href="/">
          <TfiClose
            onMouseEnter={() => setBorderline(true)}
            onMouseLeave={() => setBorderline(false)}
            size={40}
            className={`text-white m-auto transition-opacity duration-300 ${
              borderline ? "opacity-100" : "opacity-50"
            }`}
          />
        </Link>
      </div>

      <div className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Contact</h1>
      </div>

      <div className="px-4">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-0 py-10 items-center justify-evenly bg-[#efdcc3] rounded-xl">
          <div className="text-center max-w-[250px]">
            <TfiLocationPin className="m-auto" size={50} />
            <p className="mt-2 text-sm md:text-base">BASED IN LAGOS, NIGERIA</p>
          </div>
          <div className="text-center max-w-[250px]">
            <CiPhone size={50} className="m-auto" />
            <p className="mt-2 text-sm md:text-base">Tel: 08027787949</p>
          </div>
          <div className="text-center max-w-[250px]">
            <CiMail size={50} className="m-auto" />
            <p className="mt-2 text-sm md:text-base break-all">
              udechukwuchiamakaf@gmail.com
            </p>
          </div>
          <div className="text-center max-w-[250px]">
            <MdEventAvailable size={50} className="m-auto" />
            <p className="mt-2 text-sm md:text-base">Available To Work</p>
          </div>
        </div>
      </div>

      <div className="text-center py-14 px-4">
        <h1>
          <span className="after:content-['--'] before:content-['--'] text-xl md:text-2xl font-semibold">
            Book A Service
          </span>
        </h1>
      </div>

      <div className="text-center px-4">
        <h1 className="text-2xl md:text-3xl">
          Find out if I&apos;m <span className="text-red-600">available</span>
          <br className="hidden md:block" /> and ask me for my service
        </h1>
      </div>

      <Form />
    </div>
  );
}

export default Contact;
