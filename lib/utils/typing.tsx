export interface News {
  lastPage: boolean;
  newsItems: NewsItem[];
}

export interface NewsItem {
  newsId: number;
  newsOriginLink: string;
  newsImage: string;
  newsHeadline: string;
  newsCategory: string;
  newsDate: string;
  IsBookmarked: boolean;
}
