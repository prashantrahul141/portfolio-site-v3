import type { FC } from 'react';
import { motion } from 'framer-motion';

const Repo: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}></motion.div>
  );
};

const ProjectsInfo: FC = () => {
  return (
    <div className='h-screen text-2xl text-white'>
      <Repo></Repo>
    </div>
  );
};

export default ProjectsInfo;
