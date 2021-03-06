/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import moment from "moment";
import Image from "next/image";
import React from "react";
import { ImQodr, ImQodr1 } from "../assets";

import { Gap, Main } from "../components";

export default function Home() {
  const datas = [
    {
      title: "landing page qodr",
      subtitle:
        "Qodr (/ˈkōdər/) adalah sebuah program pelatihan IT dan belajar Islam non-formal berbasis pondok",
      link: ImQodr,
      date: "2020-05-17",
      desc: "Mencetak developer yang mengamalkan ajaran Islam Selain berlatih kemampuan teknologi informasi, santri juga belajar tentang agama Islam dan menerapkannya dalam kehidupan sehari-hari",
    },
    // {
    //   title: "nearest dolla",
    //   subtitle: "2015 BVP Hackathon",
    //   link: ImQodr1,
    //   date: "2015-11-20",
    //   desc: "Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice.",
    // },
  ];
  return (
    <Main
      title={"projects"}
      desc="a selection of projects that i'm not too ashamed of"
    >
      {datas.map((data, index) => {
        return (
          <>
            <div className="border mb-12 relative text-sm" key={index}>
              <div className="p-6">
                <div className="uppercase font-bold">{data.title}</div>
                <Gap height={8} />
                <div className="uppercase text-gray-500">
                  {moment(data.date).format("MMMM YYYY")}
                </div>
              </div>

              <Image src={data.link} />
              <div className="p-6 w-full bg-white opacity-80 absolute bottom-0 text-gray-500">
                {data.desc}
              </div>
            </div>
          </>
        );
      })}
    </Main>
  );
}
