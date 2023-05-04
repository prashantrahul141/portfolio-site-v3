import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-primary-theme-bg'>
      <NavigationBar defaultValue={0} />
    </div>
  );
};

export default Home;
