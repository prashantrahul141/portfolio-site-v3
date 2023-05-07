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

export const getStaticPaths: GetStaticPaths = () => {
  const paths = blogsJson.blogs.map((blog) => {
    return { params: { blogID: blog.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ blog: TBlog }> = (
  context: GetStaticPropsContext
) => {
  const { blogID } = context.params as IParamsBlog;
  // @ts-ignore
  const blog = blogsJson.blogs[blogID] as TBlog;

  return {
    props: {
      blog: blog,
    },
  };
};

const BlogPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
}) => {
  return (
    <>
      <HeadComponent pageTitle='Blogs'></HeadComponent>
      <div className='min-w-screen flex min-h-screen items-start justify-center bg-primary-theme-bg pt-20 sm:pt-24'>
        <NavigationBar defaultValue={1} />
        <div className='w-full max-w-5xl border px-2'>
          <BlogView blog={blog}></BlogView>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
