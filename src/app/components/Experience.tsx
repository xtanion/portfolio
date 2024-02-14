"use client";
import React, { useState, useTransition } from "react";
import { Arrow } from "./Arrow";
import TabButton from "./TabButton";

const licon = () => {
    return (
        <svg fill="none" strokeWidth={1.5} stroke="teal-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
};

const Experience = () => {
    const [tab, setTab] = useState("gsoc");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className="mt-20 md:mt-40">
            <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-16 ">
                <div className="mt-6 md:mt-0 text-justify flex flex-col h-full">
                    <div className="relative flex py-5 items-center">
                        <span className="text-2xl font-mono text-teal-500 mb-4">02. </span>
                        <span className="flex-shrink mx-4 text-2xl font-semibold text-gray-200 mb-4 text-wrap line-clamp-1 max-w-40">Experiences gained</span>
                        <div className="flex-grow border-t border-gray-600 mb-4"></div>
                    </div>
                    <div className="flex flex-col border-l-2 border-gray-500/20 rounded-md">
                        <TabButton selectTab={() => handleTabChange("gsoc")} active={tab === "gsoc"}>Python Software Foundation</TabButton>
                        <span className="mr-3 text-gray-500 font-mono hover:text-teal-400 py-4 pl-4 w-full hover:bg-teal-300/10 rounded-sm">HCX API</span>
                        <span className="mr-3 text-gray-500 font-mono hover:text-teal-400 py-4 pl-4 w-full text-start hover:bg-teal-300/10">Python Software Foundation</span>
                        <span className="mr-3 text-gray-500 font-mono hover:text-teal-400 py-4 pl-4 w-full text-start hover:bg-teal-300/10">ACM IITR</span>
                    </div>
                </div>
                <div id="myTabContent" className="md:mt-20 sm:mt-10">
                    <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <span className="text-gray-300 font-bold text-md">Google Summer of Code</span>
                        <span className="text-teal-500 font-bold text-md"> @ FURY</span>
                        
                        <p className="text-gray-500 font-mono font-thin text-sm my-1">Summer 2022</p>
                        <ul className="text-gray-500 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                            <li className="my-2">A library for XR interaction with classical desktop compositors on Linux</li>
                            <li className="my-2">Added support for 3D model rendering from glTF format allowing the users to load custom environment scenes along with their virtual workspace in VR.</li>
                            <li className="my-2">Added the basic 3D rendering infrastructure consisting of basic materials, scene trees, mesh loading, phong shading</li>
                        </ul>
                    
                    </div>
                    <div className="p-4 rounded-sm hidden" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Experience;