import React from "react";

const Footer = () => {
    return (
    <footer className="fixed bottom-0 w-full grid auto-cols-fr grid-flow-col py-5 px-[7.5rem] z-20 bg-black/80">
        <div className="flex items-center">
            <a className="order-2 mr-[3.5rem]" rel="noreferrer" target="_blank" href="https://github.com/xtanion">
                <img src="github.svg" alt="GitHub" className="h-[1.5rem] w-auto" />
            </a>
            <span className=" text-[0.63rem] font-normal mr-[3.5rem] order-1">FIND ME</span>
            <a className="order-3" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/xtanion/">
                <img src="linkedin.svg" alt="Linkedin" className="h-[1.5rem] w-auto" />
            </a>
        </div>
        <div className="cursor-magicc"></div>
        <div className=" flex items-center justify-end">
            <span className="text-[0.63rem] tracking-widest mr-[1rem] uppercase font-medium">Built using</span>
            <span className="text-h6 uppercase font-bold">Next & THree</span>
        </div>
        </footer>
    )
};

export default Footer;
