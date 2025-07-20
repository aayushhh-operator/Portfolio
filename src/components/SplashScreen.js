import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const splashPaths = [
  // S
  'M25 39c-9.389 0-17 7.611-17 17 0 9.389 7.611 17 17 17h8c9.389 0 17 7.611 17 17s-7.611 17-17 17H8v-17h25c9.389 0 17-7.611 17-17s-7.611-17-17-17h-8C15.611 56 8 48.389 8 39s7.611-17 17-17h25v17H25z',
  // S
  'M75 39c-9.389 0-17 7.611-17 17 0 9.389 7.611 17 17 17h8c9.389 0 17 7.611 17 17s-7.611 17-17 17H58v-17h25c9.389 0 17-7.611 17-17s-7.611-17-17-17h-8C65.611 56 58 48.389 58 39s7.611-17 17-17h25v17H75z',
  // U
  'M108 22v34c0 18.778 15.222 34 34 34s34-15.222 34-34V22h-17v34c0 9.389-7.611 17-17 17s-17-7.611-17-17V22h-17z',
  // P
  'M186 22v68h17V56h17c18.778 0 34-15.222 34-34s-15.222-34-34-34h-34v68zm17-51h17c9.389 0 17 7.611 17 17s-7.611 17-17 17h-17V39z',
  // L
  'M270 22L270 90L304 90',
  // E
  'M320 22L320 90L354 90',
  'M320 56L346 56',
  'M320 22L354 22',
  // G
  'M387 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C420.433 36.994 405.61 22 387 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z',
  // E
  'M437 22L437 90L471 90',
  'M437 56L463 56',
  'M437 22L471 22',
  // N
  'M487 90V55.74C487.567 36.993 502.39 22 521 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z',
  'M487 22L487 90',
  // D
  'M571 22h17c18.778 0 34 15.222 34 34s-15.222 34-34 34h-17V22zm17 51c9.389 0 17-7.611 17-17s-7.611-17-17-17v34z',
  // Question mark
  'M642 39c0-9.389 7.611-17 17-17s17 7.611 17 17c0 9.389-7.611 17-17 17v8.5',
];

// The circle for the question mark
const splashCircles = [
  { cx: 659, cy: 81.5, r: 4 },
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
        transition: { duration: 1.1, delay: i * 0.13, ease: 'easeInOut' },
      }));
      // Hold for 2 seconds
      await new Promise(res => setTimeout(res, 2000));
      // Undo (reverse) animation
      await controls.start(i => ({
        pathLength: 0,
        transition: { duration: 1.1, delay: i * 0.13, ease: 'easeInOut' },
      }));
      // Hide splash
      setTimeout(() => {
        setShow(false);
        if (onFinish) onFinish();
      }, 600);
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
              transition={{ duration: 1.1, delay: i * 0.13, ease: 'easeInOut' }}
            />
          ))}
          {splashCircles.map((c, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              initial={{ pathLength: 0 }}
              animate={controls}
              stroke={accent}
              style={{ filter: getGlow() }}
              fill="none"
              strokeWidth={2}
              transition={{ duration: 1.1, delay: (splashPaths.length + i) * 0.13, ease: 'easeInOut' }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  );
};

export default SplashScreen; 
