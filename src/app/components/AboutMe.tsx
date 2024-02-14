import React from "react";
import Image from "next/image";

const imageStyle = {
    borderRadius: '4px'
}

const AboutMe = () => {
    return (
        <section className="test-white mt-20 md:mt-40" id="about">
            <div className="md:grid md:grid-cols-2 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 ">
                <div className="mt-4 md:mt-0 flex flex-col h-full">
                    
                    <div className="flex py-5 items-center">
                        <span className="text-2xl font-mono text-teal-500 mb-4">01. </span>
                        <span className="flex-shrink mx-4 text-2xl font-semibold text-gray-200 mb-4">About me</span>
                        <div className="flex-grow border-t border-gray-600 mb-4"></div>
                    </div>
                    <p className="text-gray-500 text-justify mt-4">
                        Hello! My name is Manas(often go by sin3point14) and I enjoy creating things that have visual impact. My interest in development started back in my highschool when i discovered html/css and tried my hand at learning it.
                        Fast-forward to today, I'm into my fourth year of engineering at IIT Roorkee and have explored various field of computer science and software development as part of SDSLabs, a college group oriented towards software development. I've completed several internships to vouch for my skills. I've spent a good amount of time at low level programming and trying to break things by reverse engineering them.
                        <br></br>
                        I participate(and win!) a lot of CTFs which have greatly contributed to my knowledge in information security, mainly the fields of reverse engineering and binary exploitation.
                        <br></br>
                        <br></br>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">JavaScript</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">TypeScript</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">HTML &amp; SCSS</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">React</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">Next.js</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">React Native</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">WordPress</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">Contentful</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">Node.js</div>
                        </li>
                        <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-mono leading-5 text-teal-300 ">PHP</div>
                        </li>
                    </ul>
                </div>
                <div className="group w-full h-full mt-5 justify-center items-stretch rounded-sm border-l-sky-300">
                    <div className="flex items-center justify-center h-full w-full bottom-10 opacity-20 group-hover:opacity-100 transition-all duration-300">
                        {/* <img className="w-80 h-80 object-scale-down" src={"/about.jpeg"} alt="" style={imageStyle} /> */}
                        <Image src="/about.jpeg" width={500} height={500} alt="" style={imageStyle}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;