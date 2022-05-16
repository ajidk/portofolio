/* eslint-disable react/no-children-prop */
import React from "react";

import {
  Courses,
  Education,
  Experience,
  Gap,
  Main,
  References,
  Skills,
} from "../components";

export default function Home() {
  return (
    <Main
      title={"resume"}
      desc="education experience skills"
      bold
    >
      <Experience />
      <Gap height={24} />
      <Skills />
      <Gap height={24} />
      <Education />
      <Gap height={24} />
      {/* <Courses />
      <Gap height={24} /> */}
      <References />
    </Main>
  );
}
