import HeadComponent from '@/components/common/HeadComponent';
import type { NextPage } from 'next';

const FourZeroFour: NextPage = () => {
  return (
    <>
      <HeadComponent pageTitle='404'></HeadComponent>
      <div className='text-2xl text-white'>THIS IS 404</div>;
    </>
  );
};

export default FourZeroFour;
