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
  return <>{blog.Subtext}</>;
};

export default BlogPage;
