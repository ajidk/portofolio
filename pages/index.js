/* eslint-disable react/no-children-prop */
import React from "react";
import { Main, Menu, Wrapper } from "../components";

const Content = () => {
  return (
    <>
      <div className="px-20 py-12">
        <div className="font-bold my-6 text-3xl uppercase">about this site</div>
        <p className="text-gray-500 tracking-wide leading-7">
          A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION
          WRITTEN WITH MODERN JAVASCRIPT.
        </p>
      </div>
      <hr />
      <div className="px-20 py-12">
        <p className="text-gray-500 tracking-wide leading-7">
          Welcome to my website. Please feel free to read more about me, or you
          can check out my resume, projects, view site statistics, or contact
          me.
        </p>
      </div>
    </>
  );
};

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
