import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DotsPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('https://github.com/prashantrahul141/dotfiles');
  }, [router]);
  return <></>;
};

export default DotsPage;
