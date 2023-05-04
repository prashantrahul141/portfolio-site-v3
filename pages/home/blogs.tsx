import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { FC } from 'react';

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Blogs: FC = () => {
  return (
    <>
      <HeadComponent pageTitle='Blogs'></HeadComponent>
      <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
        <NavigationBar defaultValue={1} />
      </div>
    </>
  );
};

export default Blogs;
