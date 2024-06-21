"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import applesso from "../../../public/apple sso.png"
import bloggImage from "../../../public/blogg_app.png"
import dockerImage from "../../../public/docker_Image.png"
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


export function ProjectSectionDemo() {
    return (
        <TracingBeam className="px-6 mt-14 " >
            <h2 className="text-center text-2xl tracking-[6px] text-white relative " id="projects">MY PROJECTS </h2>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative" >
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl text-center md:text-start font-semibold mb-4">
                            {item.title}
                        </p>

                        <div className="md:text-sm text-[12px] ml-2 prose prose-sm dark:prose-invert ">
                            <div className="row-span-3 col-start-3 row-start-2">
                                <motion.div className={cn("text-center md:h-60  w-full  sticky top-10 overflow-scroll")}>
                                    {item.content ?? null}
                                </motion.div>
                            </div>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "Apple Sso with NextAuth",
        description: (
            <>
                <p className="text-sm leading-6 text-justify text-white/90">
                    Recently Apple are change their configuration with new setting up and as usual their privacy🔏  too and also  their are not perfectly mention that how we configure our web app with Sign in with apple so in this document we Learn and see how to embed this feature with Nextauth in <Link className="underline font-semibold" href="https://docs.google.com/document/d/1Y5jWDMWTkRPOSrPVS8UnkjZ-TmgrUOxyqHBz95CHx_Q/edit?usp=sharing" target="_blank" >  Next.js <LiaExternalLinkAltSolid className="inline text-lg" /></Link>
                </p>
                <p className="mt-5 text-sm leading-6 text-justify text-white/90 md:block hidden ">
                    Next.js is an excellent choice for building full-stack React applications that require fast performance, SEO optimization, and a streamlined development experience. It's particularly well-suited for content-heavy websites and applications that prioritize initial page load speed.
                </p>
                <p className="mt-5 text-sm leading-6 text-justify text-white/90 md:block hidden">
                    Basically next auth is by default providers attached with next js or we can also say that its default feature or library which is able to add multiple sso like sign in Google, sign in with github,  sign in with facebook and so many, yes sign in with apple is one of them .Using NextAuth.js for Apple Sign-In with SSO in your Next.js application can significantly improve the user experience, security, and development process. It streamlines the integration,
                    provides a robust and secure authentication system, and gives you flexibility to customize it to your needs
                </p>
            </>
        ),
        badge: "Next Js", content: (<DirectionAwareHover imageUrl={applesso} >
            <p className="font-bold text-xl">Apple Sso</p>
            <p className="font-normal text-sm">Nextjs / NextAuth</p>
        </DirectionAwareHover>
        ),
    },
    {
        title: "Blog Site",
        description: (
            <>
                <p className="text-sm leading-6 text-justify text-white/90">
                    My project blog app that includes CRUD operations
                    and a user-friendly sign-in/sign-up process. It
                    leverages the MERN stack, allowing users to
                    seamlessly create, read, update, and delete blog posts
                    with image . The React.js frontend facilitates an
                    intuitive sign-up process, securely storing user data
                    in MongoDB through the Node.js backend. The app
                    ensures a smooth user experience, combining robust
                    authentication with versatile content management.
                </p>
                <p className="text-sm leading-6 text-justify text-white/90 mt-5">
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "React js",
        content: (<DirectionAwareHover imageUrl={bloggImage} title="Blog_site">
            <p className="font-bold text-xl">CRUD Op. (Sort + search + Filter  )</p>
            <p className="font-normal text-sm">React / Node / MongoDb atlas</p>
        </DirectionAwareHover>
        )
    },
    {
        title: "Dockerization Your Base Project"
        , description: (
            <>
                <p className="text-sm leading-6 text-justify text-white/90">
                    I've crafted a script for Dockerizing your base project,
                    ensuring compatibility across Windows, macOS, and
                    Linux. By executing the script, Docker will be
                    seamlessly implemented in your base project,
                    following the specified configuration effortlesslywith
                    a simple user input
                </p>
            </>
        ),
        badge: "Shell & Powershell Scripting",
        content: (
            <DirectionAwareHover imageUrl={dockerImage} >
                <p className="font-bold text-xl">Base Project (buid + run)</p>
                <p className="font-normal text-sm">React / Node / Angular</p>
            </DirectionAwareHover>)
    },
];
