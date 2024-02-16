import React from "react";
import NavLink from "./Links";

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
            {links.map((link:WTF, index:React.Key) => (
                <li key={index} className="py-2">
                    <span className="block text-center text-sm font-mono text-teal-400 px-4">0{(Number(index.toLocaleString())+1).toLocaleString()}.</span>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;