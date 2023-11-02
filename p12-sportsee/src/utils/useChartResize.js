import { useEffect, useRef } from "react";

// useChartResize est un hook personnalisé pour maintenir le ratio (carré) d'un graphique lors des redimensionnements de fenêtre.
function useChartResize() {
  const chartRef = useRef(null);

  useEffect(() => {
    // handleResize ajuste la hauteur du graphique pour correspondre à sa largeur, le maintenant carré.
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
