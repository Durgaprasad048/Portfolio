import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParallaxDots = () => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
      }));
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-indigo-500/20"
          style={{
            x: `${dot.x}%`,
            width: dot.size,
            height: dot.size,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: 0.6,
            y: [0, dot.y * 2 - 100],
          }}
          transition={{
            opacity: {
              duration: 1,
              delay: index * 0.1,
            },
            y: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxDots;