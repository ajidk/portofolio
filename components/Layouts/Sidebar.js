/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Gap } from "../Atoms";
import ContactIcons from "../Atoms/ContactIcons";

export default function Sidebar({ children }) {
  return (
    <>
      <div className="xs:flex xs:items-center xs:flex-col xs:mt-16 md:flex md:items-center md:flex-col md:mt-16 xl:block">
        <a href="#" className="">
          <img
            src="https://mldangelo.com/images/me.jpg"
            className="rounded-full w-10em"
          />
        </a>
        <Gap height={24} />
        <div className=" text-3xl font-bold uppercase tracking-widest">
          suraji
        </div>
        <Gap height={24} />
        <a
          href="#"
          className="uppercase text-xl border-b border-gray-400 border-dotted tracking-widest text-gray-500"
        >
          surajidk12@gmail.com
        </a>
      </div>
      <Gap height={65} />
      <div className="border-b border-gray-300" />
      <Gap height={70} />
      <h2 className="uppercase text-sm font-semibold text-gray-700">about</h2>
      <Gap height={24} />
      <div className="xl:leading-8 font-thin xl:tracking-widest text-gray-500 text-sm">
        {/* Hi, I'm Michael. I like building things. I am a Stanford ICME graduate,
        YC Alumni, and the co-founder and CTO of Arthena. Before Arthena I was
        at Matroid, Planet, Planetary Resources, Facebook, and SEDS. */}
        Hi, I'm Suraji. I like building things. I am a SMAN 1 PENAWARTAMA
        graduate, IPA Alumni. After graduating from high school, I worked in
        Bali as a laundry for a year. after that I took the programmer bootcamp
        course at qodr for 3 years.
      </div>
      <Gap height={55} />
      <a
        href="/resume"
        className="border border-gray-500 text-gray-600 px-6 py-3 uppercase font-bold text-xs"
      >
        learn more
      </a>
      <Gap height={70} />
      <div className="border-b border-gray-300" />
      <Gap height={55} />
      <ContactIcons />
      <Gap height={40} />
      <div className="text-gray-500 text-sm">
        suraji visit https://ajidk.netlify.com/
      </div>
    </>
  );
}
