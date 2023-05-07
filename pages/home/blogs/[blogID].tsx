import blogsJson from '../../../public/blogs/blogs.json';
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import type { TBlog } from '@/utils/types';
import type { IParamsBlog } from '@/utils/types';
import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import BlogView from '@/components/blogs/BlogView';
import path from 'path';
import fsPromises from 'fs/promises';
import { motion } from 'framer-motion';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = blogsJson.blogs.map((blog) => {
    return { params: { blogID: blog.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  blog: TBlog & { fileContent: string };
}> = async (context: GetStaticPropsContext) => {
  const { blogID } = context.params as IParamsBlog;
  // @ts-ignore
  const blog = blogsJson.blogs[blogID] as TBlog;

  const filePath = path.join(process.cwd(), 'public', 'blogs', blog.File);
  const fileContent = (await fsPromises.readFile(filePath)).toString();

  return {
    props: {
      blog: { ...blog, fileContent },
    },
  };
};

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
}) => {
  return (
    <>
      <HeadComponent pageTitle='Blogs'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center bg-primary-theme-bg pt-24 sm:pt-32'>
        <NavigationBar defaultValue={1} />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
          className='w-full max-w-5xl px-2'>
          <BlogView blog={blog}></BlogView>
        </motion.div>
      </div>
    </>
  );
};

export default BlogPage;
