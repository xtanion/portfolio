import React from "react";

const HeroSection = () => {
    return (
        <section className="mt-20">
            <p className="text-teal-400 font-mono">hi, my name is</p>
            <h1 className="text-gray-200 mb-4 text-4xl lg:text-6xl font-bold">Shivam Anand.</h1>
            <h1 className="text-gray-400 mb-4 text-4xl lg:text-6xl font-bold">BackendDev / <br></br>Graphics programmer</h1>
            <p className="text-gray-500 py-5 font-sans max-w-xl">
                I’m an engineering student at IIT Roorkee who's spent the better part of his college life digging into game development, graphics programming, information security and web technologies. I'm looking for employment oppurtunities in these domains.
            </p>
            <div>
                <button className="bg-transparent border border-teal-500 font-mono text-teal-600 px-4 py-2 hover:bg-teal-400 hover:text-white hover:border-teal-400">
                    Check out my blogs!
                </button>
            </div>
        </section>
    );
};

export default HeroSection;