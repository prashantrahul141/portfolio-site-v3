import { navigationOptions } from '@/utils/constantTSX';
import type { FC } from 'react';

const NavigationBarLarge: FC = () => {
  return (
    <nav className='h-12 w-full text-white'>
      {navigationOptions.map((option, i) => {
        return (
          <div key={i}>
            <span>{option.text}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationBarLarge;
