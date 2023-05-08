import { months } from '@/utils/constants';
import type { TBlog } from '@/utils/types';
import type { FC } from 'react';

const BlogView: FC<{ blog: TBlog & { fileContent: string } }> = ({ blog }) => {
  const date = new Date(blog.Date);
  const dateString = `${
    months[date.getDay()]
  } ${date.getMonth()}, ${date.getFullYear()}`;

  return (
    <div className=''>
      <div className='mb-6 flex w-full flex-col items-center justify-center'>
        <span className='px-1 font-archivo-narrow text-3xl tracking-wide text-primary-theme-white-50 sm:px-6'>
          {blog.Title}
          <div className='my-2 pl-[.12rem] font-inconsolata text-sm leading-none text-primary-theme-white-200'>
            {dateString}
          </div>
        </span>
      </div>

      <div className='px-2'></div>
    </div>
  );
};

export default BlogView;