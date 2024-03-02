import React from "react";
import { motion } from "framer-motion";
import ProfileGltf from "./ProfileGltf";

const HeroSection = () => {
    return (
        <section className="mr-0 ml-0 grid grid-cols-[max-content_max-content_1fr_max-content_max-content] grid-rows-[1fr_max-content_1fr] justify-between flex-1 content-center z-10">
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="border-[0.5px] backdrop-blur-sm p-12 border-[#ffffff40] col-start-2 row-start-2">
                <p className="text-teal-300 font-mono max-w-2xl">hi, my name is</p>
                <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-6xl font-bold max-w-2xl">Shivam Anand.</h1>
                <h1 className="text-slate-300 mb-4 text-4xl sm:text-2xl lg:text-6xl font-bold max-w-2xl">BackendDev / <br></br>Graphics programmer</h1>
                <p className="text-white py-5 font-sans max-w-xl text-base">
                    I&apos;m an engineering student at IIT Roorkee who&apos;s spent the better part of his college life digging into game development, graphics programming, information security and web technologies. I&apos;m looking for employment oppurtunities in these domains.
                </p>
                <div >
                    <button className="bg-transparent border border-teal-300 font-mono text-teal-300 px-4 py-2 transition-colors duration-200 hover:bg-teal-400 hover:text-white hover:border-teal-400">
                        check out my blogs!
                    </button>
                </div>
            </motion.div>
            <div className="left-divider h-[1px] w-[7.5rem] bg-white/30 col-start-1 row-start-2 mt-auto mb-auto hidden lg:block"></div>
            <div className="btm-divider h-full w-[1px] bg-white/30 col-start-2 row-start-3 ml-auto mr-auto hidden lg:block "></div>
            <div className="mid-divider h-[1px] w-auto bg-transparent col-start-3 row-start-2 mt-auto mb-auto hidden xl:block"></div>
            <div className="rgt-divider h-[1px] w-[7.5rem] bg-transparent col-start-5 row-start-2 mt-auto mb-auto hidden xl:block"></div>

        </section>
    );
};

export default HeroSection;