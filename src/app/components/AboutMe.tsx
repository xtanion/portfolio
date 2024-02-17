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
                        <span className="text-xl font-mono text-teal-500">01. </span>
                        <span className="flex-shrink mx-4 text-xl font-semibold text-gray-300 min-w-max">About me</span>
                        <hr className="h-px w-full my-8 bg-slate-600/60 border-0"></hr>
                    </div>
                    <p className="text-slate-400 text-left mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet. Imperdiet nulla malesuada pellentesque elit. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Justo nec ultrices dui sapien eget mi proin sed libero. Pharetra massa massa ultricies mi quis. Tellus in metus vulputate eu. Egestas egestas fringilla phasellus faucibus scelerisque. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.<br></br>
                        <br></br>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <Chips chips={tech} />
                </div>
                <div className="group w-full h-full mt-5 justify-center items-stretch rounded-sm border-l-sky-300">
                    <div className="flex items-center justify-center h-full w-full bottom-10">
                        {/* <img className="w-80 h-80 object-scale-down" src={"/about.jpeg"} alt="" style={imageStyle} /> */}
                        <img src="/profile.jpeg" width={300} height={300} alt="" className="opacity-20 cyan-300/10 group-hover:opacity-80 hover:border-2 hover:border-cyan-300/80 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;