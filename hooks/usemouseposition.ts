"use client";

import { useEffect, useState } from "react";

const useMousePosition = (ref: any) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const saveScrollPosition = () => {
    return {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };
  };

  const restoreScrollPosition = (position: {
    scrollX: number;
    scrollY: number;
  }) => {
    window.scrollTo(position.scrollX, position.scrollY);
  };

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ref.current
          ? ev.clientX - ref.current.getBoundingClientRect().left
          : null,
        y: ref.current
          ? ev.clientY - ref.current.getBoundingClientRect().top
          : null,
      });
    };

    const scrollPosition = saveScrollPosition();
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      restoreScrollPosition(scrollPosition);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
};

export default useMousePosition;
