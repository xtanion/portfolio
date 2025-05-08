// components/ScrollTracker.tsx
"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function ScrollTracker({ onScroll }: { onScroll: (offset: number) => void }) {
  const scroll = useScroll();

  useFrame(() => {
    if (scroll && onScroll) {
      onScroll(scroll.offset);
    }
  });

  return null;
}
