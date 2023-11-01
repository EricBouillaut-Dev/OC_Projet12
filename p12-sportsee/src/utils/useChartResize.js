import { useEffect, useRef } from "react";

function useChartResize() {
  const chartRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (chartRef.current) {
        const width = chartRef.current.clientWidth;
        chartRef.current.style.height = `${width}px`;
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return chartRef;
}
export default useChartResize;
