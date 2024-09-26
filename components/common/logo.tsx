import type { FC } from 'react';

const LogoSvg: FC<{ variant: 'preloader' | 'page' }> = () => (
  <img
    src='/logo.avif'
    alt='logo icon for prashantrahul.com'
    className='scale-75 opacity-85'
  />
);

export default LogoSvg;
