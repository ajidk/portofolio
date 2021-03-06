import React from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

export default function Main({ title, bold, desc, children }) {
  return (
    <div className="font-raleway bg-gray-200 relative">
      <Menu />
      <Wrapper title={title} desc={desc} bold={bold}>
        <div className="xs:px-8 md:px-12 lg:px-16 xl:px-18  2xl:px-20 xs:pt-12 xs:pb-16 md:pt-12 md:pb-16 xl:py-12">
          {children}
        </div>
      </Wrapper>
    </div>
  );
}
