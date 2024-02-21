import React from "react";
import NavLink from "./Links";
import { animate, motion } from "framer-motion";

const fadeUpAnimation = {
    initial: {
        opacity: 0,
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: -10
    },
}

interface Links {
    links: any
}

interface WTF {
    path: string,
    title: string
}
const MenuOverlay : React.FC<Links> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center transition duration-1000 ease-out">
            <motion.div
                variants={fadeUpAnimation} initial="initial" whileInView="animate" exit="exit" viewport={{ once: true }}>

            {links.map((link:WTF, index:React.Key) => (
                <li key={index} className="py-2">
                    <span className="block text-center text-sm font-mono text-teal-400 px-4">0{(Number(index.toLocaleString())+1).toLocaleString()}.</span>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
            </motion.div>
        </ul>
    );
};

export default MenuOverlay;