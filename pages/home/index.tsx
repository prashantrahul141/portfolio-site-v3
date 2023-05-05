import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import MainInfo from '@/components/home/MainInfo';
import ProjectsInfo from '@/components/home/ProjectsInfo';

import type { NextPage } from 'next';

export const getStaticProps = () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <NavigationBar defaultValue={0} />
      <MainInfo></MainInfo>
      <ProjectsInfo></ProjectsInfo>
    </>
  );
};

export default Home;
