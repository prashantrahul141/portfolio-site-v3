import { motion } from 'framer-motion';
import type { FC } from 'react';

const FullImageView: FC<{
  image: string;
}> = ({ image }) => {
  return (
    <motion.img
      initial={{ opacity: 0, translateX: '-50%', translateY: '-40%' }}
      animate={{ opacity: 1, translateX: '-50%', translateY: '-50%' }}
      exit={{ opacity: 0, translateX: '-50%', translateY: '-40%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      alt='Image'
      className='fixed left-1/2 top-1/2 z-20 max-h-[90vh] max-w-[90vw] -translate-x-1/2'
      src={image}></motion.img>
  );
};

export default FullImageView;
