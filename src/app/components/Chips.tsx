import React from "react";

interface Chip {
    chips: Array<String>,
    mobile: boolean
}


const Chips: React.FC<Chip> = ({ chips, mobile }) => {
    const extras = !mobile ? "backdrop-blur-md" : "";
    return (
        <div>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {chips.map((value, index) => (
                <li
                    key={index} className="mr-1.5 mt-2">
                    <div className={`"flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 " ${extras}`}>
                        {value.toString()}
                    </div>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Chips;