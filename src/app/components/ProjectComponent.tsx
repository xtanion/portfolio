import React from "react";
import Chips from "./Chips";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { animate, motion } from "framer-motion";

const fadeUpAnimation = {
    initial: {
        opacity: 0,
        y: 100
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
        y: -100
    },
}

interface PropProps {
    title: string,
    desc: string,
    github: string,
    url: string,
    imgsrc: string,
    right: boolean,
    techs: string[]
}

interface ProjectProps {
    prop: PropProps
}
const ProjectComponent: React.FC<ProjectProps> = ({ prop }) => {
    const alignCon = prop.right ? "col-start-7 col-end-[-1] row-start-1 row-end-[-1] text-right" : "col-start-1 col-end-8 row-start-1 row-end-[-1]";
    const alignImg = prop.right ? "col-start-1 col-end-8 row-start-1 row-end-[-1] text-right" : "col-start-7 col-end-[-1] row-start-1 row-end-[-1]"
    return (
        <motion.div
            variants={fadeUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}
            className="project relative grid grid-cols-12 gap-2 items-center mb-20 md:mb-24">
            <div className={`"project-image block relative" ${alignImg}`}>
                <div className="rounded-sm overflow-clip">
                    <img src={prop.imgsrc} className="img w-full object-cover grayscale opacity-90 bg-teal-400 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                </div>
            </div>
            <div className={`"project-content block relative z-1" ${alignCon}`}>
                <div>
                    <p className="font-mono text-teal-400 text-sm mt-2">Featured Project</p>
                    <h3 className="text-xl font-bold text-slate-200 pb-4">{prop.title}</h3>
                    <div className="project-desc rounded-md p-6 backdrop-blur-lg bg-slate-900 shadow-md z-10">
                        <p className="text-sm md:text-sm">{prop.desc}</p>
                    </div>
                    
                </div>
            </div>

        </motion.div>
    );
};

export default ProjectComponent;