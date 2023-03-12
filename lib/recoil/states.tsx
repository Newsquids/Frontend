import { News } from 'lib/utils/typing';
import { atom } from 'recoil';

export const searchResultState = atom<News>({
  key: 'searchResult',
  default: {
    pageNumber: 0,
    newsItems: [],
  },
});

