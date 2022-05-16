import Link from "next/link";
import React from "react";
import { Gap } from "../Atoms";

export default function Education() {
  const datas = [
    {
      degree: "natural sciences",
      school: "SMAN 1 PENAWARTAMA",
      year: "2014 - 2017",
    },
    {
      degree: "Hangers Laundry",
      school: "Kuta Bali",
      year: '2018 - 2019',
    },
    {
      degree: "Course Bootcamp",
      school: "QODR, Mangunan, Bantul",
      year: 'Feb 2019 - Feb 2022',
    },
  ];
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        education
      </div>
      <Gap height={24} />
      {datas.map((data, index) => {
        return (
          <div key={index} className="my-4">
            <div className="text-base tracking-widest capitalize text-gray-700">
              {data.degree}
            </div>
            <div className="text-sm tracking-widest capitalize text-gray-500">
              <Link href="" className="border-b border-dotted">
                {data.school}
              </Link>
              , {data.year}
            </div>
          </div>
        );
      })}
    </div>
  );
}
