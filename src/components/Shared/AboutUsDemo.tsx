"use client";
import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


export function AboutUsDemo() {
    const router = useRouter()
    return (
        <div className="w-10/12 mx-auto tracking-wide ">
            <span className="mt-2 opacity-90 cursor-pointer" onClick={() => router.replace('/')}>
                <IconArrowLeft />
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-10 md:gap-2 gap-10 ">
                <div className="">

                    <h2 className="opacity-90">Patel Miten</h2>
                    <h4 className="tracking-wider opacity-90"> - Full Stack Web Developer</h4>
                    <h5 className="lg:w-7/12 w-11/12 mt-5 font-normal text-base opacity-75">I build pixel-perfect, engaging, and accessible digital experiences.</h5>

                    <div className="flex md:mt-14 mt-10 gap-8 text-neutral-400">
                        <div className="flex gap-4"> <Link target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2" className="group">
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
                <div className="space-y-5 text-justify md:text-left text-lg font-light  leading-relaxed opacity-75 ">
                    <p className="">As a full stack web developer, I bring creativity, innovation, and meticulous attention to detail to every project. With expertise in both front-end and back-end technologies, I specialize in crafting seamless digital experiences from start to finish.</p>

                    <p className=""> I've meticulously crafted every aspect of this portfolio site, infusing it with my unique design sensibilities and innovative ideas. This site not only showcases my skills but also serves as a testament to my creativity and ability to transform concepts into compelling realities.</p>

                    <p>When I'm not on the computer, I love spending time with family and pets. Gardening is my passion; I enjoy growing new and interesting plants, learning about their growth, and marveling at their beauty. It's a soothing hobby that keeps me connected to the natural world's wonders.</p>

                    <p className="md:pb-5 pb-0"> - The links below offer an overview of my skills and resume.</p>
                    <div className="flex md:inline md:space-x-10 md:justify-center justify-start space-x-20  text-sm mx-3">
                        <Link href="/#Expertise" className=" border-b-2 border-portfolio-cyan rounded-md py-2 px-2">My Skill</Link>
                        <Link href="/resume" className=" border-b-2 border-portfolio-cyan rounded-md py-2 px-2">Resume</Link>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-10 lg:h-[600px] lg:gap-0 gap-3">
                <div className="text-[15px] ">
                    <h2 className="md:text-2xl text-lg">Here's a bit About Me</h2>
                    <ul className="opacity-75 ml-0 leading-7">
                        <li>- I'm always learning and improving.</li>
                        <li>- My perspective on websites has changed a lot.</li>
                        <li>- I make myself available for work 24/7 and prioritize my job.</li>
                    </ul>
                </div>
                <div className="flex justify-end flex-col text-[15px]">
                    <h2 className="md:text-2xl text-lg">Here's a More About Me</h2>
                    <ul className="opacity-75 ml-0 leading-7">
                        <li> - I'm 22 years old.</li>
                        <li> - I have over <b className="opacity-1000"> 1.6 years of experience </b>in full-stack development.</li>
                        <li> - I recently completed my Bachelor's in <i>Information Technology Engineering</i> with a CGPA of <b>8.56</b> in 2023.</li>
                        <li> - I am currently working at <b>Aspire SoftServ pvt ltd.</b> in Ahmedabad.</li>
                        <li> - I'm currently working on this project <IconArrowRight className="inline w-4" /> <Link target="_blank" href="https://qa.liquidox.com" className="underline">qa.liquidox.com</Link>.</li>
                        <li> - we have use these technologies Next.js, GraphQL, Strapi, Postman, TypeScript, and Tailwind CSS.</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}
