import Head from 'next/head';
import type { FC } from 'react';

const HeadComponent: FC<{ pageTitle?: string; description?: string }> = ({
  pageTitle,
  description,
}) => {
  const _description = description
    ? description
    : 'I am a Software Developer, specializing in building Modern, Robust, Full-Stack Web Applications. I also work with/on Compilers, Interpreters, Graphics APIs, Games, Desktop Applications and Dev-Tools.';

  return (
    <Head>
      {pageTitle === undefined ? (
        <title>{`Prashant Rahul`}</title>
      ) : (
        <title>{`${pageTitle} | Prashant Rahul`}</title>
      )}

      <meta
        name='viewport'
        content='width=device-width, user-scalable=no'></meta>
      <meta name='darkreader-lock' />

      <meta
        name='twitter:image:src'
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.webp'
      />
      <meta name='twitter:site' content='@prashantrahul' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Prashant Rahul' />
      <meta name='twitter:description' content={_description} />
      <meta property='twitter:domain' content='prashantrahul.com' />
      <meta property='twitter:url' content='https://prashantrahul.com' />

      <meta
        content='https://raw.githubusercontent.com/prashantrahul141/prashantrahul141.github.io/main/public/meta/demo.webp'
        property='og:image'
      />
      <meta property='og:image:alt' content='My Portfolio Website.' />
      <meta property='og:site_name' content='prashantrahul' />
      <meta property='og:type' content='object' />
      <meta property='og:title' charSet='UTF-8' content='Prashant Rahul' />
      <meta property='og:description' charSet='UTF-8' content={_description} />
      <meta property='og:url' content='https://prashantrahul.com' />

      <meta content='#fefefe' data-react-helmet='true' name='theme-color' />
    </Head>
  );
};

export default HeadComponent;
