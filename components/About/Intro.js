import React from "react";

const Intros = [
  {
    name: "intro",
    desc: "I am a co-founder and the CTO of Arthena where I build tools to price fine art quickly, accurately, and at scale. I also advise startups, and I invest in people and ideas through a small venture fund. I am particularly interested in projects that touch health and safety, imaging, social impact, and aerospace. If you think I can be helpful to you or would like to meet me, please feel free to get in touch.",
  },
  {
    name: "currently",
    desc: "At Arthena, I have learned how to build teams, manage people, shape culture, develop relationships with customers, sell enterprise products, and build on-line predictive models with technologies like Dask, Dagster, TensorFlow, and spaCy. I primarily work as a data engineer but have broad experience across Arthena’s stack.",
  },
];

export default function Intro() {
  return (
    <>
      {Intros.map((intro,index) => {
        return (
          <div key={index} className="mb-8">
            <div className="uppercase text-lg font-bold tracking-widest text-gray-600">
              {intro.name}
            </div>
            <div className="text-gray-500 mt-2">{intro.desc}</div>
          </div>
        );
      })}
    </>
  );
}
