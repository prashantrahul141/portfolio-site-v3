import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorWidth = 4;
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [mousePressed, setMousePressed] = useState<boolean>(false);

  useEffect(() => {
    const storeMousePos = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', storeMousePos);
    return () => {
      window.removeEventListener('mousemove', storeMousePos);
    };
  });

  useEffect(() => {
    const updateMouseState = (target: boolean) => {
      setMousePressed(target);
    };

    window.addEventListener('mousedown', () => updateMouseState(true));
    window.addEventListener('mouseup', () => {
      updateMouseState(false);
    });

    return () => {
      window.removeEventListener('mousedown', () => updateMouseState(true));
      window.removeEventListener('mouseup', () => updateMouseState(false));
    };
  });

  return (
    <motion.div
      className='pointer-events-none fixed left-0 top-0 h-3 w-3 rounded-full bg-primary-theme-white-100'
      animate={{
        x: mousePos.x - cursorWidth,
        y: mousePos.y - cursorWidth,
        scale: mousePressed ? 5 : 1,
      }}
      transition={{
        duration: 0.07,
        delay: 0,
        scale: { type: 'spring', duration: 0.4 },
      }}></motion.div>
  );
};

export default CustomCursor;
