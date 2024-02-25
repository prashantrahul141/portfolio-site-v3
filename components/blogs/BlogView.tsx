// need to disable this because we will be using react-markdown renderer.
/* eslint-disable react/no-children-prop */

import type { TBlog } from '@/utils/types';
import type { FC } from 'react';
import Markdown from 'react-markdown';

const BlogView: FC<{ blog: TBlog & { fileContent: string } }> = ({ blog }) => {
  return (
    <div className='mb-12'>
      <div className='px-2'>
        <Markdown
          children={blog.fileContent}
          components={{
            p(props) {
              const { children } = props;
              return (
                <p className='text-balance py-1 text-base text-primary-theme-white-50'>
                  {children}
                </p>
              );
            },

            h1(props) {
              const { children } = props;
              return (
                <h1 className='pb-6 pt-12 text-4xl font-bold text-primary-theme-white-50'>
                  {children}
                </h1>
              );
            },

            h3(props) {
              const { children } = props;
              return (
                <h3 className='py-3 text-xl font-bold text-primary-theme-white-50'>
                  {children}
                </h3>
              );
            },

            h4(props) {
              const { children } = props;
              return (
                <h4 className='py-3 text-lg font-bold text-primary-theme-white-50'>
                  {children}
                </h4>
              );
            },

            ul(props) {
              const { children } = props;
              return <ul className=''>{children}</ul>;
            },

            a(props) {
              const { href } = props;
              return (
                <a
                  className='text-wrap text-primary-theme-cyan-200/90 underline hover:text-primary-theme-cyan-200'
                  href={href}>
                  {href}
                </a>
              );
            },

            li(props) {
              const { children } = props;
              return (
                <li className='py-1 text-base text-primary-theme-white-50'>
                  {children}
                </li>
              );
            },

            hr() {
              return (
                <div className='h-0 border-t border-primary-theme-white-50 py-2' />
              );
            },

            img(props) {
              const { alt, src } = props;
              return (
                <img
                  loading='lazy'
                  alt={alt || 'Image'}
                  src={`/blogs/${blog.File.split('/')[1]}/${src || ''}`}
                  className='my-6 rounded-lg'
                />
              );
            },

            code(props) {
              const { children } = props;
              return (
                <div className='mx-2 my-6 overflow-auto rounded-md border border-primary-theme-white-50/10 p-2 text-primary-theme-white-200'>
                  <code>{children}</code>
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default BlogView;
