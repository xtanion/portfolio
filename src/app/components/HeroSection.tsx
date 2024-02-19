import React from "react";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-start justify-center min-h-lvh mx-auto max-w-max">
            <p className="text-teal-400 font-mono max-w-2xl">hi, my name is</p>
            <h1 className="text-slate-100 mb-4 text-4xl sm:text-2xl lg:text-6xl font-black max-w-2xl">Shivam Anand.</h1>
            <h1 className="text-slate-300 mb-4 text-4xl sm:text-2xl lg:text-6xl font-bold max-w-2xl">BackendDev / <br></br>Graphics programmer</h1>
            <p className="text-slate-300 py-5 font-sans max-w-xl text-sm md:text-base xl:text-md">
                I’m an engineering student at IIT Roorkee who's spent the better part of his college life digging into game development, graphics programming, information security and web technologies. I'm looking for employment oppurtunities in these domains.
            </p>
            <div>
                <button className="bg-transparent border border-teal-400 font-mono text-teal-400 px-4 py-2 transition-colors duration-200 hover:bg-teal-400 hover:text-white hover:border-teal-400">
                    Check out my blogs!
                </button>
            </div>

        </section>
    );
};

export default HeroSection;