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

      <meta
        name='twitter:image:src'
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.png'
      />
      <meta name='twitter:site' content='@prashantrahul' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Prashant Rahul' />
      <meta name='twitter:description' content='My portfolio website.' />
      <meta property='twitter:domain' content='prashantrahul.com' />
      <meta property='twitter:url' content='https://prashantrahul.com' />

      <meta
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.png'
        property='og:image'
      />
      <meta property='og:image:alt' content='My Portfolio Website.' />
      <meta property='og:site_name' content='prashantrahul' />
      <meta property='og:type' content='object' />
      <meta property='og:title' charSet='UTF-8' content='Prashant Rahul' />
      <meta
        property='og:description'
        charSet='UTF-8'
        content='My portfolio website.'
      />
      <meta property='og:url' content='https://prashantrahul.com' />

      <meta content='#fefefe' data-react-helmet='true' name='theme-color' />
    </Head>
  );
};

export default HeadComponent;
