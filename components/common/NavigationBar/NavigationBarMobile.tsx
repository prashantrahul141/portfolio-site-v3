import type { FC } from 'react';
import { useState } from 'react';
import { OutlineCross, OutlineMenu } from '../icons';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationOptions } from '@/utils/constantTSX';
import Link from 'next/link';
import type { TNavigationOptionsID } from '@/utils/types';
import LogoSvg from '../logo';

const NavigationBarMobile: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className='flex w-full items-center justify-end p-3'>
        <div className='flex h-full flex-grow items-center justify-start'>
          <div className='h-12 w-12'>
            <LogoSvg variant='page'></LogoSvg>
          </div>
        </div>
        <button
          className='h-full'
          onClick={() => {
            setOpenMenu(true);
          }}>
          <OutlineMenu className='h-12 text-primary-theme-cyan-100'></OutlineMenu>
        </button>
      </nav>

      {openMenu && (
        <motion.div
          onClick={() => {
            setOpenMenu(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.1,
          }}
          className='fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur-[2px]'></motion.div>
      )}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ right: '-24rem' }}
            animate={{ right: '0rem' }}
            exit={{ right: '-24rem' }}
            transition={{ type: 'spring', bounce: 0.15, duration: 0.38 }}
            className='fixed top-0 z-20 h-screen w-[70vw] bg-primary-theme-bg-50 shadow-mobileNavBar'>
            <div className='flex h-14 w-full items-center justify-end px-8 py-10'>
              <button
                className='flex  items-center justify-end'
                onClick={() => {
                  setOpenMenu(false);
                }}>
                <OutlineCross className='h-6 text-primary-theme-cyan-100'></OutlineCross>
              </button>
            </div>
            <div className='mt-12'>
              {navigationOptions.map((option) => {
                const isActive = defaultValue === option.id;
                return (
                  <div
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                    key={option.id}
                    className={`flex items-center justify-center border-y border-primary-theme-white-200/10 ${
                      isActive ? 'bg-primary-theme-white-50/5' : ''
                    }`}>
                    <Link
                      className='flex w-full items-center justify-center py-12'
                      href={option.link}>
                      <span
                        className={`${
                          isActive
                            ? 'text-primary-theme-cyan-100'
                            : 'text-primary-theme-white-100'
                        } font-inconsolata text-lg tracking-wider`}>
                        {option.text}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBarMobile;