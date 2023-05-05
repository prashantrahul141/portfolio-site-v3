import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getRouter = () => {
    if (router.asPath.toLowerCase().includes('home')) {
      return 0;
    }
    return router.asPath;
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={getRouter()}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          duration: 0.75,
          ease: 'easeInOut',
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          animateState: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
          exitState: {
            clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          },
        }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
