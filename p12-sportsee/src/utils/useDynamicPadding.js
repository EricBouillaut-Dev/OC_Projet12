import { useState, useEffect } from "react";

export default function useDynamicPadding() {
  const [padding, setPadding] = useState({ left: -40, right: -40 });

  useEffect(() => {
    function calculatePadding(windowWidth) {
      const baseWidth = 1100;
      if (windowWidth < baseWidth) return { left: -25, right: -25 };
      const increment = Math.floor((windowWidth - baseWidth) / 100) * 6;
      const maxPadding = -100;
      const calculatedPadding = -25 - increment;

      return {
        left: Math.max(calculatedPadding, maxPadding),
        right: Math.max(calculatedPadding, maxPadding),
      };
    }

    function handleResize() {
      const windowWidth = window.innerWidth;
      const newPadding = calculatePadding(windowWidth);
      setPadding(newPadding);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return padding;
}
