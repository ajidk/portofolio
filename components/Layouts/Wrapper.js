import React from "react";
import { Header } from "../Atoms";
import Sidebar from "./Sidebar";

export default function Wrapper({ title, desc, children }) {
  return (
    <div className="xl:flex xs:block flex-row-reverse mx-auto max-w-full opacity-100 py-20 w-11/12">
      <div className="bg-white flex-1">
        <Header title={title} desc={desc} />
        {children}
      </div>
      <div className="xs:w-full xl:w-1/3 px-10">
        <Sidebar />
      </div>
    </div>
  );
}
