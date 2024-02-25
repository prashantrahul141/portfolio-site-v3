import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import BlogsList from '@/components/blogs/BlogsList';
import blogs from '../../public/blogs/blogs.json';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { TBlog } from '@/utils/types';

export const getStaticProps: GetStaticProps<{ blogs: Array<TBlog> }> = () => {
  blogs.blogs.reverse();
  return {
    props: blogs,
  };
};

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}) => {
  return (
    <>
      <HeadComponent pageTitle='Blogs'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center pt-16'>
        <NavigationBar defaultValue={1} />
        <BlogsList blogs={blogs}></BlogsList>
      </div>
    </>
  );
};

export default Blogs;
