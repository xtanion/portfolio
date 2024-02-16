import Link from "next/link";
import React from "react";

interface navBar {
    href: string,
    title: string
};

const Links: React.FC<navBar> = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block px-4 text-slate-400 font-mono text-sm sm:text-xl rounded md:p-0 hover:text-teal-400"
        >
            {title}
        </Link>
    );
};

export default Links;