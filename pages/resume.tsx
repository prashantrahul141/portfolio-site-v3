import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ResumePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    void router.push('/Prashant Rahul CV.pdf');
  }, [router]);
  return <></>;
};

export default ResumePage;
