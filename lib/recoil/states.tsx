import { atom } from 'recoil';
import { MainCategory } from './stateTypes';

export const mainCategoryState = atom<MainCategory>({
  key: 'mainCategory',
  default: {
    isTraditional: true,
    isCrypto: false,
  },
});
