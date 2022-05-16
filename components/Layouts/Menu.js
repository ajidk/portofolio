/* eslint-disable @next/next/no-html-link-for-pages */
import { route } from "next/dist/server/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Menu() {
  const router = useRouter();

  console.log(router);
  const [Show, setShow] = useState(false);

  const onShow = () => {
    setShow(!Show);
  };

  return (
    <div className="sticky top-0 z-20  bg-white">
      {Show && (
        <>
          <div className="bg-white z-10 justify-start items-stretch flex-col flex h-full fixed right-0 w-1/3">
            <button
              className="h-16 flex items-center justify-end pr-10"
              onClick={onShow}
            >
              x
            </button>
            <span
              className={`px-4 py-5 uppercase border-y text-xs border-dashed border-b-gray-300 text-black mr-10 ${
                router.pathname === "/about"
                  ? "text-blue-500"
                  : " text-gray-500"
              }`}
            >
              <Link href="/about">about</Link>
            </span>
            <span
              className={`px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10 ${
                router.pathname === "/resume"
                  ? "text-blue-500"
                  : " text-gray-500"
              }`}
            >
              <Link href="/resume">resume</Link>
            </span>
            <span
              className={`px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10 ${
                router.pathname === "/projects"
                  ? "text-blue-500"
                  : " text-gray-500"
              }`}
            >
              <Link href="/projects">projects</Link>
            </span>
            {/* <span className={`px-4 py-5 uppercase border-b text-xs border-dashed border-b-gray-300 text-black mr-10 ${
              router.pathname === "/stats" ? "text-blue-500" : " text-gray-500"
            }`}>
              <Link href="/stats">stats</Link>
            </span> */}
            <span
              className={`px-4 py-5 uppercase text-xs border-b border-b-gray-300 border-dashed text-black ${
                router.pathname === "/contact"
                  ? "text-blue-500"
                  : " text-gray-500"
              }`}
            >
              <Link href="/contact">contact</Link>
            </span>
          </div>
        </>
      )}
      <div className="flex justify-between items-center border-b border-b-gray-200 mx-auto container">
        <span className="text-xs uppercase font-bold py-6 xs:px-8 md:pr-12 lg:pr-16 xl:pr-18  2xl:pr-20">
          <Link href="/">aji dk</Link>
        </span>
        <div className="xs:hidden md:block">
          <span
            className={`xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20 uppercase border-r text-xs border-r-gray-300 hover:text-blue-500 ${
              router.pathname === "/about" ? "text-blue-500" : " text-gray-500"
            }`}
          >
            <Link href="/about">about</Link>
          </span>
          <span
            className={`${
              router.pathname === "/resume" ? "text-blue-500" : " text-gray-500"
            } xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20 uppercase border-r text-xs border-r-gray-300 text-gray-500 hover:text-blue-500`}
          >
            <Link href="/resume">resume</Link>
          </span>
          <span
            className={`${
              router.pathname === "/projects"
                ? "text-blue-500"
                : " text-gray-500"
            } xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20 uppercase border-r text-xs border-r-gray-300 text-gray-500 hover:text-blue-500`}
          >
            <Link href="/projects">projects</Link>
          </span>
          {/* <span className="xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20 uppercase border-r text-xs border-r-gray-300 text-gray-500 hover:text-blue-500">
            <Link href="/stats">stats</Link>
          </span> */}
          <span
            className={`xs:pl-8 md:pl-12 lg:pl-16 xl:pl-18  2xl:pl-20 uppercase text-xs text-gray-500 hover:text-blue-500 ${
              router.pathname === "/contact"
                ? "text-blue-500"
                : " text-gray-500"
            } `}
          >
            <Link href="/contact">contact</Link>
          </span>
        </div>
        <button
          className="xs:flex md:hidden xs:flex-row-reverse xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20"
          onClick={onShow}
        >
          <div>☰</div>
        </button>
      </div>
    </div>
  );
}
