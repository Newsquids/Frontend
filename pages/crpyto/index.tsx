import React, { Fragment, useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import NewsBlock from 'components/news/NewsBlock';
import NewsHeadline from 'components/news/NewsHeadline';
import { CRYPTO_CATEGORY } from 'lib/utils/constants';
import { apis } from 'lib/api/axiosUtil';
import { News, NewsItem } from 'lib/utils/typing';

const Crypto = () => {
  const [selected, setSelected] = useState<string>('COINDESK');
  const [page, setPage] = useState<number>(0);
  const [crypto, setCrypto] = useState<News>()

  useEffect(() => {
    getCrpyto()
  },[])

  const getCrpyto = async () => {
    const fetchedCrpytoNews :News = await apis.fetchChannelNews(page, selected.toLowerCase() , '');
    setCrypto(fetchedCrpytoNews)
  };

  const handleChangeChannel = async (value: string) =>{
    setSelected(value)
    const fetchedCrpytoNews:News = await apis.fetchChannelNews(page, value.toLocaleLowerCase() , '');
    setCrypto(fetchedCrpytoNews)
  }

  return (
    <Layout>
      <div className='w-full h-full flex flex-row justify-start items-center'>
        <div className='w-9 h-full' />
        <div className='w-52 h-full flex flex-col justify-center items-center gap-10'>
          {CRYPTO_CATEGORY.map((value: string, index: number) => (
            <Fragment key={index}>
              <button className={`w-48 h-20 border flex justify-center items-center text-xl bg-window95-button-gray border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline shadow-inner
              ${selected === value ? 'bg-[#bdbdbd]' : 'bg-window95-button-gray' }`}
               onClick={() => handleChangeChannel(value)}>
                {value}
              </button>
            </Fragment>
          ))}
        </div>
        <NewsBlock isTodayNews={false}>
          {crypto?.newsItems.map((news: NewsItem, index: number) => (
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
      </div>
    </Layout>
  );
};

export default Crypto;
