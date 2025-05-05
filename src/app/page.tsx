"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import useMobileDetect from "./CheckDevice";
import Navbar from "./components/Navbar";
import Universe from "./components/universe";
import Footer from "./components/Footer";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import ProjectComponent from "./components/ProjectComponent";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import ScrollTracker from "./components/ScrollTracker";

const Camera = () => {
    const { camera } = useThree()
    camera.rotation.set(0, 0, THREE.MathUtils.degToRad(45))
    camera.lookAt(-4, 0, 0)
    return (
        <></>
    )
}

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const mobile = useMobileDetect().isMobile();
    const [scrollOffset, setScrollOffset] = useState(0);

    return (
        <main className="text-slate-200 font-sans leading-6 tracking-wider top-0 left-0 w-svw h-svh" ref={heroRef}>
            <Navbar scrollOffset={scrollOffset} />
            <Canvas className='galaxy max-w-full'
                camera={{
                    fov: mobile ? 60 : 75,
                    aspect: mobile ? 0.7 : 1.65,
                    near: 0.1,
                    far: 100,
                    position: mobile ? [0, 0, 0] : [-40, 4, 0]
                }}>
                <ScrollControls pages={5} damping={0.05}>
                    <Camera />
                    <ScrollTracker onScroll={setScrollOffset} />
                    <Universe />
                    <Scroll html>
                        <HeroSection />
                        <Experience />
                        <Projects />
                        <Contacts />
                    </Scroll>
                </ScrollControls>

                {/* <Footer /> */}
            </Canvas>

        </main>
    );
}
