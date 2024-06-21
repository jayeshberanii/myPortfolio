
import React from "react";
import Link from "next/link";
import logo from "../../../public/logo-two.png"
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

export function FooterCardDemo() {
  return (
    <div className="mt-20">
      <div className="w-full mx-auto h-full relative z-10">
        <footer className="footer md:py-16 py-3">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={10}
            className="w-full absolute h-full -z-10"
            particleColor="#FFFFFF"
          />

          <div className="grid lg:grid-cols-5 grid-cols-1 w-11/12 mx-auto">
            <Image src={logo} alt="no-icon" className="h-24 w-44 mx-auto md:object-cover object-contain md:my-0 my-5"></Image>
            <div className="col-span-4 grid lg:grid-cols-3  grid-cols-1 md:justify-start md:items-start justify-center  items-center sm:mb-5 mb-10 ">
              <div className="flex  flex-col gap-2 w-7/12 lg:w-1/2 mx-auto lg:justify-start lg:items-start justify-center items-center">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest text-md">Site Links</h5>
                <div className="flex lg:flex-col lg:gap-2 gap-4 font-light text-neutral-400 text-sm">
                  <Link href="#Expertise " > Skills</Link>
                  <Link href="#projects" > Projects</Link>
                  <Link href="/about" >About</Link>
                  <Link href="/resume" > Resume</Link>
                  <Link href="/contact" > Contact</Link>
                </div>
              </div>

              <div className="flex  flex-col gap-2 justify-center lg:items-start items-center mt-8 lg:mt-0">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest md:text-md text-sm">Contact Info</h5>
                <Link className="font-light text-neutral-400 text-sm" href="tel:+91 9978956468" >+91 9978956468</Link>
                <Link className="font-light text-neutral-400 text-sm" href="mailto:mitenpate1234@gmail.com" >mitenpate1234@gmail.com</Link>
                <div className="lg:flex hidden mt-5 gap-8 text-neutral-400">

                  <div className="flex gap-4"> <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/" className="group">
                    <IconBrandLinkedin className="w-8 h-8 text-gray-700 linkedin_icon transition duration-300 ease-in-out transform hover:scale-105" />
                  </Link>
                    <div className="flex gap-4">
                      <Link target="_blank" href="https://www.instagram.com/miten_02/" className="group">
                        <IconBrandInstagram className="w-8 h-8 text-gray-700  transition duration-300 instagram_icon transform hover:scale-105" />
                      </Link>
                    </div>

                    <Link target="_blank" href="https://github.com/Miten-Kumar" className="group">
                      <IconBrandGithub className="w-8 h-8 text-gray-700 github_icon transition duration-300 ease-in-out transform hover:scale-105" />
                    </Link>
                    <Link target="_blank" href="https://twitter.com/miten03" className="group">
                      <IconBrandX className="w-8 h-8 text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 gitlab_icon" />
                    </Link>
                  </div>

                </div>
              </div>

              <div className=" lg:hidden flex flex-col gap-2  mt-8 lg:mt-0 items-center ">
                <h5 className="font-semibold lg:mb-5 mb-2 tracking-widest md:text-md text-sm">Social Links</h5>
                <div className="flex lg:flex-col gap-8 font-light text-neutral-400">
                  <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/"><span className="mr-1 md:inline-flex hidden text-sm">LinkedIn</span><IconBrandLinkedin className="inline" /></Link>
                  <Link target="_blank" href="https://www.instagram.com/miten_02/"><span className="mr-1 md:inline-flex hidden text-sm">Instagram</span><IconBrandInstagram className="inline" /></Link>
                  <Link target="_blank" href="https://github.com/Miten-Kumar"><span className="mr-1 md:inline-flex hidden text-sm">Github</span><IconBrandGithub className="inline" /></Link>
                  <Link target="_blank" href="https://twitter.com/miten03"><span className="mr-1 md:inline-flex hidden text-sm">Twitter</span><IconBrandX className="inline" /></Link>
                </div>
              </div>


              <div className="lg:flex hidden flex-col gap-2 lg:justify-start justify-center lg:items-start items-center lg:mt-0 mt-8">
                {/* <h4 className=" mb-5">Let&apos;s Getting Touch</h4> */}
                <p className="font-normal text-lg text-slate-500 mb-4 relative ">
                  Let's brew something great together!              </p>
                <Link href="/contact" className="border text-center px-2 py-1 w-32 rounded-lg  border-gray-500 text-neutral-400">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <span className="bottom-4  md:bottom-0 my-5 md:my-0 text-xs text-neutral-500 absolute w-full text-center translate-y-10 tracking-widest">{`©Made  With  </>  by  Miten.  2024`}</span>
      </div>
    </div>
  );
}
