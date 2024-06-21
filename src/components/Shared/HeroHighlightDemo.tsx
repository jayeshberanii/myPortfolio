"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo() {
    return (
        <HeroHighlight>
            <motion.h1
                //   initial={{
                //     opacity: 0,
                //     x: 20,
                //   }}
                //   animate={{
                //     opacity: 1,
                //     x: [-30, 0, 0],
                //   }}
                //   transition={{
                //     duration: 2,
                //     ease: [0.4, 0.0, 0.2, 1],
                //   }}
                className="md:text-center text-start md:mb-4 mb-8 w-[500px] mx-auto text-xl tracking-wide font-normal text-neutral-400 lg:block hidden"
            >
                From napkin sketch to flawless website, I speak the language of the web. Any tool, any library, any tech  -
                <Highlight className="text-black">
                    I'm your translator
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
}
