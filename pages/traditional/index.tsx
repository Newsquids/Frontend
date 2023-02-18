import React, { Fragment, useState } from 'react';
import Layout from 'components/layout/Layout';
import { TRADITIONAL_CATEGORY } from 'lib/utils/constants';
import NewsBlock from 'components/news/NewsBlock';
import NewsHeadline from 'components/news/NewsHeadline';
import dummy from 'sample/dummy_traditional.json';
import { News } from 'lib/utils/typing';

const Traditional = () => {
  const [selected, setSelected] = useState<string>('CNBC');

  return (
    <Layout>
      <div className='w-full h-full flex flex-row justify-start items-center'>
        <div className='w-9 h-full' />
        <div className='w-52 h-full flex flex-col justify-center items-center gap-10'>
          {TRADITIONAL_CATEGORY.map((value: string, index: number) => (
            <Fragment key={index}>
              <button
                className={`w-48 h-20 border flex justify-center items-center text-xl bg-window95-button-gray border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline shadow-inner ${
                  selected === value ? 'bg-window95-button-deep-gray' : 'bg-window95-button-gray'
                }`}
                onClick={() => setSelected(value)}
              >
                {value}
              </button>
            </Fragment>
          ))}
        </div>
        <NewsBlock isTodayNews={false}>
          {dummy.cnbc.map((news: News, index: number) => (
            <Fragment key={index}>
              <NewsHeadline
                isTodayNews={false}
                newsOriginLink={news.newsOriginLink}
                newsImage={news.newsImage}
                newsHeadline={news.newsCategory}
                newsCategory={news.newsCategory}
                newsDate={news.newsDate}
                IsBookmarked={news.IsBookmarked}
              />
            </Fragment>
          ))}
        </NewsBlock>
      </div>
    </Layout>
  );
};

export default Traditional;
