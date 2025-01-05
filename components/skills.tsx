"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  PanInfo,
  useDragControls,
} from "framer-motion";
import Image from "next/image";

const DRAG_LIMIT_FACTOR = 0.5;

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const dragControls = useDragControls();

  const imgUrl =
    "https://skillicons.dev/icons?i=bash,svelte,tailwind,ts,js,react,nextjs,py,nodejs,discordjs,docker,electron,figma,firebase,flask,git,html,jest,jquery,kali,linux,bootstrap,mongodb,md,npm,r,yarn&perline=50";

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const currentX = x.get();
    const minX = -contentWidth + containerWidth;
    const maxX = 0;
    const dragLimit = containerWidth * DRAG_LIMIT_FACTOR;

    let newX = currentX + info.offset.x;
    newX = Math.max(Math.min(newX, dragLimit), minX - dragLimit);

    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    });
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const currentX = x.get();
    const minX = -contentWidth + containerWidth;
    const maxX = 0;
    const dragLimit = containerWidth * DRAG_LIMIT_FACTOR;

    let newX = currentX + info.delta.x;
    newX = Math.max(Math.min(newX, dragLimit), minX - dragLimit);

    x.set(newX);
  };

  return (
    <div className="relative py-4">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Mask gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white/90 dark:from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white/90 dark:from-zinc-950 to-transparent z-10" />

        <motion.div
          ref={contentRef}
          className="flex whitespace-nowrap cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragControls={dragControls}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          <div className="flex shrink-0">
            <Image
              src={imgUrl}
              alt="Technology Icons"
              width={1556}
              height={48}
              className="h-12 w-auto brightness-110 select-none"
              priority
              draggable="false"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
