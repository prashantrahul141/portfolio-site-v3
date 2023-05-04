import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
      <NavigationBar defaultValue={2} />
    </div>
  );
};

export default Gallery;
