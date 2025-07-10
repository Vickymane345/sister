"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zly223m",
        "template_qpnxewl",
        formRef.current,
        "rjW1PnNH-zajPgd14",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        },
      );
  };

  return (
    <div className="py-20 px-4">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-3xl mx-auto space-y-10"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
          <select
            name="user_title"
            id="title"
            className="block py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 w-full"
            required
          >
            <option value="">Status</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
          </select>

          <input
            name="user_name"
            title="name"
            placeholder="Name"
            className="border-b-2 border-gray-300 focus:border-red-600 outline-none transition-all duration-300 w-full py-5"
          />

          <input
            name="user_email"
            title="email"
            placeholder="Email"
            className="border-b-2 border-gray-300 focus:border-red-600 outline-none transition-all duration-300 w-full py-5"
          />
        </div>

        <div>
          <textarea
            title="message"
            placeholder="Message"
            className="border-b-2 border-gray-300 focus:border-red-600 outline-none transition-all duration-300 w-full py-5"
            name="message"
          />
        </div>

        <div className="text-center">
          <button
            className="border px-8 py-3 rounded-full bg-[burlywood] text-sm font-medium"
            type="submit"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
