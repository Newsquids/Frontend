import React, { Fragment, useEffect, useState } from 'react';
import { News, NewsItem } from 'lib/utils/typing';
import { apis } from 'lib/api/axiosUtil';
import Layout from 'components/layout/Layout';
import NewsHeadline from 'components/news/NewsHeadline';
import NoData from 'components/NoData';
import NewsBlock from 'components/news/NewsBlock';
import Head from 'next/head';
import Pagination from 'components/Pagination';

const Home = () => {
  const [page, setPage] = useState<number>(0);
  const [today, setToday] = useState<News>();
  const [totalPage, setTotalPage] = useState<number[]>([]);

  useEffect(() => {
    const getToday = async () => {
      const fetchedTodayNews: News = await apis.fetchTodayNews(page);
      let newPages: number[] = [];
      for (let i = 0; i < fetchedTodayNews.pageNumber; i++) {
        newPages.push(i + 1);
      }
      setTotalPage(newPages);
      setToday(fetchedTodayNews);
    };
    getToday();
  }, [page]);


  return (
    <>
      <Head>
      <title>Newsquids</title>
        <meta name='description' content='Newsquids App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className='w-full h-full flex flex-col justify-center items-center relative'>
          <div
            className='w-80 h-16 bg-window95-button-gray flex justify-center items-center text-xl absolute top-[1%] z-10
        transform -translate-y-1/5'
          >
            <span>Today&apos;s News</span>
          </div>
          <NewsBlock isTodayNews>
            {today?.newsItems.length === 0 ? (
              <NoData />
            ) : (
              <>
                {today?.newsItems.map((news: NewsItem, index: number) => (
                  <Fragment key={index}>
                    <NewsHeadline
                      isTodayNews
                      newsChannel={news.newsChannel}
                      newsOriginLink={news.newsOriginLink}
                      newsImage={news.newsImage}
                      newsHeadline={news.newsHeadline}
                      newsCategory={news.newsCategory}
                      newsDate={news.newsDate}
                      isBookmarked={news.isBookmarked}
                    />
                  </Fragment>
                ))}
              </>
            )}
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          </NewsBlock>
        </section>
      </Layout>
    </>
  );
};

export default Home;
