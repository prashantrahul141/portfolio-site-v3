import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import GalleryImageList from '@/components/gallery/GalleryImageList';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'path';
import { motion } from 'framer-motion';
import fsPromises from 'fs/promises';
import FullImageView from '@/components/gallery/FullImageView';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  const [fullImage, setFullImage] = useState<null | string>(null);

  useEffect(() => {
    window.onpopstate = function () {
      if (fullImage) {
        setFullImage(null);
        window.history.forward();
      }
    };
  }, [fullImage]);

  return (
    <>
      <HeadComponent pageTitle='Gallery'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center bg-primary-theme-bg pt-24 sm:pt-32'>
        <NavigationBar defaultValue={2} />
        <GalleryImageList
          filesPath={filesPath}
          callBackFn={(target: null | string) => {
            setFullImage(target);
          }}></GalleryImageList>
        <AnimatePresence>
          {fullImage && (
            <FullImageView
              image={fullImage}
              callBackFn={(target: null | string) => {
                setFullImage(target);
              }}></FullImageView>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {fullImage && (
            <motion.div
              className='fixed left-0 top-0 z-10 h-screen w-screen bg-primary-theme-bg/80 backdrop-blur-md'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setFullImage(null);
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}></motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
