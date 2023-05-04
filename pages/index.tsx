import type { NextPage } from 'next';
import Link from 'next/link';

const Landing: NextPage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
      <Link href={'/home'}>
        <button className='animate-bounce-slow rounded border border-primary-theme-white-200 px-2 py-1  font-inconsolata text-xl tracking-wide text-primary-theme-white-100/90 transition-all duration-500 ease-in-out hover:border-primary-theme-white-100 hover:text-primary-theme-white-50'>
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Landing;
