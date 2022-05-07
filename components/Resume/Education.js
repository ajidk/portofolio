import React from "react";
import { Gap } from "../Atoms";

export default function Education() {
  const datas = [
    {
      id: 1,
      degree: "M.S. Computational and Mathematical Engineering",
      school: "Stanford University",
      year: 2022,
    },
    {
      id: 2,
      degree: "M.S. Computational and Mathematical Engineering",
      school: "Stanford University",
      year: 2022,
    },
    {
      id: 3,
      degree: "M.S. Computational and Mathematical Engineering",
      school: "Stanford University",
      year: 2022,
    },
  ];
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        education
      </div>
      <Gap height={24} />
      {datas.map((data) => {
        return (
          <div key={data.id} className="my-4">
            <div className="text-base tracking-widest capitalize text-gray-500">
              {data.degree}
            </div>
            <div className="text-sm tracking-widest capitalize text-gray-500">
              <a href="#" className="border-b border-dotted">
                {data.school}
              </a>
              , {data.year}
            </div>
          </div>
        );
      })}
    </div>
  );
}
