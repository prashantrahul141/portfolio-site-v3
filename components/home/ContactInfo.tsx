import type { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FillGithubIcon,
  FillInstagramIcon,
  FillLinkedInIcon,
  FillTwitterIcon,
} from '../common/icons';

const ContactInfo: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.8 }}
      className='flex min-h-screen items-center justify-center text-white'>
      <div className='w-full max-w-5xl px-8'>
        <div className='mb-4 sm:mb-8'>
          <span className=' font-archivo-narrow text-3xl text-primary-theme-white-100 sm:text-6xl'>
            Getting in touch with me
          </span>
        </div>

        <div className='w-full max-w-lg px-0 sm:px-2'>
          <span className='font-sans tracking-wide text-primary-theme-white-200'>
            Although I&apos;m currently a student and not looking for any long
            term commitment other than small projects, my inbox is always open!
          </span>
        </div>

        <div className='mt-12 flex items-center justify-center gap-4'>
          <Link
            href={'https://github.com/prashantrahul141'}
            passHref={true}
            className='flex h-12 w-12 items-center justify-center text-2xl text-primary-theme-white-100 transition-transform duration-500 hover:-translate-y-[.20rem] hover:text-primary-theme-cyan-100'
            target='_blank'>
            <span>
              <FillGithubIcon></FillGithubIcon>
            </span>
          </Link>

          <Link
            href={'https://www.linkedin.com/in/prashantrahul141/'}
            passHref={true}
            className='flex h-12 w-12 items-center justify-center text-2xl text-primary-theme-white-100 transition-transform duration-500 hover:-translate-y-[.20rem] hover:text-primary-theme-cyan-100'
            target='_blank'>
            <span>
              <FillLinkedInIcon></FillLinkedInIcon>
            </span>
          </Link>

          <Link
            href={'https://twitter.com/prashrahul141'}
            passHref={true}
            className='flex h-12 w-12 items-center justify-center text-2xl text-primary-theme-white-100 transition-transform duration-500 hover:-translate-y-[.20rem] hover:text-primary-theme-cyan-100'
            target='_blank'>
            <span>
              <FillTwitterIcon></FillTwitterIcon>
            </span>
          </Link>

          <Link
            href={'https://instagram.com/prashantrahul141'}
            passHref={true}
            className='flex h-12 w-12 items-center justify-center text-2xl text-primary-theme-white-100 transition-transform duration-500 hover:-translate-y-[.20rem] hover:text-primary-theme-cyan-100'
            target='_blank'>
            <span>
              <FillInstagramIcon></FillInstagramIcon>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
