"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import useMobileDetect from "./CheckDevice";
import Navbar from "./components/Navbar";
import Universe from "./components/universe";
import Footer from "./components/Footer";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";

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

    return (
        <main className="text-slate-200 font-sans leading-6 tracking-wider top-0 left-0 w-svw h-svh" ref={heroRef}>
            <Navbar />
            <Footer />
            <Canvas className='galaxy max-w-full'
                camera={{
                    fov: 75,
                    aspect: 1.65,
                    near: 0.1,
                    far: 100,
                    position: [-4, 4, 0]
                }}>
                {/* <Navbar /> */}
                <ScrollControls pages={5} damping={0.05}>
                    <Camera />
                    <Universe />
                    <Scroll html>
                        <HeroSection />
                        <Experience />
                    </Scroll>
                </ScrollControls>

                {/* <Footer /> */}
            </Canvas>

        </main>
    );
}
