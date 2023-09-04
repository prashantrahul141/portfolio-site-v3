import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const InstagramPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('https://instagram.com/prashantrahul141/');
  }, [router]);
  return <></>;
};

export default InstagramPage;
