export interface News {
  pageNumber: number;
  newsItems: NewsItem[];
}

export interface NewsItem {
  newsId: number;
  newsOriginLink: string;
  newsImage: string;
  newsHeadline: string;
  newsCategory: string;
  newsDate: string;
  isBookmarked: boolean;
}
