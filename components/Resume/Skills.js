import React from "react";
import { Gap } from "../Atoms";

export default function Skills() {
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        skills
      </div>
      <Gap height={24} />
      <div className="flex flex-wrap justify-center items-center">
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">laravel</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">react js</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">wordpress</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">git</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">html</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">css</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">react native</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">tailwind</button>
        <button className="bg-gray-100 text-sm uppercase py-2 px-4 xs:m-1 m-4">bootstrap</button>
      </div>
    </div>
  );
}
