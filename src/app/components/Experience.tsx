"use client";
import React, { ReactHTMLElement, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { animate, motion } from "framer-motion";

interface tabData {
  title: string;
  id: string;
  content: React.JSX.Element;
}

const fadeUpAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const CustomItem: React.FC<any> = ({ data }) => {
  return (
    <li className="my-2 relative shrink-0">
      <p className="text-sm md:text-base xl:text-base text-slate-300">
       <span className="font-mono font-black text-teal-500">&gt; </span>{data}
      </p>
    </li>
  );
};

const TAB_DATA: Array<tabData> = [
  {
    title: "edra",
    id: "edra",
    content: (
      <div
        className="p-4 rounded-sm"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <span className="text-slate-200 font-bold text-lg">
          Software Develpment Engineer
        </span>
        <span className="text-teal-500 font-bold text-lg"> @ Edra Labs</span>

        <p className="text-slate-500 font-mono font-thin text-sm my-1">
          May 2024 - Present
        </p>
        <ul className="list-outside py-2 xl:max-w-xl">
          <CustomItem data="Built a scalable UGC backend with Auth0/JWT auth, Redis Pub/Sub for real-time notifications, and
          AI-driven content moderation and generation" />
          <CustomItem data="Designed an LLM-powered web scraper (GPT-4o for image/PDF validation) and Typesense integration,
          automating data extraction and increasing dataset coverage by 65%" />
          <CustomItem data="Architected a distributed task system (Celery with ElastiCache) to process LLM-generated content, improving
          throughput by 40% via optimized Pub/Sub workflows"/>
          <CustomItem data="Owned full-stack development for category launches, implementing microservices and CI/CD pipelines to accelerate deployments." />
        </ul>
      </div>
    ),
  },
  {
    title: "gsoc",
    id: "gsoc",
    content: (
      <div
        className="p-4 rounded-sm"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <span className="text-slate-200 font-bold text-lg">
          Google Summer of Code
        </span>
        <span className="text-teal-500 font-bold text-lg"> @ FURY</span>

        <p className="text-slate-500 font-mono font-thin text-sm my-1">
          Summer 2022
        </p>
        <ul className="list-outside py-2 xl:max-w-xl">
          <CustomItem data="Added the ability to load glTF file with materials and textures in FURY and display it to an Open-gl renderer" />
          <CustomItem data="Worked on Keyframe animations, integrated Spline and Cubic Spline interpolation techniques to the renderer" />
          <CustomItem data="Wrote automated Unit Tests and Integration Tests using the Pytest module and GitHub actions." />
        </ul>
      </div>
    ),
  },
  {
    title: "hcx",
    id: "hcx",
    content: (
      <div
        className="p-4 rounded-sm"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <span className="text-slate-200 font-bold text-lg">
          Software Engineer Intern
        </span>
        <span className="text-teal-500 font-bold text-lg"> @ HCX</span>

        <p className="text-slate-500 font-mono font-thin text-sm my-1">
          Summer 2023
        </p>
        <ul className="list-outside py-2 xl:max-w-xl">
          <CustomItem data="Implemented JWT based user authentication in the Health Claims Exchange API secured with RSA encryption" />
          <CustomItem data="Added session management, token expiration, and secure payload flow with user authorization in HCX API" />
          <CustomItem data="Added FHIR JSON validation using Google Cloud for FHIR and wrote automated integration testing." />
        </ul>
      </div>
    ),
  },
  {
    title: "acm",
    id: "acm",
    content: (
      <div
        className="p-4 rounded-sm"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <span className="text-slate-200 font-bold text-lg">
          Core Contributor
        </span>
        <span className="text-teal-500 font-bold text-lg"> @ ACM IITR</span>

        <p className="text-slate-500 font-mono font-thin text-sm my-1">
          March 2022 - May 2024
        </p>
        <ul className="list-outside list-image-right py-2 xl:max-w-xl">
          <CustomItem data="Organized discussions and initiatives to foster student interest in computer science, covering
          topics like Git/GitHub, OSS, Operating Systems, Computer Networking, and Computer graphics." />
        </ul>
      </div>
    ),
  },
];

const Experience = () => {
  const [tab, setTab] = useState("edra");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      className="w-full min-h-svh flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-0 z-10"
      id="experience"
    >
      {/* Left Divider */}
      <div className="hidden md:block h-[1px] w-full bg-white/30 self-stretch mt-auto mb-auto" />
    
      {/* Main Content */}
      <div className="max-w-[900px] flex flex-col md:grid md:grid-cols-3 w-full h-max mt-auto mb-auto bg-black/60 backdrop-blur-md border-white/30 md:border px-6 md:px-8 py-6 gap-y-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center col-span-full md:col-span-3">
          <span className="text-xl font-mono text-teal-400">02. </span>
          <span className="ml-4 text-xl font-extrabold text-slate-200">
            Experiences gained
          </span>
        </div>
    
        {/* Tab Buttons */}
        <div className="flex flex-col text-slate-500 col-span-1">
          <TabButton
            selectTab={() => handleTabChange("edra")}
            active={tab === "edra"}
          >
            Edra Labs
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("hcx")}
            active={tab === "hcx"}
          >
            Health Claims Exchange
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("gsoc")}
            active={tab === "gsoc"}
          >
            Python Software Foundation
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("acm")}
            active={tab === "acm"}
          >
            ACM IITR
          </TabButton>
        </div>
    
        {/* Tab Content */}
        <div className="col-span-2 overflow-auto min-w-0 text-slate-300">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    
      {/* Right Divider */}
      <div className="hidden md:block h-[1px] w-full bg-white/30 self-stretch mt-auto mb-auto" />
    </section>

  );
};

export default Experience;
