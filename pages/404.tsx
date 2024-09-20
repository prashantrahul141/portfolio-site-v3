import HeadComponent from '@/components/common/HeadComponent';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FourZeroFour: NextPage = () => {
  const [pathName, setPathName] = useState<string>('');

  useEffect(() => {
    const _path =
      window.location.pathname.length > 15
        ? `${window.location.pathname.slice(0, 15)}...`
        : window.location.pathname;

    setPathName(_path.slice(1, _path.length));
  }, []);

  return (
    <>
      <HeadComponent pageTitle='404' />
      <div className='flex h-screen w-full flex-col items-center justify-center gap-12'>
        <div className='font-archivo-narrow text-3xl tracking-wide text-primary-theme-white-50 sm:text-4xl md:text-5xl'>
          404 - Page not found.
        </div>
        <div className='font-archivo-narrow text-lg tracking-wide sm:text-xl md:text-2xl'>
          <Link href={'/'}>
            <span className='text-primary-theme-white-200'>
              prashantrahul.com/
            </span>
          </Link>
          <span className='text-primary-theme-white-50'>{pathName}</span>
          <span className='text-primary-theme-white-50'>&nbsp;!? 🤨</span>
        </div>
        <div className='font-inconsolata text-2xl tracking-wide text-primary-theme-cyan-100'>
          <Link href={'/'}>
            <button
              type='button'
              className='animate-bounce-slow rounded border border-primary-theme-white-200 px-2 py-1  font-inconsolata text-xl tracking-wide text-primary-theme-white-100/90 transition-all duration-500 ease-in-out hover:border-primary-theme-white-100 hover:text-primary-theme-white-50'>
              Home
            </button>
          </Link>
        </div>
      </div>
      ;
    </>
  );
};

export default FourZeroFour;
