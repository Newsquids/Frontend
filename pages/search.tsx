import React, { Fragment, useState, useEffect } from 'react';
import Layout from 'components/layout/Layout';
import NewsBlock from 'components/news/NewsBlock';
import NewsHeadline from 'components/news/NewsHeadline';
import { News, NewsItem } from 'lib/utils/typing';
import { useRecoilValue } from 'recoil';
import { searchValueState } from 'lib/recoil/states';
import { apis } from 'lib/api/axiosUtil';
import NoData from 'components/NoData';
import Pagination from 'components/Pagination';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const searchValue = useRecoilValue(searchValueState); 
  const [totalPage, setTotalPage] = useState<number[]>([]);
  const [searchResult, setSearchResult] = useState<News>()
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    getSearchResult()
  },[page])

  const getSearchResult = async () => {
    const searchedNews:News = await apis.fetchSearchNews(page, searchValue);
    let newPages: number[] = [];
    for (let i = 0; i < searchedNews.pageNumber; i++) {
      newPages.push(i + 1);
    }
    setTotalPage(newPages)
    setSearchResult(searchedNews);
  };


  return (
    <Layout>
      <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <div
          className='w-80 h-16 bg-window95-button-gray flex justify-center items-center text-xl absolute top-[1%] z-10
        transform -translate-y-1/5'
        >
          <span>Result</span>
        </div>
        <NewsBlock isTodayNews>
          {searchResult?.pageNumber === -1 ? (
            <NoData />
          ) : (
            searchResult?.newsItems.map((news: NewsItem, index: number) => (
              <Fragment key={index}>
                <NewsHeadline
                  isTodayNews={false}
                  newsOriginLink={news.newsOriginLink}
                  newsImage={news.newsImage}
                  newsHeadline={news.newsHeadline}
                  newsCategory={news.newsCategory}
                  newsDate={news.newsDate}
                  isBookmarked={news.isBookmarked}
                />
              </Fragment>
            ))
          )}
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </NewsBlock>
      </section>
    </Layout>
  );
};

export default Search;
