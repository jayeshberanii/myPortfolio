'use client'
import React from "react";
import Link from "next/link";
import { Separator } from "../ui/Separator";
import { IconAward } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconBrandGithub, IconBrandLinkedin, IconMapPin, IconPhone, IconMail, IconSchool, IconCode, IconLink, IconDeviceLaptop } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";


export function ResumeDemo() {
    const router = useRouter()
    const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default button behavior
        console.log('Download button clicked');
        try {
            const response = await fetch('/miten_resume.pdf');
            console.log('File fetched successfully');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'miten_resume.pdf');
            router.push('/resume')
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };
    return (
        <div className="md:w-10/12 w-11/12 mx-auto md:tracking-wide tracking-normal opacity-90 pb-1">
            <span className=" cursor-pointer flex justify-between" onClick={() => router.replace('/')}>
                <IconArrowLeft />
                <button onClick={handleDownload} className="text-sm mx-6 pb-2 border-b-2 border-portfolio-cyan rounded-md"><IconDownload className="inline mr-2 mb-1" size={20} />Download PDF</button>
            </span>
            <div className="md:p-3 p-2 border rounded-md my-10 overflow-y-scroll">
                <h1 className="sm:text-center text-center md:text-3xl text-xl font-normal mt-5 cursor-pointer" onClick={() => router.replace('/about')}>Patel Mitenkumar Mukeshbhai</h1>
                <div className="sm:flex block space-y-4 sm:space-y-0 space-x-0 sm:space-x-2 md:space-x-4 cursor-pointer text-xs md:text-sm md:mt-20 mt-10 md:mb-2 mb-5 justify-center items-center ">
                    <Link href="https://maps.app.goo.gl/hxd1M2zPHjEN8g2p9" target="_blank" className="block">Navsari <IconMapPin className="inline mb-0.5" size={16} /></Link >
                    <Separator orientation="vertical" className="hidden lg:flex" />
                    <Link className="block" href="tel:+91 9978956468" >+91 9978956468 <IconPhone className="inline mb-0.5" size={16} /></Link>
                    <Separator orientation="vertical" className="hidden lg:flex" />
                    <Link className="block" href="mailto:mitenpate1234@gmail.com" >mitenpate1234@gmail.com <IconMail className="inline" size={16} /></Link>
                    <Separator orientation="vertical" className="hidden lg:flex" />
                    <Link className="block" target="_blank" href="https://github.com/Miten-Kumar"><span className="mr-1 inline-flex">Github</span><IconBrandGithub className="inline" size={18} /></Link>
                    <Separator orientation="vertical" className="hidden lg:flex" />
                    <Link className="block" target="_blank" href="https://www.linkedin.com/in/miten-patel-8939571b2/"><span className="mr-1 inline-flex">LinkedIn</span><IconBrandLinkedin className="inline" size={20} /></Link>
                </div>
                <hr className="mb-10" />
                <h5>Educations <IconSchool className="inline mb-1" size={18} /> </h5>
                <div className="flex mt-4 text-xs md:text-sm justify-between items-start">
                    <h6 className="inline">Shantilal Shah Engineering College, Bhavnagar <span className="block mt-1 md:hidden ">(june 2019 - May 2023 )</span></h6>
                    <span className="md:inline hidden ">june 2019 - May 2023 </span>
                </div>
                <div className="flex mt-2 justify-between items-start text-xs md:text-sm">
                    <h6 className="inline">Bachelor Of Engineering, Information Technology <span className="block mt-1 md:hidden ">(CGPA - 8.56/10 )</span></h6>
                    <i className="md:inline hidden">CGPA - 8.56/10</i>
                </div>

                <hr className="my-10 w-11/12  " />

                <h5>Experience <IconCode className="inline " size={18} /><span className="block mt-1 text-xs md:text-sm ">  ( 1 year 4 Month )</span> </h5>
                <div className="md:space-y-10 space-y-4 mt-10 text-xs md:text-sm">
                    <div className="flex my-14  flex-col">
                        <div className="md:flex grid grid-cols-1 justify-between  items-start ">
                            <Link href="https://drive.google.com/file/d/1TQBWtBP44BjmHE2JnLAk6gIxzeYOdPT9/view" target="_blank" className="inline"> {`1) Internship - Twowits internship`}  <IconLink className="inline mb-1" size={18} /> <span className="block mt-1 mx-5">  ( 1 Month )</span> </Link>
                            <div className="inline mt-5 ml-4 md:mr-0">dec 2021 - jan 2021 </div>
                        </div>
                        <ul className="md:mr-4 space-y-3 md:mt-8 mt-4 leading-5">
                            <li> - I have proficiency in CSS for page styling, designing, and integrating dynamic data.</li>
                            <li> - I completed a one-month internship in web design during the lockdown period.</li>
                        </ul>
                    </div>
                    <div className="flex my-14  flex-col">
                        <div className="md:flex grid grid-cols-1 justify-between  items-start ">
                            <Link className="inline" href='#'> {`2) Internship - Aspire SoftServ Pvt Ltd. `}  <IconLink className="inline mb-1" size={18} /> <span className="block mt-1  mx-5">  ( 6 Month )</span> </Link>
                            <div className="inline mt-5 ml-4 md:mr-0">Feb 2023 - Aug 2023 </div>
                        </div>
                        <ul className="mr-4 md:mt-8 mt-4 space-y-3 leading-5">
                            <li> - I have worked extensively on a blog application using React, Node.js, Express, and MongoDB.</li>
                            <li> - I'm experienced in UI design, API calling, fetching data, CRUD operations with MongoDB, and authentication flow implementation.</li>
                        </ul>
                    </div>
                    <div className="flex my-14 flex-col">
                        <div className="md:flex grid grid-cols-1 justify-between items-start text-xs md:text-sm">
                            <Link className="inline" href='https://qa.liquidox.com/' target="_blank">
                                {`3) FinTech Website - Aspire SoftServ Pvt Ltd.`}
                                <IconLink className="inline mb-1" size={18} />
                                <span className="block mt-1 md:text-sm text-xs mx-5"> ( 1 year )</span>
                            </Link>
                            <div className="inline mt-5 ml-4 md:mr-0">
                                After May 2023
                                <div className="h-1 w-1 rounded-full bg-white mr-0.5 animate-bounce transition-all delay-1000 inline-flex" />
                                <div className="h-1 w-1 rounded-full bg-white animate-bounce transition-all delay-100 inline-flex mr-0.5" />
                                <div className="h-1 w-1 rounded-full bg-white animate-bounce delay-300 transition-all inline-flex mr-0.5" />
                            </div>
                        </div>
                        <ul className="mr-4 md:mt-8 mt-4 space-y-3 leading-5">
                            <li> - I'm currently working on a FinTech website using Next.js.</li>
                            <li> - Technologies I'm using include Next.js, GraphQL, TypeScript, and Tailwind CSS.</li>
                            <li> - My role involves frontend development, third-party integrations, API calling, SSR, GraphQL handling, CMS management, and design implementation.</li>
                            <li> - I've contributed to third-party integrations for KYC and payment gateways.</li>
                            <li> - I've also contributed to implementing authentication flows including Apple and Google SSO.</li>
                        </ul>
                    </div>

                </div>

                <hr className="my-10 w-11/12  " />
                <h5>Projects <IconDeviceLaptop className="inline " size={18} /></h5>
                <div className="flex flex-row flex-wrap text-xs md:text-sm">
                    <div className="flex space-y-10 mt-10 mb-0 flex-col">
                        <span className="inline" > {`1) Apple Sso with NextAuth `}</span>
                        <ul className="mr-4 mt-8 space-y-3">
                            <li> - Configure Apple Developer Accounts</li>
                            <li> - Get & Set up the key file</li>
                            <li> - Set up Next.js App with NextAuth</li>
                            <li> - Connect & get response</li>
                        </ul>
                    </div>
                    <div className="flex space-y-10 mt-10 mb-0 flex-col">
                        <span className="inline" > {`2) Blog app`}</span>
                        <ul className="mr-4 mt-8 space-y-3">
                            <li> - Use MERN technologies</li>
                            <li> - Perform CRUD operations</li>
                            <li> - Utilize Material UI for system design</li>
                            <li> - Add authentication feature</li>
                        </ul>
                    </div>
                    <div className="flex space-y-10 mt-10 mb-0 flex-col">
                        <span className="inline" > {`3) Dockerization Your Base Project`}</span>
                        <ul className="mr-4 mt-8 space-y-3">
                            <li> - script for Node.js, React, or Angular app</li>
                            <li> - Working on Windows, macOS, and Linux</li>
                            <li> - Install and set up Docker if needed </li>
                            <li> - Install and set up Docker Desktop </li>
                            <li> - User input for selecting base image</li>
                            <li> - Handled port mapping </li>
                            <li> - Easy execution with simple user input</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-12 w-11/12  " />

                <h5>Technical Skills <IconAward className="inline " size={18} /></h5>
                <div className="grid lg:grid-cols-4  grid-cols-2 text-xs md:text-sm ">
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline">1) Web Trio</li>

                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- JavaScript</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">2) Front-end frameworks</li>

                        <li>- React</li>
                        <li>- Next</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">3) Back-end frameworks</li>

                        <li>- Node</li>
                        <li>- Express</li>
                        <li>- Strapi</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">4) UI Libraries</li>

                        <li>- Tailwind CSS</li>
                        <li>- Material UI</li>
                        <li>- Shadowcn UI</li>
                        <li>- Acerternity UI</li>
                        <li>- Bootstrap</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">5) ORM's & fetching tech.</li>

                        <li>- Sequelize</li>
                        <li>- GraphQL</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">6) Database technologies</li>

                        <li>- MongoDB</li>
                        <li>- PostgreSQL</li>

                    </ul>
                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">7) DevOps Essential Tools</li>
                        <li>- Git</li>
                        <li>- GitHub</li>
                        <li>- GitLab</li>
                        <li>- Docker</li>
                    </ul>

                    <ul className="flex  md:mt-10 md:mb-0 m-0 p-0  mt-5 flex-col">
                        <li className="inline leading-5">8) Key Tools & Frameworks</li>
                        <li>- Postman</li>
                        <li>- Axios</li>
                        <li>- TypeScript</li>
                        <li>- VS Code</li>
                        <li>- ChatGPT</li>
                        <li>- Phind AI</li>
                        <li>- Gemini AI</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
