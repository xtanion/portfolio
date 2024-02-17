import React from "react";
import ProjectComponent from "./ProjectComponent";
import ProjectComponentR from "./ProjectComponentR";

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
        imgsrc: "https://placehold.co/854x480",
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
        <section className="max-w-[900px] mx-auto my-10 text-sm md:text-base xl:text-md">
            <div className="flex py-5 items-center">
                <span className="text-xl font-mono text-teal-500">03. </span>
                <span className="flex-shrink mx-4 text-xl font-semibold text-gray-300 min-w-max">Some Things I’ve Built</span>
                <hr className="h-px w-full my-8 bg-slate-600/60 border-0 max-w-40"></hr>
            </div>
            {
                projects.map((projPromp) => (
                    <ProjectComponent prop={projPromp}/>
                ))
            }
        </section>
    );
};

export default Projects;