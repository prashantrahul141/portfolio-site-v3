import { navigationOptions } from '@/utils/constantTSX';
import type { TNavigationOptionsID } from '@/utils/types';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import { OutlineCross, OutlineMenu } from '../icons';
import LogoSvg from '../logo';

const NavigationBarMobile: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className='flex w-full items-center justify-end bg-primary-theme-bg/70 p-3 backdrop-blur-md'>
        <div className='flex h-full flex-grow items-center justify-start pl-3'>
          <Link href={'/'} className='h-12 w-12 pt-1'>
            <LogoSvg variant='page' />
          </Link>
        </div>
        <button
          type='button'
          className='h-full pr-2'
          onClick={() => {
            setOpenMenu(true);
          }}>
          <OutlineMenu className='h-12 text-primary-theme-cyan-100' />
        </button>
      </nav>

      {openMenu && (
        <motion.div
          key={'navbarMobile'}
          onClick={() => {
            setOpenMenu(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.1,
          }}
          className='fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur-[2px]'
        />
      )}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={'navbarMobileMenu'}
            initial={{ right: '-24rem' }}
            animate={{ right: '0rem' }}
            exit={{ right: '-24rem' }}
            transition={{ type: 'spring', bounce: 0.15, duration: 0.38 }}
            className='fixed top-0 z-20 h-screen w-[70vw] bg-primary-theme-bg-50 shadow-mobileNavBar'>
            <div className='flex h-14 w-full items-center justify-end px-8 py-10'>
              <button
                type='button'
                className='flex  items-center justify-end'
                onClick={() => {
                  setOpenMenu(false);
                }}>
                <OutlineCross className='h-6 text-primary-theme-cyan-100' />
              </button>
            </div>
            <div className='mt-12'>
              {navigationOptions.map((option) => {
                const isActive = defaultValue === option.id;
                return (
                  <div
                    onKeyDown={() => {
                      setOpenMenu(false);
                    }}
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
              <div className='flex w-full items-center justify-center py-6'>
                <Link target='_blank' href={'/Prashant Rahul CV.pdf'}>
                  <button
                    type='button'
                    className='flex w-fit items-center justify-center gap-2 rounded-md border border-primary-theme-bg-40 bg-primary-theme-bg-50/40 px-5 py-3 font-inconsolata text-xl text-primary-theme-white-50/70 transition-all duration-150 hover:bg-primary-theme-bg-40 hover:text-primary-theme-white-100 sm:px-7'>
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBarMobile;
