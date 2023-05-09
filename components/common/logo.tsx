import type { FC } from 'react';
import { motion } from 'framer-motion';

const variantsForHex = {
  preloader: {
    pathLength: [0, 1, 1],
    transition: { delay: 1, duration: 1.5, ease: 'easeInOut' },
  },
  page: {
    pathLength: [1, 1, 1],
    transition: { duration: Infinity },
  },
};

const variantsForText = {
  preloader: {
    opacity: [0, 1, 1],
    transition: { duration: 1, delay: 1.9, ease: 'easeInOut' },
  },
  page: {
    opacity: [1, 1, 1],
    transition: { duration: Infinity },
  },
};

const LogoSvg: FC<{ variant: 'preloader' | 'page' }> = ({
  variant = 'page',
}) => (
  <motion.svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='17.927 0 155.976 173.832'>
    <motion.path
      variants={variantsForText}
      animate={
        variant === 'preloader'
          ? variantsForText.preloader
          : variantsForText.page
      }
      d='M85.037 128.43H71.852V47.097h27.285c2.127-.01 4.25.135 6.358.432 3.394.495 6.344 1.417 8.851 2.767a22.904 22.904 0 0 1 5.378 3.938 19.578 19.578 0 0 1 3.434 4.612 24.465 24.465 0 0 1 2.873 11.651v.099a26.404 26.404 0 0 1-.845 6.743 24.211 24.211 0 0 1-.722 2.264 20.522 20.522 0 0 1-4.765 7.377 19.921 19.921 0 0 1-4.958 3.58 25.72 25.72 0 0 1-3.201 1.381 29.044 29.044 0 0 1-5.235 1.294 41.221 41.221 0 0 1-5.433.458 55.84 55.84 0 0 1-1.082.011H85.037v34.726Zm0-69.975v24.413h13.708c3.22 0 5.853-.502 7.899-1.502a10.84 10.84 0 0 0 3.248-2.386c.535-.585 1-1.23 1.387-1.922 1.044-1.872 1.566-3.982 1.566-6.331.008-1.223-.15-2.44-.469-3.62a11.63 11.63 0 0 0-1.097-2.647 10.982 10.982 0 0 0-3.669-3.808 13.762 13.762 0 0 0-.966-.566c-1.739-.924-3.871-1.456-6.395-1.595a25.192 25.192 0 0 0-1.373-.036H85.037Z'
      style={{
        fill: '#1df2dd',
      }}
    />
    <motion.g>
      <motion.path
        variants={variantsForHex}
        animate={
          variant === 'preloader'
            ? variantsForHex.preloader
            : variantsForHex.page
        }
        d='m0.2 92.375 46.188-80h92.378l46.185 80-46.185 80H46.188L0 92.900z'
        style={{
          fill: 'transparent',
          stroke: '#1df2dd',
          strokeWidth: '11.1817px',
        }}
        transform='matrix(-.00562 .8685 -.8685 -.00562 176.43 7.213)'
      />
    </motion.g>
  </motion.svg>
);

export default LogoSvg;
