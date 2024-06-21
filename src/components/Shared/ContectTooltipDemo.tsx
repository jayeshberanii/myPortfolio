"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaGithub } from "react-icons/fa";
import instagram from "../../../public/instagram_contect.png"
import github from "../../../public/github_contect.png"
import linkedin from "../../../public/linkedin_contect.png"
import twitter from "../../../public/twitter.png"
const people = [
  {
    id: 1,
    name: "Git Hub",
    designation: "mitenkumar",
    image: github,

    url: "https://github.com/mitenkumar"
  },
  {
    id: 2,
    name: "Instagram",
    designation: "miten_02",
    image: instagram,
    url: "https://www.instagram.com/miten_02/"

  },
  {
    id: 3,
    name: "Linked In",
    designation: "Miten Patel",
    image: linkedin,
    url: "https://www.linkedin.com/in/miten-patel-8939571b2/"

  },
  {
    id: 4,
    name: "Twitter",
    designation: "@miten03",
    image: twitter,
    url: "https://twitter.com/miten03"

  },
];

export function ContectTooltipDemo() {
  return (
    <div className="sm:flex hidden flex-row items-center justify-center w-full my-5">
      <AnimatedTooltip items={people} />
      
    </div>
  );
}
