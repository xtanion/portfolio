"use client";
import Link from "next/link";
import React, { useState } from "react";
import Links from "./Links";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
];

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="left-0 -top-1 right-0 -mt-1 fixed z-10 bg-gray-950 bg-opacity-20 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between mx-auto p-6">
                <div className="logo font-mono font-bold text-teal-300">
                    x.
                </div>
                <div className="mobile-menu md:hidden block">
                    {
                        !navOpen ? (
                            <button
                                onClick={()=> setNavOpen(true)}>
                                    <Bars2Icon className="h-5 w-5 stroke-teal-400"/>
                            </button>
                        ) :   (
                                <button
                                    onClick={()=>setNavOpen(false)}>
                                        <XMarkIcon className="h-5 w-5 stroke-teal-400"/>
                                </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block" id="navbar">
                    <ul className="flex flex-col md:flex-row items-center p-4 md:p-0 md:space-x-4">
                        <li className="text-slate-300 hover:text-teal-400">
                            <Link href={"#about"} className="py-2 pr-4 font-mono font-thin text-xs"><span className="text-teal-400">01.</span> about</Link>
                        </li>
                        <li className="text-slate-300 hover:text-teal-400">
                            <Link href={"#experience"} className="py-2 pr-4 font-mono font-thin text-xs"><span className="text-teal-400">02.</span> experience</Link>
                        </li>
                        <li className="text-slate-300 hover:text-teal-400">
                            <Link href={"#project"} className="py-2 pr-4 font-mono font-thin text-xs"><span className="text-teal-400">03.</span> projects</Link>
                        </li>
                        <li className="text-slate-300 hover:text-teal-400">
                            <Link href={"#contact"} className="py-2 pr-4 font-mono font-thin text-xs"><span className="text-teal-400">04.</span> contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {navOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>

    );
}

export default Navbar;