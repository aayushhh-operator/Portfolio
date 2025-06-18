import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;

    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return <div className="cursor" />;
};

export default CustomCursor;