import { chunkArrayInGroups } from '@/utils/util';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const GalleryImageList: FC<{
  filesPath: Array<{
    original: string;
  }>;
}> = ({ filesPath }) => {
  const ArrayChunks = chunkArrayInGroups<{ original: string }>(filesPath, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: 'easeInOut',
      }}
      className='max-w-5xl'>
      <div className='mb-8 px-2 sm:mb-8 sm:px-2 xl:px-0'>
        <span className='font-archivo-narrow text-3xl text-primary-theme-white-100 sm:text-4xl lg:text-5xl xl:text-6xl'>
          Some photos I have taken
        </span>
      </div>

      {/* photo gallery */}
      <div className='flex flex-col gap-3 md:flex-row'>
        {ArrayChunks.map((eachChunk, chunkIndex) => {
          return (
            // column
            <div className='flex flex-col gap-3' key={chunkIndex}>
              {eachChunk.map((eachImage, imageIndex) => {
                return (
                  // photo
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: (imageIndex * chunkIndex) / 8,
                      ease: 'easeInOut',
                    }}
                    className=''
                    key={`${chunkIndex}${imageIndex}`}>
                    <img
                      className='h-full w-full rounded-md border border-primary-theme-white-200/50 object-cover sm:border-primary-theme-white-200/30 md:rounded-xl'
                      src={eachImage.original}
                      alt='Image'></img>
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default GalleryImageList;
