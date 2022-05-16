/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { IcFb, IcGithub, IcIg, IcLinkIn, IcMail, IcTweet } from "../../assets";

const datas = [
  {
    id: 1,
    link: "https://github.com/ajidk",
    icon: IcGithub,
  },
  {
    id: 2,
    link: "https://www.facebook.com/adjik16",
    icon: IcFb,
  },
  {
    id: 3,
    link: "https://www.instagram.com/ajidk16/",
    icon: IcIg,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/suraji-dk-086668183/",
    icon: IcLinkIn,
  },
  {
    id: 5,
    link: "https://twitter.com/ajidk16",
    icon: IcTweet,
  },
  {
    id: 6,
    link: "mailto:surajidk12@gmail.com",
    icon: IcMail,
  },
];

export default function ContactIcons() {
  return (
    <div className="flex items-center">
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <span className="pr-6 cursor-pointer">
              <a target="_blank" href={data.link}>
                <Image src={data.icon} />
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
}
