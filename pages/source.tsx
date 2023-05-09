import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SourcePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push(
      'https://github.com/prashantrahul141/prashantrahul141.github.io'
    );
  }, [router]);
  return <></>;
};

export default SourcePage;
