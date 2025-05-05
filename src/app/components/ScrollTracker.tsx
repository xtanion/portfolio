// ScrollTracker.tsx
"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export default function ScrollTracker({ onScroll }) {
  const scroll = useScroll();

  useFrame(() => {
    onScroll(scroll.offset); // This will be a value between 0 and 1
  });

  return null;
}
