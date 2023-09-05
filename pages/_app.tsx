import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import CustomCursor from '@/components/common/customCursor';
import useIsMobile from '@/hooks/useIsMobile';
import BackgroundBlob from '@/components/common/backgroundBlob';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getRouter = () => {
    if (router.asPath.toLowerCase() !== '/') {
      return 0;
    }
    return router.asPath;
  };

  const isMobile = useIsMobile();

  return (
    <>
      <div className='fixed -z-20 h-screen w-screen bg-primary-theme-bg'></div>
      <AnimatePresence mode='wait'>
        <div className='fixed -z-10 h-screen w-screen bg-primary-theme-bg'></div>
        <motion.div
          key='back-ground-blob'
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.2 }}>
          <BackgroundBlob></BackgroundBlob>
        </motion.div>
        <motion.div
          key={getRouter()}
          initial={{
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
          animate={{
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          }}
          exit={{
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            opacity: 0.7,
          }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}>
          <Component {...pageProps} />
        </motion.div>

        {router.asPath.toLocaleLowerCase() !== '/' && !isMobile && (
          <CustomCursor key={'customCursor'}></CustomCursor>
        )}
      </AnimatePresence>
    </>
  );
}
