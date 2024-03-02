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
        <main className="flex min-h-screen flex-col items-center justify-center text-slate-400 font-sans leading-6 tracking-wider overflow-hidden overflow-x-hidden overflow-y-hidden" ref={heroRef}>
            <Navbar />
            <Universe />
            <div className="flex flex-col flex-1 w-full h-full">
                <HeroSection />
            </div>
        </main>
    );
}
