import HeadComponent from '@/components/common/HeadComponent';
import Logo from '@/components/common/logo';
import type { NextPage } from 'next';
import Link from 'next/link';

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Landing: NextPage = () => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <div className='flex h-screen w-screen flex-col items-center justify-center gap-12 bg-primary-theme-bg'>
        <div className=''>
          <div className='h-20 w-20'>
            <Logo variant='preloader'></Logo>
          </div>
        </div>
        <Link href={'/home'}>
          <button className='animate-bounce-slow rounded border border-primary-theme-white-200 px-2 py-1  font-inconsolata text-xl tracking-wide text-primary-theme-white-100/90 transition-all duration-500 ease-in-out hover:border-primary-theme-white-100 hover:text-primary-theme-white-50'>
            Explore
          </button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
