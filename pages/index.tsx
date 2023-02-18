import React, { Fragment, useEffect } from 'react';
import Layout from 'components/layout/Layout';
import { useResetRecoilState } from 'recoil';
import { mainCategoryState } from 'lib/recoil/states';
import NewsHeader from 'components/news/NewsHeadline';
import News from 'components/news/News';

const Home = () => {
  const resetMainCategory = useResetRecoilState(mainCategoryState);

  useEffect(() => {
    resetMainCategory();
  }, [resetMainCategory]);

  return (
    <Layout>
      <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <div className='w-80 h-16 bg-window95-button-gray flex justify-center items-center text-xl absolute top-[7%] z-10
        transform -translate-y-1/5'>
          <span>Today&apos;s News</span>
        </div>
        <News>
          <NewsHeader isTodayNews/>
          <NewsHeader isTodayNews/>
          <NewsHeader isTodayNews/>         
        </News>
      </section>
    </Layout>
  );
};

export default Home;
