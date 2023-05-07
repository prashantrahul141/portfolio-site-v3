import type { FC } from 'react';

import NavigationBarLarge from './NavigationBarLarge';
import NavigationBarMobile from './NavigationBarMobile';
import type { TNavigationOptionsID } from '@/utils/types';

const NavigationBar: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  return (
    <>
      <div className='fixed left-0 top-0 z-10 hidden w-screen select-none sm:block'>
        <NavigationBarLarge defaultValue={defaultValue} />
      </div>
      <div className='fixed left-0 top-0 z-10 w-screen select-none sm:hidden'>
        <NavigationBarMobile defaultValue={defaultValue} />
      </div>
    </>
  );
};
export default NavigationBar;
