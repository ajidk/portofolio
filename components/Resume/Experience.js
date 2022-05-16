import React from "react";
import { Gap } from "../Atoms";
import List from "../Atoms/List";

const datas = [
  {
    id: 1,
    company: "junior web backend developer",
    departement: "pt. qodrbee berinovasi",
    position: "developer",
    link: "#",
    daterange: "august 2019 - february 2020",
    points: [
      "Building web applications with Laravel",
      "Building web applications with Wordpress",
      "apps API integration",
    ],
  },
  {
    id: 2,
    company: "junior web backend developer",
    departement: "pt. qodrbee berinovasi",
    position: "developer",
    link: "#",
    daterange: "march 2020 - july 2020",
    points: ["Create a wollow plugin."],
  },
  {
    id: 3,
    company: "junior android developer",
    departement: "pt. qodrbee berinovasi",
    position: "developer",
    link: "#",
    daterange: "august 2021 - march 2022",
    points: [
      "Create a self data UI",
      "Create profile UI",
      "Create material UI",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        experience
      </div>
      <Gap height={24} />
      {datas.map((data) => {
        return (
          <List
            key={data.id}
            departement={data.departement}
            company={data.company}
            daterange={data.daterange}
            points={data.points}
          />
        );
      })}
    </div>
  );
}
