import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { TRepo, graphqlResponse } from '@/utils/types';
import { OutlineGHRepo, OutlineStar } from '../common/icons';
import Link from 'next/link';

const Repo: FC<{ repo: TRepo; index: number }> = ({ repo, index }) => {
  const currentRepo = repo.node;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index / 10 }}
      className='group min-w-full max-w-[30rem] rounded-md bg-primary-theme-bg-50 px-5 py-7 transition-colors duration-300 hover:bg-primary-theme-bg-40 sm:px-7'>
      <Link href={currentRepo.url} passHref={true} target='_blank'>
        <div>
          <h1 className='flex items-center gap-2'>
            <span className='text-sm text-primary-theme-repo-100'>
              <OutlineGHRepo></OutlineGHRepo>
            </span>
            <span className='font-inconsolata text-base capitalize tracking-wide text-primary-theme-cyan-100 transition-colors duration-500 group-hover:text-primary-theme-cyan-100 sm:text-primary-theme-cyan-100/90'>
              {currentRepo.name}
            </span>
          </h1>
        </div>

        <div className='h-full pb-8 pl-1 pt-[.3rem]'>
          <p className='font-sans text-sm tracking-wide text-primary-theme-white-100 transition-colors duration-500 group-hover:text-primary-theme-white-100 sm:text-primary-theme-white-100/70'>
            {currentRepo.description}
          </p>
        </div>

        <div className='flex -translate-y-8 flex-col justify-end pl-1'>
          <span className='flex items-center gap-5 font-inconsolata text-primary-theme-white-100 transition-colors duration-500 group-hover:text-primary-theme-white-100 sm:text-primary-theme-white-100/70'>
            <span className='flex items-center gap-1 text-sm '>
              <OutlineStar></OutlineStar>
              <span>{currentRepo.stargazerCount}</span>
            </span>
            <span className='text-sm tracking-wide'>
              {currentRepo.primaryLanguage.name}
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const ProjectsInfo: FC<{ ghResponse: graphqlResponse }> = ({ ghResponse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='flex min-h-screen items-center justify-center text-white'>
      <div className='w-full max-w-5xl px-4 sm:px-8'>
        <div className='mb-5 sm:mb-12'>
          <span className=' font-archivo-narrow text-3xl text-primary-theme-white-100 sm:text-6xl'>
            Projects I&apos;ve built
          </span>
        </div>
        <div className='grid w-full gap-2 sm:grid-cols-2 '>
          {ghResponse.user.pinnedItems.edges.map((repo, index) => {
            return <Repo key={index} repo={repo} index={index}></Repo>;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsInfo;
