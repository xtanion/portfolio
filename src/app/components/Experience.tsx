"use client";
import React, { ReactHTMLElement, useState, useTransition } from "react";
import { Arrow } from "./Arrow";
import TabButton from "./TabButton";

interface tabData {
    title: string,
    id: string,
    content: React.JSX.Element
};

const TAB_DATA: Array<tabData> = [
    {
        title: "gsoc",
        id: "gsoc",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-xl">Google Summer of Code</span>
                <span className="text-teal-500 font-bold text-xl"> @ FURY</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">Summer 2022</p>
                <ul className="text-slate-400 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                    <li className="my-2">A library for XR interaction with classical desktop compositors on Linux</li>
                    <li className="my-2">Added support for 3D model rendering from glTF format allowing the users to load custom environment scenes along with their virtual workspace in VR.</li>
                    <li className="my-2">Added the basic 3D rendering infrastructure consisting of basic materials, scene trees, mesh loading, phong shading</li>
                </ul>

            </div>
        )
    },
    {
        title: "hcx",
        id: "hcx",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-xl">Software Engineer Intern</span>
                <span className="text-teal-500 font-bold text-xl"> @ HCX</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">Summer 2023</p>
                <ul className="text-slate-400 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                    <li className="my-2">A library for XR interaction with classical desktop compositors on Linux</li>
                    <li className="my-2">Added support for 3D model rendering from glTF format allowing the users to load custom environment scenes along with their virtual workspace in VR.</li>
                    <li className="my-2">Added the basic 3D rendering infrastructure consisting of basic materials, scene trees, mesh loading, phong shading</li>
                </ul>

            </div>
        )
    },
    {
        title: "acm",
        id: "acm",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-xl">Software Developer</span>
                <span className="text-teal-500 font-bold text-xl"> @ ACM IITR</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">March 2022 - Present</p>
                <ul className="text-slate-400 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                    <li className="my-2">A library for XR interaction with classical desktop compositors on Linux</li>
                </ul>

            </div>
        )
    }
]

const Experience = () => {
    const [tab, setTab] = useState("gsoc");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className="mt-20 max-w-[800px] mx-auto text-sm md:text-base xl:text-md" id="experience">
            <div className="md:grid md:grid-cols-2 gap-4 items-center xl:gap-8 sm:py-16 ">
                <div className="mt-6 md:mt-0 text-justify flex flex-col h-full">
                    <div className="relative flex py-5 items-center">
                        <span className="text-xl font-mono text-teal-500">02. </span>
                        <span className="flex-shrink mx-4 text-xl font-semibold text-gray-300 text-wrap min-w-max">Experiences gained</span>
                        {/* <div className="flex-grow border-t border-slate-600 mb-4"></div> */}
                        <hr className="h-px w-full my-8 bg-slate-600/60 border-0"></hr>
                    </div>
                    <div className="flex flex-col border-double border-l-2 border-slate-500/20">
                        <TabButton selectTab={() => handleTabChange("hcx")} active={tab === "hcx"}>HCX API</TabButton>
                        <TabButton selectTab={() => handleTabChange("gsoc")} active={tab === "gsoc"}>Python Software Foundation</TabButton>
                        <TabButton selectTab={() => handleTabChange("acm")} active={tab === "acm"}>ACM IITR</TabButton>
                    </div>
                </div>
                <div id="myTabContent" className="md:mt-20 sm:mt-10">
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;