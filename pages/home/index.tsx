import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import MainInfo from '@/components/home/MainInfo';
import ProjectsInfo from '@/components/home/ProjectsInfo';
import { graphql } from '@octokit/graphql';
import { env } from '@/env.mjs';
import { GRAPH_QL_QUERY } from '@/utils/constants';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { graphqlResponse } from '@/utils/types';
import ContactInfo from '@/components/home/ContactInfo';

export const getStaticProps: GetStaticProps<{
  ghResponse: graphqlResponse;
}> = async () => {
  const ghResponse: graphqlResponse = await graphql(GRAPH_QL_QUERY, {
    headers: {
      authorization: `bearer ${env.GITHUB_GRAPHQL_API_KEY}`,
    },
  });

  return {
    props: { ghResponse },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  ghResponse,
}) => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <NavigationBar defaultValue={0} />
      <MainInfo></MainInfo>
      <ProjectsInfo ghResponse={ghResponse}></ProjectsInfo>
      <ContactInfo></ContactInfo>
    </>
  );
};

export default Home;
