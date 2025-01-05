"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  PanInfo,
} from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const imgUrl =
    "https://skillicons.dev/icons?i=bash,bootstrap,django,discordjs,docker,electron,figma,firebase,flask,git,html,js,jest,jquery,kali,linux,md,mongodb,nextjs,nodejs,npm,py,r,react,svelte,tailwind,ts,yarn&perline=50";

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth;
    let newX = x.get() + info.delta.x;

    // Create the looping effect
    if (newX > 0) {
      newX = (newX % contentWidth) - contentWidth;
    } else if (newX < -contentWidth) {
      newX = newX % contentWidth;
    }

    x.set(newX);
  };

  const xTransform = useTransform(x, (value) => {
    if (!contentRef.current) return `${value}px`;
    const contentWidth = contentRef.current.scrollWidth;
    return `${value % contentWidth}px`;
  });

  return (
    <div className="dark relative bg-zinc-950 py-12">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Mask gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        <motion.div
          ref={contentRef}
          className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
          style={{ x: xTransform }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          animate={controls}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex shrink-0">
              <Image
                src={imgUrl}
                alt="Technology Icons"
                width={1556}
                height={48}
                className="h-12 w-auto brightness-110"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
