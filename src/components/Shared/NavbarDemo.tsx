'use client'
import { Separator } from "@/components/ui/Separator"
import Link from "next/link"
import { useState } from "react";
import logo from "../../../public/logo-two.png"
import Image from "next/image";
import { IconUserCircle, IconScript, IconMessages, IconCode, IconDeviceLaptop} from "@tabler/icons-react";


export function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center top-0 fixed left-0 right-0 backdrop-blur-md md:max-w-[1460px] w-full mx-auto z-20 md:h-16 h-20 ">

        <Link href="/">
          <Image width={150} src={logo} alt="no-icon" className=" object-cover ml-3 "></Image>
        </Link>


        <div className="md:flex navbar hidden h-5  space-x-4 text-sm cursor-pointer  mx-14">
          <Link className="link" href='/#Expertise'>Expertise</Link >
          <Separator orientation="vertical" />
          <Link className="link" href='/#projects'>Work</Link >
          <Separator orientation="vertical" />
          <Link className="link" href="/about">About</Link >
          <Separator orientation="vertical" />
          <Link className="link" href="/resume">Resume</Link >
          <Separator orientation="vertical" />
          <Link className="link" href='/contact'>contact</Link >
        </div>

      </div>
      {/* <Image width={50} src={menubar} alt="no-icon" className={`z-20 object-cover  pr-2 md:hidden top-3 fixed right-0`} onClick={toggleMenu}></Image> */}
      {/* <IconMenu className={`z-20 object-cover  pr-2 md:hidden top-2 fixed right-0`} size={50} onClick={toggleMenu}/> */}
      <div onClick={toggleMenu} className="">
      <span className={`h-1 w-8 bg-white/80 rounded-xl z-20 pr-2 md:hidden top-8 transition-all  duration-500 fixed right-4 ${isOpen ? '-rotate-45 translate-x-2 translate-y-1':'rotate-0'}`}  />
      <span className={`h-1 w-8 bg-white/80 rounded-xl z-20 pr-2 md:hidden top-11 transition-all  duration-500 fixed right-4 ${isOpen ? 'rotate-45 -translate-y-2 translate-x-2':'rotate-0'}`} />
      </div>
      <div className={`w-full mx-auto flex justify-center items-center fixed md:hidden bottom-0 right-0 h-16 backdrop-blur-3xl rounded-t-2xl z-20 transition-all  duration-300 transform ${isOpen ? "opacity-100 -translate-y-0 " : "opacity-0 translate-y-20"}`}>
        <div className="flex h-5 items-center space-x-4 text-sm justify-center cursor-pointer  ">
          <Link href='/#Expertise' className="font-light">
            <IconCode className="mx-auto" />
            Skills
          </Link >
          <Separator orientation="vertical" />
          <Link href='/#projects' className="font-light">
            <IconDeviceLaptop className="mx-auto" />
            Work
          </Link >
          <Separator orientation="vertical" />
          <Link href="/about" className="font-light">
            <IconUserCircle className="mx-auto" />
            About
          </Link >
          <Separator orientation="vertical" />
          <Link href='/resume' className="font-light">
            <IconScript className="mx-auto" />
            Resume
          </Link >
          <Separator orientation="vertical" />
          <Link href='/contact' className="font-light">
            <IconMessages className="mx-auto" />
            contact
          </Link >
        </div>
      </div>
    </>
  )
}
