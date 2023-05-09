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

      <meta name='title' charSet='UTF-8' content='Prashant Rahul' />
      <meta
        name='description'
        charSet='UTF-8'
        content='My portfolio website.'
      />

      <meta content='Prashant Rahul' property='og:title' />
      <meta content='My portfolio website.' property='og:description' />
      <meta content='https://prashantrahul.com' property='og:url' />
      <meta
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.png'
        property='og:image'
      />
      <meta content='#0c1d37' data-react-helmet='true' name='theme-color' />

      <meta
        name='twitter:card'
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.png'
      />
      <meta property='twitter:domain' content='prashantrahul.com' />
      <meta property='twitter:url' content='https://prashantrahul.com' />
      <meta name='twitter:title' content='Prashant Rahul' />
      <meta name='twitter:description' content='My portfolio website.' />
      <meta
        name='twitter:image'
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.png'
      />
    </Head>
  );
};

export default HeadComponent;
