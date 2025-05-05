"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Links from "./Links";
import { Bars2Icon, XMarkIcon, CloudArrowDownIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
    {
        title: "Resume",
        path: ""
    }
];


const Navbar = ({ scrollOffset }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="grid auto-cols-[max-content_1fr_max-content] grid-flow-col auto-rows-max place-items-center h-auto w-full left-0 -top-1 right-0 -mt-1 fixed pt-14 z-10 md:backdrop-blur-sm bg-black/80">
            <div className="mobile-menu md:hidden block row-span-1 row-start-2 p-4">
                {
                    !navOpen ? (
                        <button
                            onClick={() => setNavOpen(true)}>
                            <Bars2Icon className="h-5 w-5 stroke-teal-400" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavOpen(false)}>
                            <XMarkIcon className="h-5 w-5 stroke-teal-400" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block w-full col-start-2" id="navbar">
                <ul className="grid grid-flow-col auto-cols-fr place-items-center min-h-[1.5rem] w-full font-medium">
                    <li className="text-slate-200 hover:text-teal-400">
                        <Link href={"#about"} className="py-2 pr-4 font-mono text-sm">whoami</Link>
                    </li>
                    <li className="text-slate-200 hover:text-teal-400">
                        <Link href={"#experience"} className="py-2 pr-4 font-mono text-sm">experience</Link>
                    </li>
                    <li className="text-slate-200 hover:text-teal-400">
                        <Link href={"#project"} className="py-2 pr-4 font-mono text-sm">projects</Link>
                    </li>
                    <li className="text-slate-200 hover:text-teal-400">
                        <Link href={"#project"} className="py-2 pr-4 font-mono text-sm">blogs</Link>
                    </li>
                    <li className="text-slate-200 hover:text-teal-400">
                        <Link href={"#contact"} className="py-2 pr-4 font-mono text-sm">redirects</Link>
                    </li>

                </ul>
            </div>
            <div className="grid auto-cols-fr grid-cols-5 place-items-center relative col-start-2 row-start-2 w-full">
                <div className="hidden auto-cols-fr grid-cols-10 place-content-center lg:grid absolute h-full w-full z-20">
                    <div className="w-[calc(200%-30px)]"></div>
                </div>
                <div className="about-line relative flex h-full w-full items-center justify-center">
                    <div className="absolute h-full w-full grid grid-cols-[1fr_max-content_1fr] place-content-center justify-items-center z-10">

                        <div className="col-start-2 h-1 w-1 mx-2 lg:mx-3 bg-white/50 rounded-full"></div>
                        <div className=" col-start-3 h-[2px] self-center w-full bg-white/30"></div>
                    </div>
                    <img
                            src="rocket.svg"
                            alt="Rocket"
                            className="w-[36px] z-30 transition-transform duration-300 ease-out"
                            style={{
                              transform: `translateX(${scrollOffset * screen.height}px)`, // or any scale you want
                            }}
                          />
                </div>
                <div className="exp-line relative flex h-full w-full items-center justify-center;">
                    <div className="absolute h-full w-full grid grid-cols-[1fr_max-content_1fr] place-content-center justify-items-center z-10">
                        <div className="self-center h-0.5 w-full col-start-1 bg-white/30"></div>
                        <div className="col-start-2 h-1 w-1 mx-2 lg:mx-3 bg-white/50 rounded-full false false"></div>
                        <div className="self-center h-0.5 w-full bg-white/30 col-start-3 false"></div>
                    </div>
                </div>
                <div className="proj-line relative flex h-full w-full items-center justify-center;">
                    <div className="absolute h-full w-full grid grid-cols-[1fr_max-content_1fr] place-content-center justify-items-center z-10">
                        <div className="self-center h-0.5 w-full col-start-1 bg-white/30"></div>
                        <div className="col-start-2 h-1 w-1 mx-2 lg:mx-3 bg-white/50 rounded-full false false"></div>
                        <div className="self-center h-0.5 w-full bg-white/30 col-start-3 false"></div>
                    </div>
                </div>
                <div className="blog-line relative flex h-full w-full items-center justify-center;">
                    <div className="absolute h-full w-full grid grid-cols-[1fr_max-content_1fr] place-content-center justify-items-center z-10">
                        <div className="self-center h-0.5 w-full col-start-1 bg-white/30"></div>
                        <div className="col-start-2 h-1 w-1 mx-2 lg:mx-3 bg-white/50 rounded-full false false"></div>
                        <div className="self-center h-0.5 w-full bg-white/30 col-start-3"></div>
                    </div>
                </div>
                <div className="contact-line relative flex h-full w-full items-center justify-center;">
                    <div className="absolute h-full w-full grid grid-cols-[1fr_max-content_1fr] place-content-center justify-items-center z-10">
                        <div className="self-center h-0.5 w-full col-start-1 bg-white/30"></div>
                        <div className="col-start-2 h-1 w-1 mx-2 lg:mx-3 bg-white/50 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="group hidden md:flex col-start-3 row-start-2 mr-[7.5rem] border-[1px] p-3 font-medium border-teal-300 bg-black/70 hover:bg-teal-300 rounded-sm">
                <CloudArrowDownIcon className="w-4 stroke-teal-300 group-hover:stroke-teal-950" />
                <Link href={"#contact"} className="font-mono px-2 text-teal-300 group-hover:text-teal-950 text-sm">resume</Link>
            </div>
            {navOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>

    );
}

export default Navbar;
