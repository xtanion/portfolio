"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "whoami", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Connect" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-2 z-20">
      <div className="flex flex-col items-end pl-2">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`text-right text-sm font-medium py-1 px-2 rounded-md transition-colors ${
              activeSection === id
                ? "text-teal-300 font-semibold"
                : "text-gray-500 hover:text-teal-500 hover:bg-teal-300/10"
            }`}
            onMouseEnter={() => console.log(" hovered", id)}
            onClick={() => {
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
