/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImMe } from "../../assets/img";
import { Gap } from "../Atoms";
import ContactIcons from "../Atoms/ContactIcons";

export default function Sidebar({ children }) {
  return (
    <>
      <div className="xs:flex xs:items-center xs:flex-col xs:mt-16 md:flex md:items-center md:flex-col md:mt-16 xl:block">
        <Link href="#">
          <Image
            src={ImMe}
            className="rounded-full max-h-16"
            width={"200px"}
            height={"200px"}
          />
        </Link>
        <Gap height={24} />
        <div className=" text-3xl font-bold uppercase tracking-widest">
          suraji
        </div>
        <Gap height={24} />
        <span className="uppercase text-xl border-b border-gray-400 border-dotted tracking-widest text-gray-500">
          <Link href="#">surajidk12@gmail.com</Link>
        </span>
      </div>
      <Gap height={65} />
      <div className="border-b border-gray-300" />
      <Gap height={70} />
      <h2 className="uppercase text-sm font-semibold text-gray-700">about</h2>
      <Gap height={24} />
      <div className="xl:leading-8 font-thin xl:tracking-widest text-gray-500 text-sm">
        Hi, Im Suraji. I like building things. I am a SMAN 1 PENAWARTAMA
        graduate, IPA Alumni. After graduating from high school, I worked in
        Bali as a laundry for a year. after that I took the programmer bootcamp
        course at qodr for 3 years.
      </div>
      <Gap height={55} />
      <span className="border border-gray-500 text-gray-600 px-6 py-3 uppercase font-bold text-xs">
        <Link href="resume">learn more</Link>
      </span>
      <Gap height={70} />
      <div className="border-b border-gray-300" />
      <Gap height={55} />
      <ContactIcons />
      <Gap height={40} />
      <div className="text-gray-500 text-sm">
        suraji visit https://ajidk.netlify.com
      </div>
    </>
  );
}
