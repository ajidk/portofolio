/* eslint-disable react/no-children-prop */
import React from "react";
import { List, Main, Menu, Wrapper } from "../components";
import { Intro } from "../components";

const datas = [
  {
    company: "SOME HISTORY",
    points: [
      "My parents put a computer in my bedroom in 1993 when I was 3. It was an old Tandy that ran MS-DOS. My favorite games were Street Rod 2, Wolfenstein 3D, and Tom and Jerry. It had a mechanical keyboard and a turbo button. To this day, I still don't know what pressing the turbo button really did.",
      "We subscribed to AOL in 1995. I still remember installing it from a floppy disk onto our brand new Packard Bell. It took years for me to send my first email.",
      "In the summer of 1996, my uncle purchased MegaRace from Media Play and installed it on my mom's work computer. I might have endangered her business by using her computer too much.",
      "At 7, I discovered the mini-games hidden in Microsoft Office. I also beat Minesweeper on expert for the first time.",
      "At 8, my parents bought me a Sony Mavica MVC-FD71 digital camera after I stole their SLR one too many times. It could fit 10 images to a floppy disk at a 0.3MP resolution. I still have it and it still works. I've been taking photographs ever since, now with a Nikon D750, D800, and occasionally with a Mamiya 6II.",
    ],
  },
  {
    company: "i like",
    points: ["workout", "read", "swimming", "photography"],
  },
  {
    company: "i dream of",
    points: [
      "always finding inspiration.",
      "enabling a brighter future.",
      "doing better.",
      "you not checking the commit history for earlier drafts of this file.",
    ],
  },
];

export default function About() {
  return (
    <Main title="about me" desc="(in about 1036 words)" bold>
      <Intro />
      {datas.map((data, index) => {
        return (
          <List
            key={index}
            company={data.company}
            daterange={data.daterange}
            points={data.points}
          />
        );
      })}
    </Main>
  );
}
