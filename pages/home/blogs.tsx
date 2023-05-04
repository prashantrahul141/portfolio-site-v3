import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { FC } from 'react';

const Blogs: FC = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
      <NavigationBar defaultValue={1} />
    </div>
  );
};

export default Blogs;
