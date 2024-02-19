import React from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-teal-400 border-l border-teal-400' : 'text-gray-500'
    return (
        <button onClick={selectTab} className="rounded-sm">
            <p className={`font-mono text-sm py-4 text-start pl-4 mr-3 hover:bg-teal-300/10 hover:text-teal-400 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
};

export default TabButton;