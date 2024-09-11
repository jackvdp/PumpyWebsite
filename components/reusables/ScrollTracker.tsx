import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Adjust scaleY to account for the rounded bottom
  const adjustedScaleY = useTransform(scaleY, latest => {
    // Assuming the width is 4px and we want a semicircle at the bottom
    const adjustment = 2 / window.innerHeight;
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