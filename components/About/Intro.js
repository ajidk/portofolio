import React from "react";

const Intros = [
  {
    name: "intro",
    desc: [
      "Hi, I’am Suraji from Metro Lampung, Mobile & Web Frontend Engineer with 2+ Years Experience in developing user interfaces. debugging and building a web and mobile applications incorporating a range of technologies. \n\n\n",
      "Offering strong expertise in multiple programming languages, including HTML, CSS, and Javascript. \n\n\n",
      "Seeking to secure a challenging position as a Mobile React Native or Web Frontend Enginee. \n\n\n",
    ],
  },
];

export default function Intro() {
  return (
    <>
      {Intros.map((intro, index) => {
        return (
          <div key={index} className="">
            <div className="uppercase text-lg font-bold tracking-widest text-gray-600 mb-4">
              {intro.name}
            </div>
            {intro.desc.map((job, index) => {
              return (
                <div key={index} className="text-gray-500 mb-6">
                  {job}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
