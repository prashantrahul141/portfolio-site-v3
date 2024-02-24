import { motion } from 'framer-motion';

const BackgroundBlob = () => {
  return (
    <motion.div
      key='blob-object'
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: 999, duration: 5, ease: 'linear' }}
      className='fixed left-1/4 top-1/3 -z-10 h-60 w-60 rounded-[90%] bg-gradient-to-tr from-primary-theme-cyan-100 to-primary-theme-white-50/40 opacity-40 blur-3xl md:left-1/4 md:h-96 md:w-96'></motion.div>
  );
};

export default BackgroundBlob;
