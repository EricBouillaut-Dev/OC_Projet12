import { useEffect, useRef, useState } from "react";

function useResponsiveChart() {
  const chartRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      if (chartRef.current) {
        const width = chartRef.current.clientWidth;
        chartRef.current.style.height = `${width}px`;

        const { width: currentWidth, height } =
          chartRef.current.getBoundingClientRect();
        setContainerSize({ width: currentWidth, height });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [chartRef, containerSize];
}

export default useResponsiveChart;
