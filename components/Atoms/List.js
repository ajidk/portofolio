import React from "react";
import Gap from "./Gap";

export default function List({ company, departement, daterange, points }) {
  return (
    <div className="my-4">
      <div className="uppercase text-lg font-bold tracking-widest text-gray-600">
        {company} {departement && <span> - {departement}</span>}
      </div>
      <Gap height={4} />
      <div className="text-gray-400 capitalize">{daterange}</div>
      <Gap height={4} />
      <ul className="list-disc ml-4">
        {points.map((job, index) => {
          return (
            <li key={index} className="text-gray-500">
              {job}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
