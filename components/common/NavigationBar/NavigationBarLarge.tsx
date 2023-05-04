import { navigationOptions } from '@/utils/constantTSX';
import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { TNavigationOptionsID } from '@/utils/types';

const NavigationBarLarge: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [activeTab, setActiveTab] =
    useState<TNavigationOptionsID>(defaultValue);

  return (
    <nav className='flex h-fit w-full gap-2 text-white'>
      {navigationOptions.map((option) => (
        <Link
          onClick={() => setActiveTab(option.id)}
          key={option.id}
          href={option.link}>
          <button
            className={`${
              activeTab === option.id
                ? 'text-primary-theme-cyan-100'
                : 'hover:text-primary-theme-white-100'
            } relative px-3 py-1 font-inconsolata text-base tracking-wide text-primary-theme-white-50 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}>
            {activeTab === option.id && (
              <motion.span
                layoutId='bubble'
                className='absolute inset-0 z-10 rounded-md bg-primary-theme-white-50/10 mix-blend-difference'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.35 }}
              />
            )}
            {option.text}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBarLarge;
