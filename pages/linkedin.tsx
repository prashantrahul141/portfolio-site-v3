import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkedinPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('https://www.linkedin.com/in/prashantrahul141/');
  }, [router]);
  return <></>;
};

export default LinkedinPage;
