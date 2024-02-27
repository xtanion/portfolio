import React from "react";

interface Chip {
    chips: any,
}


const Chips: React.FC<Chip> = ({ chips }) => {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {chips.map((value: string, index: number) => (
                <li
                    key={index} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 backdrop-blur-md">
                        {value.toString()}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Chips;