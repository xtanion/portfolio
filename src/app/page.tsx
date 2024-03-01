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
        <main className="flex min-h-screen flex-col items-center justify-center text-slate-400 font-sans" ref={heroRef}>
            <Navbar />
            <Universe />
            <div className="container mx-auto w-full">
                <HeroSection />
            </div>

        </main>
    );
}
