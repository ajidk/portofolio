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
      <div className="xs:flex xs:items-center xs:flex-col xs:mt-16 md:flex md:items-center md:flex-col md:mt-16 xl:mt-0 xl:block">
        <Link href="">
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
          <Link href="mailto:surajidk12@gmail.com">surajidk12@gmail.com</Link>
        </span>
      </div>
      <Gap height={65} />
      <div className="border-b border-gray-300" />
      <Gap height={70} />
      <h2 className="uppercase text-sm font-semibold text-gray-700">about</h2>
      <Gap height={24} />
      <div className="xl:leading-8 font-thin xl:tracking-widest text-gray-500 text-sm">
        Hi, I’am Suraji from Metro Lampung, Mobile & Web Frontend Engineer with
        2+ Years Experience in developing user interfaces. debugging and
        building a web and mobile applications incorporating a range of
        technologies.
        <Gap height={12} />
        Offering strong expertise in multiple programming languages, including
        HTML, CSS, and Javascript
        <Gap height={12} /> Seeking to secure a challenging position as a Mobile
        React Native or Web Frontend Enginee
      </div>
      <Gap height={55} />
      <span className="border border-gray-500 text-gray-600 px-6 py-3 uppercase font-bold text-xs hover:border-blue-500 hover:text-blue-500">
        <Link href="resume">learn more</Link>
      </span>
      <Gap height={70} />
      <div className="border-b border-gray-300" />
      <Gap height={55} />
      <ContactIcons />
      <Gap height={40} />
      <div className="text-gray-500 text-sm">
        suraji visit{" "}
        <Link href="https://ajidk.vercel.app/">https://ajidk.vercel.app</Link>
      </div>
    </>
  );
}
