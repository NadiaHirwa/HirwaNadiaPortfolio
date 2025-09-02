import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    generateDataPoints();
    generateFloatingElements();

    const handleResize = () => {
      generateDataPoints();
      generateFloatingElements();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateDataPoints = () => {
    const numberOfPoints = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    const newPoints = [];

    for (let i = 0; i < numberOfPoints; i++) {
      newPoints.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.1,
        animationDuration: Math.random() * 6 + 4,
        delay: Math.random() * 5,
      });
    }

    setDataPoints(newPoints);
  };

  const generateFloatingElements = () => {
    const numberOfElements = 8;
    const newElements = [];

    for (let i = 0; i < numberOfElements; i++) {
      newElements.push({
        id: i,
        type: Math.random() > 0.5 ? 'circle' : 'square',
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.1 + 0.05,
        animationDuration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
      });
    }

    setFloatingElements(newElements);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      {/* Data Points */}
      {dataPoints.map((point) => (
        <div
          key={point.id}
          className="data-point animate-float"
          style={{
            width: point.size + "px",
            height: point.size + "px",
            left: point.x + "%",
            top: point.y + "%",
            opacity: point.opacity,
            animationDuration: point.animationDuration + "s",
            animationDelay: point.delay + "s",
          }}
        />
      ))}

      {/* Floating Geometric Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`floating-element animate-float-slow ${element.type === 'circle' ? 'rounded-full' : 'rounded-lg'}`}
          style={{
            width: element.size + "px",
            height: element.size + "px",
            left: element.x + "%",
            top: element.y + "%",
            opacity: element.opacity,
            animationDuration: element.animationDuration + "s",
            animationDelay: element.delay + "s",
          }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {dataPoints.slice(0, 5).map((point, index) => {
          const nextPoint = dataPoints[(index + 1) % 5];
          if (!nextPoint) return null;
          
          return (
            <line
              key={`line-${index}`}
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${nextPoint.x}%`}
              y2={`${nextPoint.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animationDuration: "3s",
                animationDelay: `${index * 0.5}s`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
