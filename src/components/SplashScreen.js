import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const splashPaths = [
  // H
  'M25 22L25 90',
  'M25 56L59 56',
  'M59 22L59 90',
  // E
  'M75 22L75 90',
  'M75 22L109 22',
  'M75 56L103 56',
  'M75 90L109 90',
  // L
  'M125 22L125 90',
  'M125 90L159 90',
  // L
  'M175 22L175 90',
  'M175 90L209 90',
  // O
  'M225 39c0-9.389 7.611-17 17-17s17 7.611 17 17v34c0 9.389-7.611 17-17 17s-17-7.611-17-17V39z',
  
  // Space between words (no path needed)
  
  // W
  'M291 22L302 90',
  'M302 90L313 56',
  'M313 56L324 90',
  'M324 90L335 22',
  // O
  'M351 39c0-9.389 7.611-17 17-17s17 7.611 17 17v34c0 9.389-7.611 17-17 17s-17-7.611-17-17V39z',
  // R
  'M401 22L401 90',
  'M401 22L418 22c9.389 0 17 7.611 17 17s-7.611 17-17 17L401 56',
  'M418 56L435 90',
  // L
  'M451 22L451 90',
  'M451 90L485 90',
  // D
  'M501 22L501 90',
  'M501 22c18.778 0 34 15.222 34 34s-15.222 34-34 34',
];

const accent = '#6300a8';
const getGlow = () => 'drop-shadow(0 0 8px #6300a8) drop-shadow(0 0 16px #6300a8)';

const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Draw animation
      await controls.start(i => ({
        pathLength: 1,
        transition: { duration: 0.8, delay: i * 0.08, ease: 'easeInOut' },
      }));
      // Hold for 1.5 seconds
      await new Promise(res => setTimeout(res, 1500));
      // Undo (reverse) animation
      await controls.start(i => ({
        pathLength: 0,
        transition: { duration: 0.8, delay: i * 0.08, ease: 'easeInOut' },
      }));
      // Hide splash
      setTimeout(() => {
        setShow(false);
        if (onFinish) onFinish();
      }, 400);
    }
    sequence();
  }, [controls, onFinish]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#000',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.6s',
    }}>
      <motion.svg
        viewBox="0 0 680 112"
        width="600"
        height="120"
        style={{ display: 'block' }}
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          {splashPaths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              custom={i}
              initial={{ pathLength: 0 }}
              animate={controls}
              stroke={accent}
              style={{ filter: getGlow() }}
               transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeInOut' }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
};

export default SplashScreen;
