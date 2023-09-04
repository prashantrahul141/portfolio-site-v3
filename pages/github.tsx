import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GithubPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('https://github.com/prashantrahul141');
  }, [router]);
  return <></>;
};

export default GithubPage;
