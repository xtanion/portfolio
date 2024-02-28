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
    const alignExtras = prop.right ? "items-right justify-right text-right" : "col-start-1 col-end-8 row-start-5 row-end-5";
    return (
        <motion.div
            variants={fadeUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}>

            <div
                className="project relative grid grid-cols-12 grid-rows-5 gap-2 items-center mb-20 md:mb-24">
                <div className={`"project-image block relative" ${alignImg}`}>
                    <div className="rounded-sm overflow-clip">
                        <img src={prop.imgsrc} className="img w-full object-cover grayscale opacity-90 bg-teal-400 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                    </div>
                </div>
                <div className={`"project-content block relative z-1" ${alignCon}`}>
                    <div className="proj-title">
                        <p className="font-mono text-teal-400 text-sm mt-2">Featured Project</p>
                        <h3 className="text-xl font-bold text-slate-200 pb-4">{prop.title}</h3>
                    </div>
                    <div className="project-desc rounded-md p-6 backdrop-blur-lg bg-slate-900 shadow-md z-10">
                        <p className="text-sm md:text-sm">{prop.desc}</p>
                    </div>
                    <div className={prop.right ? "justify-right float-right" : ""}>

                        <Chips chips={prop.techs} mobile={false} />
                        <div className={prop.right ? "links flex flex-row w-full justify-end" : "links flex flex-row w-full"}>
                            <a href={prop.github}>
                                <div className="github-icons pt-3 px-3">
                                    <svg className="w-[20px] fill-slate-400 hover:fill-teal-400" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" id="github"><g transform="translate(-40 -40)"> <title>GitHub</title> <path d="M15.806,1.428C17.35,0.382 18.247,-0.292 18.815,-0.454C19.223,-0.57 19.566,-0.541 19.868,-0.421C20.222,-0.28 20.574,0.02 20.835,0.628C21.368,1.872 21.464,3.254 21.117,4.551C22.009,5.676 22.501,7.074 22.501,8.52C22.501,10.984 21.869,12.668 20.927,13.838C19.839,15.19 18.309,15.88 16.692,16.237C16.938,16.84 17.047,17.497 17.001,18.159L17.001,22C17.001,22.535 16.553,22.97 16,22.97C15.447,22.97 14.999,22.535 14.999,22L14.999,18.13C14.999,18.105 15,18.081 15.002,18.056C15.056,17.365 14.813,16.682 14.33,16.184C14.071,15.917 13.99,15.531 14.12,15.186C14.25,14.842 14.569,14.598 14.946,14.556C16.57,14.375 18.268,13.987 19.348,12.646C20.075,11.742 20.499,10.424 20.499,8.52C20.498,7.369 20.057,6.261 19.264,5.428C19.01,5.161 18.931,4.781 19.058,4.44C19.404,3.515 19.405,2.498 19.066,1.576C18.978,1.625 18.883,1.681 18.799,1.737C18.264,2.09 17.55,2.621 16.57,3.278C16.325,3.442 16.017,3.492 15.73,3.414C13.615,2.841 11.385,2.841 9.27,3.414C8.983,3.492 8.675,3.442 8.43,3.278C7.198,2.452 6.305,2.138 5.799,2.018C5.604,2.817 5.651,3.661 5.942,4.44C6.069,4.781 5.99,5.161 5.736,5.428C4.937,6.267 4.495,7.386 4.501,8.55C4.501,10.437 4.925,11.745 5.651,12.646C6.734,13.987 8.438,14.385 10.067,14.588C10.44,14.634 10.755,14.879 10.882,15.222C11.01,15.565 10.928,15.948 10.671,16.213C10.194,16.706 9.951,17.38 9.999,18.064C10.001,18.086 10.001,18.108 10.001,18.13L10.001,18.993L10.002,19.001L10.001,19.009L10.001,22C10.001,22.535 9.553,22.97 9,22.97C8.447,22.97 7.999,22.535 7.999,22L7.999,20.224C6.867,20.397 5.997,20.275 5.298,20.012C4.329,19.647 3.663,18.992 3.103,18.306C2.816,17.955 2.562,17.599 2.283,17.309C2.124,17.143 1.965,16.993 1.75,16.939C1.215,16.805 0.892,16.276 1.03,15.758C1.169,15.239 1.715,14.927 2.25,15.061C3.057,15.262 3.664,15.836 4.241,16.558C4.73,17.171 5.194,17.943 6.135,18.242C6.62,18.397 7.221,18.414 7.999,18.253L7.999,18.155C7.959,17.499 8.07,16.85 8.315,16.254C6.696,15.884 5.162,15.189 4.074,13.841C3.131,12.673 2.499,10.999 2.499,8.555C2.491,7.097 2.984,5.685 3.883,4.551C3.536,3.254 3.632,1.872 4.165,0.628C4.28,0.361 4.511,0.157 4.797,0.072C4.797,0.072 6.166,-0.474 9.183,1.431C11.361,0.916 13.629,0.915 15.806,1.428Z" transform="matrix(.89878 0 0 .9278 41.202 41.588)"></path></g></svg>
                                </div>
                            </a>
                            <a href={prop.url}>
                                <div className="px-3 pt-3">
                                    <ArrowUpRightIcon className="w-[20px] fill-slate-400 hover:stroke-teal-400" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className={`"title" ${alignTitle}`}>
                    <p className="font-mono text-teal-400 text-sm mt-2">Featured Project</p>
                    <h3 className="text-xl font-bold text-slate-200 pb-4">{prop.title}</h3>
                </div> */}

                {/* <div className={alignExtras}>
                    <Chips chips={prop.techs} mobile={false} />
                    <div className="links flex flex-row w-full">
                        <a href={prop.github}>
                            <div className="github-icons pt-3 px-3">
                                <svg className="w-[20px] fill-slate-400 hover:fill-teal-400" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24" id="github"><g transform="translate(-40 -40)"> <title>GitHub</title> <path d="M15.806,1.428C17.35,0.382 18.247,-0.292 18.815,-0.454C19.223,-0.57 19.566,-0.541 19.868,-0.421C20.222,-0.28 20.574,0.02 20.835,0.628C21.368,1.872 21.464,3.254 21.117,4.551C22.009,5.676 22.501,7.074 22.501,8.52C22.501,10.984 21.869,12.668 20.927,13.838C19.839,15.19 18.309,15.88 16.692,16.237C16.938,16.84 17.047,17.497 17.001,18.159L17.001,22C17.001,22.535 16.553,22.97 16,22.97C15.447,22.97 14.999,22.535 14.999,22L14.999,18.13C14.999,18.105 15,18.081 15.002,18.056C15.056,17.365 14.813,16.682 14.33,16.184C14.071,15.917 13.99,15.531 14.12,15.186C14.25,14.842 14.569,14.598 14.946,14.556C16.57,14.375 18.268,13.987 19.348,12.646C20.075,11.742 20.499,10.424 20.499,8.52C20.498,7.369 20.057,6.261 19.264,5.428C19.01,5.161 18.931,4.781 19.058,4.44C19.404,3.515 19.405,2.498 19.066,1.576C18.978,1.625 18.883,1.681 18.799,1.737C18.264,2.09 17.55,2.621 16.57,3.278C16.325,3.442 16.017,3.492 15.73,3.414C13.615,2.841 11.385,2.841 9.27,3.414C8.983,3.492 8.675,3.442 8.43,3.278C7.198,2.452 6.305,2.138 5.799,2.018C5.604,2.817 5.651,3.661 5.942,4.44C6.069,4.781 5.99,5.161 5.736,5.428C4.937,6.267 4.495,7.386 4.501,8.55C4.501,10.437 4.925,11.745 5.651,12.646C6.734,13.987 8.438,14.385 10.067,14.588C10.44,14.634 10.755,14.879 10.882,15.222C11.01,15.565 10.928,15.948 10.671,16.213C10.194,16.706 9.951,17.38 9.999,18.064C10.001,18.086 10.001,18.108 10.001,18.13L10.001,18.993L10.002,19.001L10.001,19.009L10.001,22C10.001,22.535 9.553,22.97 9,22.97C8.447,22.97 7.999,22.535 7.999,22L7.999,20.224C6.867,20.397 5.997,20.275 5.298,20.012C4.329,19.647 3.663,18.992 3.103,18.306C2.816,17.955 2.562,17.599 2.283,17.309C2.124,17.143 1.965,16.993 1.75,16.939C1.215,16.805 0.892,16.276 1.03,15.758C1.169,15.239 1.715,14.927 2.25,15.061C3.057,15.262 3.664,15.836 4.241,16.558C4.73,17.171 5.194,17.943 6.135,18.242C6.62,18.397 7.221,18.414 7.999,18.253L7.999,18.155C7.959,17.499 8.07,16.85 8.315,16.254C6.696,15.884 5.162,15.189 4.074,13.841C3.131,12.673 2.499,10.999 2.499,8.555C2.491,7.097 2.984,5.685 3.883,4.551C3.536,3.254 3.632,1.872 4.165,0.628C4.28,0.361 4.511,0.157 4.797,0.072C4.797,0.072 6.166,-0.474 9.183,1.431C11.361,0.916 13.629,0.915 15.806,1.428Z" transform="matrix(.89878 0 0 .9278 41.202 41.588)"></path></g></svg>
                            </div>
                        </a>
                        <a href={prop.url}>
                            <div className="px-3 pt-3">
                                <ArrowUpRightIcon className="w-[20px] fill-slate-400 hover:stroke-teal-400" />
                            </div>
                        </a>
                    </div>
                </div> */}

            </div>
        </motion.div>

    );
};

export default ProjectComponent;