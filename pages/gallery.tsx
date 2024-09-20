import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import GalleryImageList from '@/components/gallery/GalleryImageList';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import path from 'node:path';
import fsPromises from 'node:fs/promises';

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
      <HeadComponent
        pageTitle='Gallery'
        description='Some photos which I have clicked'
      />
      <div className='min-w-screen flex min-h-screen items-start justify-center py-24 sm:pt-32'>
        <NavigationBar defaultValue={2} />
        <GalleryImageList filesPath={filesPath} />
      </div>
    </>
  );
};

export default Gallery;
