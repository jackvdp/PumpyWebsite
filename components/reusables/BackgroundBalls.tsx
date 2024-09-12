import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


function BackgroundBalls() {
  const [numBalls, setNumBalls] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = ['bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-blue-300', 'bg-violet-300'];

  useEffect(() => {
    function updateBallCount() {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        const newBallCount = Math.max(2, Math.floor(height / 400));
        setNumBalls(newBallCount);
      }
    }

    updateBallCount();
    window.addEventListener('resize', updateBallCount);
    return () => window.removeEventListener('resize', updateBallCount);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0" 
      style={{ overflow: 'visible' }}
    >
      {Array.from({ length: numBalls }).map((_, index) => {
        const color = colors[index % colors.length];
        const xPosition = `${-20 + (index * 25) % 140}%`;
        const yPosition =  `${-20 + ((index * 30) % 140)}%`;

        return (
          <motion.div
            key={`ball-${index}`}
            className={`absolute w-64 h-64 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-50`}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, index % 2 === 0 ? '10%' : '-10%', 0],
              y: [0, index % 2 === 0 ? '5%' : '-5%', 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + index * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              top: yPosition,
              left: xPosition,
            }}
          />
        );
      })}
    </div>
  );
}

export default BackgroundBalls;