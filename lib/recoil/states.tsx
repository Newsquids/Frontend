import { atom } from 'recoil';

export const searchValueState = atom<string>({
  key: 'searchValue',
  default: ''
});

