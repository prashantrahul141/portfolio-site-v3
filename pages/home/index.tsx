import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { NextPage } from 'next';

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
        <NavigationBar defaultValue={0} />
      </div>
    </>
  );
};

export default Home;
