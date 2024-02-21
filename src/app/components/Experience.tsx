"use client";
import React, { ReactHTMLElement, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { animate, motion } from "framer-motion";

interface tabData {
    title: string,
    id: string,
    content: React.JSX.Element
};

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

const CustomItem: React.FC<any> = ({ data }) => {
    return (
        <li className="my-2 relative shrink-0">
            <svg className="w-[16px] h-[16px] stroke-teal-300 absolute left-0" data-slot="icon" fill="none" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p className="pl-6 text-sm md:text-base xl:text-base text-slate-300">{data}</p>
        </li>
    )
};

const TAB_DATA: Array<tabData> = [
    {
        title: "gsoc",
        id: "gsoc",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-lg">Google Summer of Code</span>
                <span className="text-teal-500 font-bold text-lg"> @ FURY</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">Summer 2022</p>
                <ul className="text-slate-400 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                    <CustomItem data="A library for XR interaction with classical desktop compositors on Linux" />
                    <CustomItem data="Added support for 3D model rendering from glTF format allowing the users to load custom environment scenes along with their virtual workspace in VR." />
                    <CustomItem data="Added the basic 3D rendering infrastructure consisting of basic materials, scene trees, mesh loading, phong shading" />
                </ul>

            </div>
        )
    },
    {
        title: "hcx",
        id: "hcx",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-lg">Software Engineer Intern</span>
                <span className="text-teal-500 font-bold text-lg"> @ HCX</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">Summer 2023</p>
                <ul className="text-slate-400 list-outside list-image-[url(/arrow.svg)] marker:text-2xl py-2 max-w-md">
                    <CustomItem data="A library for XR interaction with classical desktop compositors on Linux" />
                    <CustomItem data="Added support for 3D model rendering from glTF format allowing the users to load custom environment scenes along with their virtual workspace in VR." />
                </ul>

            </div>
        )
    },
    {
        title: "acm",
        id: "acm",
        content: (
            <div className="p-4 rounded-sm" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <span className="text-slate-200 font-bold text-lg">Software Developer</span>
                <span className="text-teal-500 font-bold text-lg"> @ ACM IITR</span>

                <p className="text-slate-500 font-mono font-thin text-sm my-1">March 2022 - Present</p>
                <ul className="text-slate-400 list-outside list-image-right marker:text-2xl py-2 max-w-md">
                    <CustomItem data="A library for XR interaction with classical desktop compositors on Linux" />
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
        <section className="mt-20 max-w-[850px] min-h-[700px] mx-auto text-sm md:text-base xl:text-md" id="experience">
            <div className="md:grid md:grid-cols-2 gap-4 items-center xl:gap-8 sm:py-16 ">
                <div className="mt-6 md:mt-0 text-justify flex flex-col h-full">
                    <div className="relative flex py-5 items-center">
                        <span className="text-xl font-mono text-teal-400">02. </span>
                        <span className="flex-shrink mx-4 text-xl font-bold text-slate-200 text-wrap min-w-max">Experiences gained</span>
                        {/* <div className="flex-grow border-t border-slate-600 mb-4"></div> */}
                        <hr className="h-px w-full my-8 bg-slate-600/60 border-0"></hr>
                    </div>
                    <div className="flex flex-col border-double border-l-2 border-slate-500/20 text-slate-500">
                        <TabButton selectTab={() => handleTabChange("hcx")} active={tab === "hcx"}>HCX API</TabButton>
                        <TabButton selectTab={() => handleTabChange("gsoc")} active={tab === "gsoc"}>Python Software Foundation</TabButton>
                        <TabButton selectTab={() => handleTabChange("acm")} active={tab === "acm"}>ACM IITR</TabButton>
                    </div>
                </div>
                <div id="myTabContent" className="md:mt-20 sm:mt-10">
                    <motion.div
                        variants={fadeUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}
                        className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Experience;