/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { IcFb, IcGithub, IcIg, IcLinkIn, IcMail, IcTweet } from "../../assets";

const datas = [
  {
    id: 1,
    link: "#",
    icon: IcGithub,
  },
  {
    id: 2,
    link: "#",
    icon: IcFb,
  },
  {
    id: 3,
    link: "#",
    icon: IcIg,
  },
  {
    id: 4,
    link: "#",
    icon: IcLinkIn,
  },
  {
    id: 5,
    link: "#",
    icon: IcTweet,
  },
  {
    id: 6,
    link: "#",
    icon: IcMail,
  },
];

export default function ContactIcons() {
  return (
    <div className="flex items-center">
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <a href={data.link} className='pr-6'>
              <Image src={data.icon} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
