import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IconBoxAlignRightFilled, IconGitBranch, IconDatabase, IconBrandGraphql, IconBrandGoogleAnalytics, IconBrandCss3, IconBrandNextjs, IconBrandNodejs } from "@tabler/icons-react";
import Image from "next/image";
import html from "../../../public/html.png"
import css from "../../../public/css-logo.png"
import js from "../../../public/js.png"
import next from "../../../public/nextjs.png"
import react from "../../../public/react.png"
import node from "../../../public/node js.png"
import express from "../../../public/express.png"
import shadcn from "../../../public/shadcn.png"
import taiwind from "../../../public/taiwind.png"
import material from "../../../public/material_ui.png"
import acerternity from "../../../public/acerternity.png"
import graphQl from "../../../public/graphQl.png"
import sequelize from "../../../public/sequelize.png"
import mongodb from "../../../public/mongodb.png"
import postgress from "../../../public/postgress.png"
import git from "../../../public/git.png"
import github from "../../../public/github_contect.png"
import docker from "../../../public/docker.png"
import strapi from "../../../public/stapiVector.png"
import typescript from "../../../public/typescript.png"
import postman from "../../../public/postman.png"
export function SkillSetGridDemo() {
    return (
        <>
            <h2 className="text-center text-2xl tracking-[6px] text-white relative mb-5" id="Expertise">MY SKILLS </h2>
            <BentoGrid className="max-w-5xl mx-auto">


                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </>
    );
}
const items = [
    {
        title: "Web Dev Trio",
        description: "The web is built on the powerful trio of HTML, CSS, and JavaScript.Together, they  transform plain text into dynamic and engaging websites.",
        header: (
            <div className="h-full w-full mx-auto flex flex-row items-center justify-around border-b-2 rounded-xl">
                <div className="text-center space-y-2">
                    <Image src={html} alt="HTML" className="delay-1000 lg:w-20 w-16 md:w-14" />
                    <p className="text-xs">HTML</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={css} alt="CSS" className="delay-100 lg:w-20 w-16 md:w-14" />
                    <p className="text-xs">CSS</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={js} alt="JavaScript" className="delay-300 lg:w-20 w-16 md:w-14" />
                    <p className="text-xs">JavaScript</p>
                </div>
            </div>

        ),
        icon: <IconBrandGoogleAnalytics className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Front-end Frameworks",
        description: "Next.js and React are powerful duo helps developers to create fast, scalable, and SEO-friendly web applications.",
        header: (
            <div className="h-full w-full flex flex-row items-center justify-around border-b-2 rounded-xl">
                <div className="text-center space-y-2">
                    <Image src={next} alt="Next.js" className="delay-200 invert lg:w-16 w-16 md:w-14" />
                    <p className="text-xs">Next.js</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={react} alt="React" className="delay-100 lg:w-16 w-16 md:w-14 hover:animate-spin" />
                    <p className="text-xs">React</p>
                </div>
            </div>
        ),
        icon: <IconBrandNextjs className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Backend Frameworks",
        description: "Node.js unlocks the power of JavaScript for server-side development. Express.js acts as a powerful toolkit on top of Node.js..",
        header: (
            <div className="h-full w-full flex flex-row items-center justify-around rounded-xl border-b-2">
                <div className="text-center space-y-2">
                    <Image src={node} alt="Node.js" className="delay-1000 lg:w-16 w-16 md:w-14" />
                    <p className="text-xs">Node.js</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={express} alt="Express" className="delay-100 lg:w-16 invert w-16 md:w-14" />
                    <p className="text-xs">Express</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={strapi} alt="Strapi" className="delay-300 lg:w-18 w-14 md:w-12" />
                    <p className="text-xs">Strapi</p>
                </div>
            </div>

        ),
        icon: <IconBrandNodejs className="h-4 w-4 text-neutral-500 dark:text-white" />
        ,
    },
    {
        title: "Css (UI) Frameworks",
        description:
            "Tailwind CSS, Shadcn UI, Material UI, and Acertitude UI are offers pre-built components or utility classes for styling and functionality, allowing developers to focus on the unique features of their web application",
        header: (
            <div className="h-full md:w-full flex flex-row items-center lg:justify-around justify-between border-b-2 rounded-xl">
                <div className="text-center space-y-2">
                    <Image src={taiwind} alt="Tailwind CSS" className="delay-100 lg:w-18 md:w-14 w-10" />
                    <p className="text-xs">Tailwind CSS</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={shadcn} alt="Shadow CSS" className="delay-200 lg:w-18 invert md:w-14 w-10" />
                    <p className="text-xs">Shadcn UI</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={material} alt="Material-UI" className="delay-300 lg:w-18 md:w-14 w-10" />
                    <p className="text-xs">Material UI</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={acerternity} alt="Acerternity" className="delay-300 lg:w-18 invert md:w-14 w-10" />
                    <p className="text-xs">Acerternity</p>
                </div>
            </div>

        ),
        icon: <IconBrandCss3 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Empowering APIs",
        description: "GraphQL: The API interface clients love - request specific data.Sequelize: The backend champion - handles database interactions seamlessly.",
        header: (
            <div className="h-full w-full flex flex-row items-center justify-around border-b-2 rounded-xl">
                <div className="text-center space-y-2">
                    <Image src={graphQl} alt="GraphQL" className="delay-1000 lg:w-16 w-20 md:w-14 hover:animate-spin" />
                    <p className="text-xs">GraphQL</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={sequelize} alt="Sequelize" className="delay-100 lg:w-16 w-20 md:w-14" />
                    <p className="text-xs">Sequelize</p>
                </div>
            </div>

        ),
        icon: <IconBrandGraphql className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Database Technologies",
        description: "MongoDB and PostgreSQL are both used for storing data, chosen based on our data structure, both databases have their own set of strengths and weaknesses.",
        header: (<div className="h-full w-full flex flex-row items-center justify-around border-b-2 rounded-xl">
            <div className="text-center space-y-2">
                <Image src={mongodb} alt="MongoDB" className="delay-1000 lg:w-16 w-20 md:w-20" />
                <p className="text-xs">MongoDB</p>
            </div>
            <div className="text-center space-y-2">
                <Image src={postgress} alt="PostgreSQL" className="delay-100 lg:w-16 w-20 md:w-14" />
                <p className="text-xs">PostgreSQL</p>
            </div>
        </div>
        ),
        icon: <IconDatabase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Devops Essential Tools",
        description: "Git and GitHub for version control, Docker for seamless deployment.This are tools required for development",
        header: (

            <div className="h-full w-full flex flex-row items-center justify-around rounded-xl border-b-2">
                <div className="text-center space-y-2">
                    <Image src={git} alt="Git" className="delay-1000 lg:w-16 w-16 md:w-14" />
                    <p className="text-xs">Git</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={github} alt="GitHub" className="delay-100 lg:w-14 w-16 md:w-12" />
                    <p className="text-xs">GitHub</p>
                </div>
                <div className="text-center space-y-2">
                    <Image src={docker} alt="Docker" className="delay-300 lg:w-18 w-20 md:w-14" />
                    <p className="text-xs">Docker</p>
                </div>
            </div>
        ),
        icon: <IconGitBranch className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        title: "Key Frameworks",
        description: "Essential frameworks pivotal to our project development, providing robust structures and efficient solutions",
        header: (
            <div className="h-full w-full flex flex-row items-center justify-around border-b-2 rounded-xl">
            <div className="text-center space-y-2">
                <Image src={typescript} alt="TypeScript" className="delay-200 lg:w-16 w-16 md:w-14" />
                <p className="text-xs">TypeScript</p>
            </div>
            <div className="text-center space-y-2">
                <Image src={postman} alt="Postman" className="lg:w-16 w-16 md:w-14 hover:rotate-[55deg] transition-all duration-500 delay-150" />
                <p className="text-xs">Postman</p>
            </div>
        </div>
        
        ),
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
];
