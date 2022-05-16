import React from "react";
import { Header } from "../Atoms";
import Sidebar from "./Sidebar";

export default function Wrapper({ title, desc, children }) {
  return (
    <div className="xl:flex xs:block flex-row-reverse mx-auto  opacity-100 py-20 w-11/12 container">
      <div className="bg-white flex-1">
        <Header title={title} desc={desc} />
        {children}
      </div>
      <div className="xs:w-full xl:w-1/3 xs:pr-8 md:pr-12 lg:pr-16 xl:pr-18  2xl:pr-20">
        <Sidebar />
      </div>
    </div>
  );
}
