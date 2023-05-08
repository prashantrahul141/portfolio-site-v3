import { useEffect, useState } from 'react';

export const useHashRouteToggle = (
  modalHash: string
): [boolean, (open: boolean) => void] => {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const toggleActive = (open: boolean) => {
    if (open) {
      window.location.assign(modalHash);
    } else {
      window.location.replace('#');
    }
  };

  useEffect(() => {
    const handleOnHashChange = () => {
      const isHashMatch = window.location.hash === modalHash;
      toggleOpen(isHashMatch);
    };

    window.addEventListener('hashchange', handleOnHashChange);

    return () => window.removeEventListener('hashchange', handleOnHashChange);
  }, [modalHash]);

  return [isOpen, toggleActive];
};
