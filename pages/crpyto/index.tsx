import React, { Fragment, useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import NewsBlock from 'components/news/NewsBlock';
import NewsHeadline from 'components/news/NewsHeadline';
import { CRYPTO_CHANNEL_CATEGORY } from 'lib/utils/constants';
import { apis } from 'lib/api/axiosUtil';
import { News, NewsItem } from 'lib/utils/typing';
import Category from 'components/Category';
import NoData from 'components/NoData';
import Pagination from 'components/Pagination';
import { useChannel } from 'lib/hooks/useChannel';

const Crypto = () => {
  const { nowChannel, handleChangeChannel } = useChannel();
  const [selected, setSelected] = useState<string>(String(nowChannel(false)));
  const [category, setCategory] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [crypto, setCrypto] = useState<News>();
  const [totalPage, setTotalPage] = useState<number[]>([]);
  const [channel, setChannel] = useState<string>('')

  useEffect(() => {
    getCrpyto();
  }, [page]);

  const getCrpyto = async () => {
    const fetchedCrpytoNews: News = await apis.fetchChannelNews(page, selected.toLowerCase(), category);
    let newPages: number[] = [];
    for (let i = 0; i < fetchedCrpytoNews.pageNumber; i++) {
      newPages.push(i + 1);
    }
    setTotalPage(newPages);
    setCrypto(fetchedCrpytoNews);
  };

  const handleUpdateChannel = async (value: string) => {
    setPage(0);
    setCategory('');
    setSelected(value);
    const fetchedCrpytoNews: News = await apis.fetchChannelNews(page, value.toLocaleLowerCase(), category);
    handleChangeChannel(value, false);
    setChannel(value)
    setCrypto(fetchedCrpytoNews);
  };

  const handleUpdateToCategory = async (newCategory: string) => {
    const fetchedCrpytoNews: News = await apis.fetchChannelNews(page, selected.toLowerCase(), newCategory);
    setCrypto(fetchedCrpytoNews);
  };

  return (
    <Layout>
      <div className='w-full h-full flex flex-row justify-start items-center'>
        <div className='w-9 h-full' />
        <div className='w-52 h-full flex flex-col justify-center items-center gap-10'>
          {CRYPTO_CHANNEL_CATEGORY.map((value: string, index: number) => (
            <Fragment key={index}>
              <button
                className={`w-48 h-20 border flex justify-center items-center text-xl border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline shadow-inner
              ${nowChannel(false) === value ? ' bg-window95-button-deep-gray' : 'bg-window95-button-gray'}`}
                onClick={() => handleUpdateChannel(value)}
              >
                {value}
              </button>
            </Fragment>
          ))}
        </div>
        <NewsBlock isTodayNews={false}>
          <div className='ml-[77%]'>
            <Category newsCategory='crypto' setCategory={setCategory} updateValue={handleUpdateToCategory} />
          </div>
          <strong className='text-3xl'>{selected}</strong>
          {crypto?.newsItems.length === 0 ? (
            <>
              <NoData />
            </>
          ) : (
            <>
              {crypto?.newsItems.map((news: NewsItem, index: number) => (
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
              ))}
            </>
          )}
          <Pagination page={page} setPage={setPage} totalPage={totalPage} />
        </NewsBlock>
      </div>
    </Layout>
  );
};

export default Crypto;
