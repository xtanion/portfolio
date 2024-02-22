import React from "react";
import Image from "next/image";
import Chips from "./Chips";
import { animate, motion } from "framer-motion";
import ProfileGltf from "./ProfileGltf";

const imageStyle = {
    borderRadius: '4px',
}

const fadeUpAnimation = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: -100
    },
}
const tech = ["Python", "Java", "JavaScript", "TypeScript", "React", "Node.js", "Redis", "Docker", "Open-gl", "Web-gl", "glsl"];

const AboutMe = () => {
    return (
        <section className="max-w-[850px] mx-auto text-sm md:text-base xl:text-md" id="about">
            <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 xl:gap-16 sm:py-16 ">
                <div
                    className="mt-4 md:mt-0 flex flex-col h-full">

                    <div className="flex py-5 items-center">
                        <span className="text-xl font-mono text-teal-400">01. </span>
                        <span className="flex-shrink mx-4 text-xl font-black text-slate-300 min-w-max">About me</span>
                        <hr className="h-px w-full my-8 bg-slate-600/60 border-0"></hr>
                    </div>
                    <motion.div
                        variants={fadeUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}>
                        <p className="text-slate-400 text-justify mt-4">
                            i sapien eget mi proin sed libero. Pharetra massa massa ultricies mi quis. Tellus in metus vulputate eu. Egestas egestas fringilla phasellus faucibus scelerisque. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.<br></br>
                            <br></br>
                            Here are a few technologies I&apos;ve been working with recently:
                        </p>

                        <Chips chips={tech} />
                    </motion.div>
                </div>
                <div className="gltf w-full h-full">
                    <ProfileGltf />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;