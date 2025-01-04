import { useEffect, useState } from "react";

const useMousePosition = (ref: any) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX - ref.current.getBoundingClientRect().left,
        y: ev.clientY - ref.current.getBoundingClientRect().top,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
};

export default useMousePosition;
