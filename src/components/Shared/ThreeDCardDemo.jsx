"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import cardImage from "../../../public/blob.svg"
import profile_Image from "../../../public/c66d1c7d-12a6-4c1c-99e9-b56d794e1bd6-removebg-preview.png"

export function ThreeDCardDemo() {
  return (
      <CardContainer className="inter-var">
        <CardItem translateZ="100" className=" relative items-center flex justify-center">
          {/* I have try to set cardimage from top right left when its not work and set using translate */}
          <Image src={cardImage} className="-z-10 absolute  w-96 top-0 translate-y-10 group-hover/card:shadow-xl right-2 left-4 lg:translate-x-2 text-center " alt="thumbnail" />

          <Image src={profile_Image} className=" absolute lg:h-full h-72 width-card  group-hover/card:shadow-xl " alt="thumbnail" />
        </CardItem>
      </CardContainer>
  );
}

