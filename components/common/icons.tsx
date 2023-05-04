import type { FC } from 'react';

const OutlineCross: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <path
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        d='M3,3 L21,21 M3,21 L21,3'></path>
    </svg>
  );
};

const OutlineMenu: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      className={className}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z'></path>
    </svg>
  );
};

export { OutlineCross, OutlineMenu };
