import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import GalleryImageList from '@/components/gallery/GalleryImageList';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'path';
import { motion } from 'framer-motion';
import fsPromises from 'fs/promises';
import FullImageView from '@/components/gallery/FullImageView';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useHashRouteToggle } from '@/hooks/HashRouteToggle';

export const getStaticProps: GetStaticProps<{
  filesPath: Array<{ original: string }>;
}> = async () => {
  const dirPath = path.join(process.cwd(), 'public', 'gallery-images');
  const files = await fsPromises.readdir(dirPath);
  const filesPath = files.map((file) => {
    return { original: `/gallery-images//${file}` };
  });

  return {
    props: { filesPath },
  };
};

const Gallery: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  filesPath,
}) => {
  const [fullImage, setFullImage] = useState<string>(
    filesPath[0].original || '1'
  );
  const [isActive, toggleActive] = useHashRouteToggle('#image');

  return (
    <>
      <HeadComponent pageTitle='Gallery'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center bg-primary-theme-bg pt-24 sm:pt-32'>
        <NavigationBar defaultValue={2} />
        <GalleryImageList
          filesPath={filesPath}
          callBackFn={(target: string) => {
            setFullImage(target);
            toggleActive(true);
          }}></GalleryImageList>
        <AnimatePresence>
          {isActive && <FullImageView image={fullImage}></FullImageView>}
        </AnimatePresence>
        <AnimatePresence>
          {isActive && (
            <motion.div
              className='fixed left-0 top-0 z-10 h-screen w-screen bg-primary-theme-bg/80 backdrop-blur-md'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                toggleActive(false);
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}></motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
