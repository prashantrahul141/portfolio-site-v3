import Head from 'next/head';
import type { FC } from 'react';

const HeadComponent: FC<{ pageTitle?: string }> = ({ pageTitle }) => {
  return (
    <Head>
      {pageTitle === undefined ? (
        <title>{`Prashant Rahul`}</title>
      ) : (
        <title>{`Prashant Rahul | ${pageTitle}`}</title>
      )}

      <meta
        name='viewport'
        content='width=device-width, user-scalable=no'></meta>
      <meta name='darkreader-lock' />
    </Head>
  );
};

export default HeadComponent;
