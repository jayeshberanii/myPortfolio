"use client";

import { FooterCardDemo } from "@/components/Shared/FooterCardDemo";
import { usePathname } from "next/navigation";

import React from "react";

export default function FooterCard() {
  const path =usePathname()
  return (
      <div className={`h-96 md:max-w-[1460px] w-full mx-auto ${path === '/contact' ? "hidden" : ""}`}>
      <FooterCardDemo/>
      </div>
  );
}
