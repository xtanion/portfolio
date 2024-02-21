import React from "react";
import ProjectComponent from "./ProjectComponent";
import { animate, motion } from "framer-motion";

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

interface ProjectProps {
    title: string,
    desc: string,
    github: string,
    url: string,
    imgsrc: string,
    right: boolean,
    techs: string[]
}

const projects:Array<ProjectProps> = [
    {
        title: "Project 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        github: "https://github.com/xtanion",
        url: "https://github.com/xtanion",
        imgsrc: "./p1.avif",
        right: false,
        techs: ["Python", "Numpy", "C"]
    },
    {
        title: "Project 2",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        github: "https://github.com/xtanion",
        url: "https://github.com/xtanion",
        imgsrc: "https://placehold.co/854x480",
        right: true,
        techs: ["JavaScript", "React", "Tailwind"]
    },
    {
        title: "Project 3",
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        github: "https://github.com/xtanion",
        url: "https://github.com/xtanion",
        imgsrc: "https://placehold.co/854x480",
        right: false,
        techs: ["C++", "Rust", "Linux", "GNOME"]
    },
];

const Projects = () => {
    return (
        <section className="max-w-[900px] mx-auto my-10 text-sm md:text-base xl:text-md" id="projects">
            <motion.div
                variants={fadeUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="flex py-5 items-center">
                    <span className="text-xl font-mono text-teal-400">03. </span>
                    <span className="flex-shrink mx-4 text-xl font-bold text-gray-200 min-w-max">Some Things I’ve Built</span>
                    <hr className="h-px w-full my-8 bg-slate-600/60 border-0 max-w-40"></hr>
                </motion.div>
                {
                    projects.map((projPromp, index) => (
                        <ProjectComponent key={index} prop={projPromp} />
                    ))
                }
            
        </section>
    );
};

export default Projects;