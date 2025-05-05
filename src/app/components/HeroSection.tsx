import React from "react";
import { motion } from "framer-motion";
import ProfileGltf from "./ProfileGltf";

const HeroSection = () => {
    return (
        <section className="mr-0 ml-0 w-svw min-h-svh flex flex-col items-center  md:grid md:grid-cols-[max-content_max-content_1fr_max-content_max-content] md:grid-rows-[1fr_max-content_1fr] justify-between flex-1 content-center z-10" id="about">
            <div className="md:border-[0.5px] bg-black/60 md:bg-transparent md:backdrop-blur-md md:p-12 p-8 border-[#ffffff40] md:col-start-2 md:row-start-2 md:my-0 my-auto">
                <p className="text-teal-300 mb-2 font-mono max-w-2xl">Hi, my name is</p>
                <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-6xl font-bold max-w-2xl">Shivam Anand.</h1>
                <h1 className="text-slate-300 mb-4 text-4xl sm:text-2xl lg:text-4xl font-bold max-w-2xl">Software Developer</h1>
                <p className="text-white py-5 font-sans max-w-xl md:text-base text-sm">
                  A backend engineer who loves building fast, scalable, and real-time systems. In my free time, I mix tech with a bit of art and fun, whether it&apos;s generative visuals, AR experiments, open source contributions, or a side project.
                </p>
                <div >
                    <button className="bg-transparent border border-teal-300 font-mono text-teal-300 px-4 py-2 transition-colors duration-200 hover:bg-teal-300 hover:text-teal-950 hover:border--400">
                        check out my blogs!
                    </button>
                </div>
            </div>
            <div className="left-divider h-[1px] w-[7.5rem] bg-white/30 col-start-1 row-start-2 mt-auto mb-auto hidden lg:block"></div>
            <div className="btm-divider h-auto w-[1px] bg-white/30 col-start-2 row-start-3 ml-auto mr-auto hidden lg:block "></div>
            <div className="mid-divider h-[1px] w-auto bg-transparent col-start-3 row-start-2 mt-auto mb-auto hidden xl:block"></div>
            <div className="rgt-divider h-[1px] w-[7.5rem] bg-transparent col-start-5 row-start-2 mt-auto mb-auto hidden xl:block"></div>

        </section>
    );
};

export default HeroSection;
