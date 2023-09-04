import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const TwitterPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('https://twitter.com/prashrahul141');
  }, [router]);
  return <></>;
};

export default TwitterPage;
