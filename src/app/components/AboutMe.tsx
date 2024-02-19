import React from "react";
import Image from "next/image";
import Chips from "./Chips";

const imageStyle = {
    borderRadius: '4px',
}

const tech = ["Python", "Java", "JavaScript", "TypeScript", "React", "Node.js", "Redis", "Docker", "Open-gl", "Web-gl", "glsl"];

const AboutMe = () => {
    return (
        <section className="max-w-[800px] mx-auto text-sm md:text-base xl:text-md" id="about">
            <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 xl:gap-16 sm:py-16 ">
                <div className="mt-4 md:mt-0 flex flex-col h-full">

                    <div className="flex py-5 items-center">
                        <span className="text-xl font-mono text-teal-400">01. </span>
                        <span className="flex-shrink mx-4 text-xl font-bold text-slate-200 min-w-max">About me</span>
                        <hr className="h-px w-full my-8 bg-slate-600/60 border-0"></hr>
                    </div>
                    <p className="text-slate-300 text-justify mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Imperdiet nulla malesuada pellentesque elit. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo nec ultrices dui sapien eget mi proin sed libero. Pharetra massa massa ultricies mi quis. Tellus in metus vulputate eu. Egestas egestas fringilla phasellus faucibus scelerisque. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.<br></br>
                        <br></br>
                        Here are a few technologies I&apos;ve been working with recently:
                    </p>
                    <Chips chips={tech} />
                </div>
                <div className="group w-full h-full mt-5 items-center justify-center rounded-sm border-l-sky-300">
                    <div className="flex flex-col justify-center h-full w-full bottom-10 grayscale opacity-100 md:opacity-50 xl:opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <img src="./aizawa.png" width={300} alt="" className="rounded-sm w-full" />
                        <img src="./lgtm.png" className="opacity-100 md:opacity-0 xl:opacity-0 group-hover:opacity-90 transition-opacity duration-500 w-full z-10 object-scale-down" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;