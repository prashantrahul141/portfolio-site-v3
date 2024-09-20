import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import CustomCursor from '@/components/common/customCursor';
// import useIsMobile from '@/hooks/useIsMobile';
import BackgroundBlob from '@/components/common/backgroundBlob';

export default function App({ Component, pageProps }: AppProps) {
  // const isMobile = useIsMobile();

  return (
    <>
      <div className='fixed -z-10 h-screen w-screen bg-primary-theme-bg' />
      <Component {...pageProps} />
      {/* {!isMobile && <CustomCursor key={'customCursor'}></CustomCursor>} */}
      <BackgroundBlob />
    </>
  );
}
