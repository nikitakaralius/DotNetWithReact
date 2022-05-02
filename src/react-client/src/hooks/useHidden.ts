import {useState} from 'react';

export const useHidden = (hidden: boolean): [boolean, () => void, () => void] => {
  const [shown, setShown] = useState(false);
  const show = (): void => setShown(true);
  const hide = (): void => setShown(false);
  return [shown, show, hide];
};