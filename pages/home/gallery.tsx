import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { NextPage } from 'next';

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Gallery: NextPage = () => {
  return (
    <>
      <HeadComponent pageTitle='Gallery'></HeadComponent>
      <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
        <NavigationBar defaultValue={2} />
      </div>
    </>
  );
};

export default Gallery;
