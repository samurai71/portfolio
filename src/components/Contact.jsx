"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContactImg from "@public/assets/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="w-full">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16 ">
        <p className="text-xl uppercase tracking-widest text-blue-700">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4 ">
              <div>
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={ContactImg}
                  alt="Person Typing on a laptop"
                />
              </div>
              <div>
                <h2 className="py-2">Mark Landeryou</h2>
                <p className="text-blue-600">Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase text-blue-600">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/marklanderyou/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/samurai71"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaGithub />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <div>
                <p className="text-red-600">* Required Fields</p>
              </div>
              <form
                action="https://getform.io/f/dbbd0a26-acb6-4fc1-a87f-b940cd117547"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase" htmlFor="name">
                      Name*
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase" htmlFor="phone">
                      Phone Number*
                    </label>
                    <input
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                      type="text"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase" htmlFor="email">
                    Email*
                  </label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                    type="text"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    className="rounded-lg border-2 border-gray-300 p-3"
                    rows="10"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button className="btn-blue-grad uppercase pt-4 w-full p-4  bg-sky-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
