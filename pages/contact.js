/* eslint-disable react/no-children-prop */
import Link from "next/link";
import React from "react";
import { ContactIcons, Gap, Main, Menu, Wrapper } from "../components";

export default function Home() {
  return (
    <Main title={"contact"}>
      <p className="text-gray-500 tracking-wide leading-7">
        feel to get in touch. you can email me at:
      </p>
      <p className="text-gray-500 tracking-wide leading-7 cursor-pointer">
        <Link href="mailto:surajidk12@gmail.com">surajidk12@gmail.com</Link>
      </p>
      <Gap height={48} />
      <ContactIcons />
    </Main>
  );
}
