import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function ScrollTracker() {
  const [windowHeight, setWindowHeight] = useState(1); // Default to 1 to avoid division by zero
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update window height on mount and resize
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateWindowHeight();
    window.addEventListener('resize', updateWindowHeight);

    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);

  // Adjust scaleY to account for the rounded bottom
  const adjustedScaleY = useTransform(scaleY, latest => {
    // Assuming the width is 4px and we want a semicircle at the bottom
    const adjustment = 2 / windowHeight;
    return Math.max(adjustment, latest);
  });

  return (
    <motion.div
      className="fixed right-0 top-0 w-1 bg-gradient-to-b from-indigo-500 to-pink-600 shadow-lg"
      style={{
        scaleY: adjustedScaleY,
        height: '100%',
        transformOrigin: 'top',
        zIndex: 49,
        borderBottomLeftRadius: '2px',
        borderBottomRightRadius: '2px',
      }}
    />
  );
}

export default ScrollTracker;