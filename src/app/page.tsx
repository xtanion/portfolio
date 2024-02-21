"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { useEffect, useRef, useState } from "react";


export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [mouseScroll, setMouseScroll] = useState(0);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = ev;
            const pageScoll = window.pageYOffset;

            heroRef.current.style.setProperty("--x", `${clientX}px`);
            heroRef.current.style.setProperty("--y", `${clientY + pageScoll}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return (
        // <main className="flex min-h-screen flex-col bg-gradient-radial">
        //     <Navbar />

        //         <div className="container mt-24 mx-auto px-14 py-3 md:px-20">
        //             <HeroSection />
        //             <AboutMe />
        //             <Experience />
        //         </div>
        // rgba(13, 148, 136, 0.20)

        // </main>
        <>
            <style jsx>{`
        .hero {
          background-image: radial-gradient(
            800px circle at var(--x, 20px) var(--y, 20px),
            rgba(29, 78, 216, 0.15), transparent 100%
          );
          display: flex;
          justify-content: center;
        }

      `}</style>
            <main className="flex min-h-screen flex-col hero bg-gray-950 items-center justify-center text-slate-400 font-sans" ref={heroRef}>
                <Navbar />

                <div className="container mx-auto w-full px-12 md:px-20">
                    <HeroSection />
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Contacts />
                </div>
                <footer>
                    <a href="https://github.com/xtanion/portfolio">
                        <p className="text-xs text-slate-400">Made using <span className="font-mono text-teal-300">Next.js</span> and <span className="font-mono text-teal-300">tailwind</span>🐧.</p>
                    </a>
                </footer>

            </main>
        </>
    );
}
