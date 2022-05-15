/* eslint-disable react/no-children-prop */
import React from "react";
import { Main, Menu, Wrapper } from "../components";

export default function Home() {
  return (
    <Main
      title="about this site"
      bold={false}
      desc="a beatiful, responsive, statically-generated, react application written with modern javacript"
    >
      <p className="text-gray-500 tracking-wide leading-7">
        Welcome to my website. Please feel free to read more about me, or you
        can check out my resume, projects, view site statistics, or contact me.
      </p>
    </Main>
  );
}
