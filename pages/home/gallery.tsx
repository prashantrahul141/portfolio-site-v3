import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import GalleryImageList from '@/components/gallery/GalleryImageList';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'path';
import fsPromises from 'fs/promises';
import { AnimatePresence } from 'framer-motion';

export const getStaticProps: GetStaticProps<{
  filesPath: Array<{ original: string }>;
}> = async () => {
  const dirPath = path.join(process.cwd(), 'public', 'gallery-images');
  const files = await fsPromises.readdir(dirPath);
  const filesPath = files.map((file) => {
    return { original: `/gallery-images/${file}` };
  });

  return {
    props: { filesPath },
  };
};

const Gallery: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  filesPath,
}) => {
  return (
    <>
      <HeadComponent pageTitle='Gallery'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center bg-primary-theme-bg pt-24 sm:pt-32'>
        <NavigationBar defaultValue={2} />
        <GalleryImageList filesPath={filesPath}></GalleryImageList>
        <AnimatePresence></AnimatePresence>
        <AnimatePresence></AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
