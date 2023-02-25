import { News } from 'lib/utils/typing';
import { atom } from 'recoil';
import { MainCategory } from './stateTypes';

export const mainCategoryState = atom<MainCategory>({
  key: 'mainCategory',
  default: {
    isTraditional: false,
    isCrypto: false,
  },
});

export const searchResultState = atom<News>({
  key: 'searchResult',
  default: {
    lastPage: false,
    newsItems: []
  },
});
