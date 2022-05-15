/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [Show, setShow] = useState(false);

  const onShow = () => {
    setShow(!Show);
  };

  return (
    <div>
      {Show && (
        <>
          <div className="bg-white z-10 justify-start items-stretch flex-col flex h-full fixed right-0 w-1/3">
            <button
              className="h-16 flex items-center justify-end pr-10"
              onClick={onShow}
            >
              x
            </button>
            <span className="px-4 py-5 uppercase border-y text-xs border-dashed border-b-gray-300 text-black mr-10">
              <Link href="about">about</Link>
            </span>
            <span className="px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10">
              <Link href="resume">resume</Link>
            </span>
            <span className="px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10">
              <Link href="projects">projects</Link>
            </span>
            <span className="px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10">
              <Link href="stats">stats</Link>
            </span>
            <span className="px-4 py-5 uppercase text-xs border-b border-b-gray-300 border-dashed text-black">
              <Link href="contact">contact</Link>
            </span>
          </div>
        </>
      )}
      <div className="flex xs:justify-between xl:justify-start items-center border-b border-b-gray-200 bg-white">
        <span className="text-xs uppercase font-bold border-r border-r-gray-200 py-6 px-10">
          <Link href="/">aji dk</Link>
        </span>
        <div className="xs:hidden md:block">
          <span className="px-10 uppercase border-r text-xs border-r-gray-300 text-gray-500">
            <Link href="about">about</Link>
          </span>
          <span className="px-10 uppercase border-r text-xs border-r-gray-300 text-gray-500">
            <Link href="resume">resume</Link>
          </span>
          <span className="px-10 uppercase border-r text-xs border-r-gray-300 text-gray-500">
            <Link href="projects">projects</Link>
          </span>
          <span className="px-10 uppercase border-r text-xs border-r-gray-300 text-gray-500">
            <Link href="stats">stats</Link>
          </span>
          <span className="px-10 uppercase text-xs text-gray-500">
            <Link href="contact">contact</Link>
          </span>
        </div>
        <button
          className="xs:flex md:hidden xs:flex-row-reverse pr-10"
          onClick={onShow}
        >
          <div>☰</div>
        </button>
      </div>
    </div>
  );
}
