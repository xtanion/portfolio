import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="container mt-24 mx-auto px-14 py-4 md:px-20">
                <HeroSection />
                <AboutMe />
                <Experience />
            </div>
        </main>
    );
}
