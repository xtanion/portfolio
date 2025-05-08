"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import useMobileDetect from "./CheckDevice";
import Navbar from "./components/Navbar";
import Universe from "./components/universe";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import SectionObserver from "./components/SectionObserver";

const Camera = () => {
  const { camera } = useThree();
  camera.rotation.set(0, 0, THREE.MathUtils.degToRad(45));
  camera.lookAt(-4, 0, 0);
  return <></>;
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mobile = useMobileDetect().isMobile();
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <main
      className="text-slate-200 font-sans leading-6 tracking-wider top-0 left-0 w-svw h-svh"
      ref={heroRef}
    >
      <Navbar activeSection={activeSection} />
      <Canvas
        className="galaxy max-w-full"
        camera={{
          fov: mobile ? 60 : 75,
          aspect: mobile ? 0.7 : 1.65,
          near: 0.1,
          far: 100,
          position: mobile ? [0, 0, 0] : [-40, 4, 0],
        }}
      >
        <ScrollControls pages={4} damping={0.05}>
          <Camera />
          <Universe />
          <Scroll html>
            <SectionObserver id="whoami" onVisible={setActiveSection}>
              <HeroSection />
            </SectionObserver>
            <SectionObserver id="experience" onVisible={setActiveSection}>
              <Experience />
            </SectionObserver>
            <SectionObserver id="projects" onVisible={setActiveSection}>
              <Projects />
            </SectionObserver>
            <SectionObserver id="contacts" onVisible={setActiveSection}>
              <Contacts />
            </SectionObserver>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
