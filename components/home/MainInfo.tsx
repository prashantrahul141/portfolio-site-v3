import type { FC } from 'react';
import { motion } from 'framer-motion';

const MainInfo: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
      className='flex min-h-screen items-center justify-center'>
      <div className='flex w-full max-w-5xl flex-col gap-2 px-8 md:gap-4'>
        <div>
          <p className='font-inconsolata text-base text-primary-theme-cyan-100 sm:text-lg'>
            Hi, my name is
          </p>
        </div>
        <div className='mt-4'>
          <p className='font-archivo-narrow text-4xl tracking-wide text-primary-theme-white-100 sm:text-5xl md:text-6xl lg:text-7xl'>
            Prashant Rahul.
          </p>
        </div>
        <div>
          <p className='font-archivo-narrow text-4xl tracking-wide text-primary-theme-white-200 sm:text-5xl md:text-6xl lg:text-7xl'>
            I like to build stuff.
          </p>
        </div>
        <div className='mt-4'>
          <p className='max-w-lg text-balance font-sans text-sm tracking-wide text-primary-theme-white-200 sm:text-base'>
            I am a software developer working in a lot of fields with a specialization
            in building and tinkering compilers and interpreters. I also work on creating
            full-stack web experiences, emulators, graphics APIs, games and cross platform applications.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MainInfo;
