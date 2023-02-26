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
    pageNumber: 0,
    newsItems: [],
  },
});

export const nowCategoryState = atom<any>({
  key: 'nowCategory',
  default: {
    traditional: {
      isTraditional: true,
      category: {
        isCnbc: true,
        isBbc: false,
        isReuters: false,
      },
    },
    crpyto: {
      isCrpyto: false,
      category: {
        isCoindesk: false,
        isCointelegraph: false,
        isCryptoslate: false,
      },
    },
  },
});
