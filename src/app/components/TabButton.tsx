import React from "react";

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-teal-400 border-l bg-teal-300/10 border-teal-400' : 'text-gray-500'
    return (
        <button onClick={selectTab} className="rounded-sm">
            <p className={`font-mono py-4 text-start pl-4 mr-3 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
};

export default TabButton;