import { navigationOptions } from '@/utils/constantTSX';
import type { TNavigationOptionsID } from '@/utils/types';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Logo from '../logo';

const NavigationBarLarge: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [activeTab, setActiveTab] =
    useState<TNavigationOptionsID>(defaultValue);

  return (
    <AnimatePresence>
      <nav className='flex h-fit w-full items-center bg-primary-theme-bg/60 text-white backdrop-blur-md'>
        <Link href={'/'} className='ml-16 aspect-square h-11'>
          <Logo variant='page' />
        </Link>
        <div className='flex flex-grow items-center justify-end gap-7 py-7 pr-16'>
          {navigationOptions.map((option) => (
            <Link
              onClick={() => setActiveTab(option.id)}
              key={option.id}
              href={option.link}>
              <button
                type='button'
                className={`${
                  activeTab === option.id
                    ? 'text-primary-theme-cyan-100/100 hover:text-primary-theme-cyan-100/100'
                    : 'text-primary-theme-white-50/70 hover:text-primary-theme-white-100'
                } relative px-3 py-1 font-inconsolata text-base tracking-wide  transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}>
                {activeTab === option.id && (
                  <motion.span
                    key={'navBarLarge'}
                    layoutId='bubble'
                    className='absolute inset-0 z-10 rounded-sm border-b-2 border-b-primary-theme-cyan-100/90 bg-transparent'
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.35 }}
                  />
                )}
                {option.text}
              </button>
            </Link>
          ))}
          <Link target='_blank' href={'/Prashant Rahul CV.pdf'}>
            <button
              type='button'
              className='flex w-fit items-center justify-center gap-2 rounded-md border border-primary-theme-bg-40 bg-primary-theme-bg-50/40 p-1 px-4 font-inconsolata text-primary-theme-white-50/70 transition-all duration-150 hover:bg-primary-theme-bg-40 hover:text-primary-theme-white-100 sm:px-7'>
              Resume
            </button>
          </Link>
        </div>
      </nav>
    </AnimatePresence>
  );
};

export default NavigationBarLarge;
