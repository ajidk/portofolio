/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { IcFb, IcGithub, IcIg, IcLinkIn, IcMail, IcTweet, IcWa } from "../../assets";

const datas = [
  {
    link: "https://github.com/ajidk",
    icon: IcGithub,
  },
  {
    link: "https://www.facebook.com/adjik16",
    icon: IcFb,
  },
  {
    link: "https://www.instagram.com/ajidk16/",
    icon: IcIg,
  },
  {
    link: "https://www.linkedin.com/in/suraji-dk-086668183/",
    icon: IcLinkIn,
  },
  {
    link: "https://twitter.com/ajidk16",
    icon: IcTweet,
  },
  {
    link: "mailto:surajidk12@gmail.com",
    icon: IcMail,
  },
  {
    link: "https://wa.me/6285157711650",
    icon: IcWa,
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
