import type { TBlog } from '@/utils/types';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { months } from '@/utils/constants';

const SmallBlogView: FC<{ blog: TBlog }> = ({ blog }) => {
  const date = new Date(blog.Date);
  const dateString = `${
    months[date.getDay()]
  } ${date.getMonth()}, ${date.getFullYear()}`;

  return (
    <Link href={`/home/blogs/${blog.id}`} className=''>
      <div className='group mb-4 min-w-full  rounded-md bg-primary-theme-bg-50 px-4 py-6 transition-colors  duration-300 hover:bg-primary-theme-bg-40 sm:px-6'>
        <div className='pb-2'>
          <h1 className='flex items-center'>
            <span className='font-inconsolata text-base leading-snug tracking-wide text-primary-theme-cyan-100 transition-colors duration-500 group-hover:text-primary-theme-cyan-100 sm:text-lg sm:text-primary-theme-cyan-100/80'>
              {blog.Title}
            </span>
          </h1>
        </div>

        <div className='pb-4'>
          <span className='font-inconsolata text-sm text-primary-theme-white-200'>
            {dateString}
          </span>
        </div>

        <div className='h-full'>
          <p className='font-sans text-sm leading-snug tracking-wide text-primary-theme-white-100/70'>
            {blog.Subtext}
          </p>
        </div>
      </div>
    </Link>
  );
};

const BlogsList: FC<{ blogs: Array<TBlog> }> = ({ blogs }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
      className='w-full max-w-5xl px-2 pt-8'>
      <div className='mb-8 px-2 sm:mb-8 sm:px-0'>
        <span className='font-archivo-narrow text-3xl text-primary-theme-white-100 sm:text-4xl lg:text-5xl xl:text-6xl'>
          Some blogs I have posted
        </span>
      </div>

      <div className='flex w-full flex-col gap-4'>
        {blogs.map((blog) => {
          return <SmallBlogView key={blog.id} blog={blog}></SmallBlogView>;
        })}
      </div>
    </motion.div>
  );
};

export default BlogsList;
