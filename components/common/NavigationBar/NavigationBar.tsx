import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavigationBarLarge from './NavigationBarLarge';
import NavigationBarMobile from './NavigationBarMobile';
import type { TNavigationOptionsID } from '@/utils/types';

const NavigationBar: FC<{ defaultValue: TNavigationOptionsID }> = ({
  defaultValue,
}) => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 640);
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      {isDesktop ? (
        <NavigationBarLarge defaultValue={defaultValue} />
      ) : (
        <NavigationBarMobile />
      )}
    </>
  );
};
export default NavigationBar;
