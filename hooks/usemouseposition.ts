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
        x: ref.current
          ? ev.clientX - ref.current.getBoundingClientRect().left
          : null,
        y: ref.current
          ? ev.clientY - ref.current.getBoundingClientRect().top
          : null,
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
