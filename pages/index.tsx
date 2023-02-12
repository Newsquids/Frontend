import React, { Fragment, useEffect } from 'react';
import Layout from 'components/Layout';
import { useResetRecoilState } from 'recoil';
import { mainCategoryState } from 'lib/recoil/states';

const Home = () => {
  const resetMainCategory = useResetRecoilState(mainCategoryState);

  useEffect(() => {
    resetMainCategory();
  }, [resetMainCategory]);

  return (
    <Layout>
      <section className='w-full h-full flex flex-col justify-center items-center relative'>
        <div className='absolute w-80 h-16 top-[4.2rem] bg-window95-button-gray flex justify-center items-center text-xl'>
          <span>Today&apos;s News</span>
        </div>
        <div className='w-[85%] h-[80%] bg-window95-light-gray'></div>
      </section>
    </Layout>
  );
};

export default Home;
