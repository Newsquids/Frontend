import React, { Fragment, useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import NewsBlock from 'components/news/NewsBlock';
import NewsHeadline from 'components/news/NewsHeadline';
import { NewsItem } from 'lib/utils/typing';
import { useRecoilValue } from 'recoil';
import { searchResultState } from 'lib/recoil/states';

const Search = () => {
  const searchResult = useRecoilValue(searchResultState);

  return (
    <Layout>
      <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <div
          className='w-80 h-16 bg-window95-button-gray flex justify-center items-center text-xl absolute top-[7%] z-10
        transform -translate-y-1/5'
        >
          <span>Result</span>
        </div>
        <NewsBlock isTodayNews>
          {searchResult?.newsItems.map((news: NewsItem, index: number) => (
            <Fragment key={index}>
              <NewsHeadline
                isTodayNews={false}
                newsOriginLink={news.newsOriginLink}
                newsImage={news.newsImage}
                newsHeadline={news.newsHeadline}
                newsCategory={news.newsCategory}
                newsDate={news.newsDate}
                IsBookmarked={news.IsBookmarked}
              />
            </Fragment>
          ))}
        </NewsBlock>
      </section>
    </Layout>
  );
};

export default Search;
