/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Gap } from "../Atoms";

const courses = [
  {
    title: "Design Theory and Methodology",
    number: "MAE 397",
    link: "https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",
    university: "Stanford",
  },
  {
    title: "Software Engineering Concepts",
    number: "CSE 442",
    link: "",
    university: "Buffalo",
  },
  {
    title: "Hardware/Software Integrated System Design",
    number: "CSE 453",
    link: "",
    university: "Buffalo",
  },
  {
    title: "Data Structures",
    number: "CS 250",
    link: "http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",
    university: "Buffalo",
  },
  {
    title: "Introduction to Digital Signal Processing",
    number: "EE 516",
    link: "",
    university: "Buffalo",
  },
  {
    title: "Computer Vision and Image Processing",
    number: "CSE 573",
    link: "http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",
    university: "Buffalo",
  },
  {
    title: "Realtime Embedded Systems",
    number: "CSE 321",
    link: "",
    university: "Buffalo",
  },
  {
    title: "Computer Architecture",
    number: "CSE 590",
    link: "http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",
    university: "Buffalo",
  },
];

export default function Courses() {
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        selected courses
      </div>
      <Gap height={24} />
      <div className="flex flex-wrap items-center justify-center">
        {courses.map((course) => {
          return (
            <div key={course.number} className="flex">
              <a
                href={course.link}
                target="_blank"
                className="border-b border-gray-500 flex border-dotted"
              >
                <h2 className="font-bold "> {course.number}: </h2>
                <p className="text-gray-500 flex-1">{course.title}</p>
              </a>
              <div className="mx-2"> &#8226;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
