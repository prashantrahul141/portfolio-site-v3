import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { TRepo, graphqlResponse } from '@/utils/types';

const Repo: FC<{ repo: TRepo }> = ({ repo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}></motion.div>
  );
};

const ProjectsInfo: FC<{ ghResponse: graphqlResponse }> = ({ ghResponse }) => {
  return (
    <div className='h-screen text-2xl text-white'>
      {ghResponse.user.pinnedItems.edges.map((repo, index) => {
        return <Repo key={index} repo={repo}></Repo>;
      })}
    </div>
  );
};

export default ProjectsInfo;
