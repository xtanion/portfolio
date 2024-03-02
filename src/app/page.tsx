"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Universe from "./universe";
import { useEffect, useRef } from "react";
import useMobileDetect from "./CheckDevice";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const mobile = useMobileDetect().isMobile();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-slate-200 font-sans leading-6 tracking-wider overflow-hidden overflow-x-hidden overflow-y-hidden" ref={heroRef}>
            <Navbar />
            <Universe />
            <div className="flex flex-col flex-1 w-full h-full">
                <HeroSection />
            </div>

            <footer className="w-full grid auto-cols-fr grid-flow-col mb-14 px-[7.5rem]">
                <div className="flex items-center">
                    <a className="order-2 mr-[3.5rem]" rel="noreferrer" target="_blank" href="https://github.com/xtanion">
                        <img src="github.svg" alt="GitHub" className="h-[1.5rem] w-auto" />
                    </a>
                    <span className=" text-[0.63rem] font-normal mr-[3.5rem] order-1">FIND ME</span>
                    <a className="order-3" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/xtanion/">
                        <img src="linkedin.svg" alt="Linkedin" className="h-[1.5rem] w-auto" />
                    </a>
                </div>
                <div className="cursor-magicc"></div>
                <div className=" flex items-center justify-end">
                    <span className="text-[0.63rem] tracking-widest mr-[1rem] uppercase font-medium">Built using</span>
                    <span className="text-h6 uppercase font-bold">Next & THree</span>
                </div>
            </footer>
        </main>
    );
}
