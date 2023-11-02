import { useEffect, useRef, useState } from "react";
// Ce hook personnalisé permet de gérer la taille d'un graphique de manière responsive (cercles polygones du radar)
// tout en maintenant son ratio (carré) lors des redimensionnements de fenêtre.
function useResponsiveChart() {
  const chartRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      if (chartRef.current) {
        // Ajuste la hauteur du graphique pour correspondre à sa largeur, le maintenant carré.
        const width = chartRef.current.clientWidth;
        chartRef.current.style.height = `${width}px`;

        // Met à jour la taille du conteneur du graphique. (cercles polygonaux du radar)
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
