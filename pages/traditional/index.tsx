import React, { Fragment } from 'react';
import Layout from 'components/layout/Layout';
import { TRADITIONAL_CATEGORY } from 'lib/utils/constants';

const Traditional = () => {
  
  return (
    <Layout>
      <div className='w-full h-full flex flex-row justify-start items-center'>
        <div className='w-9 h-full' />
        <div className='w-52 h-full flex flex-col justify-center items-center gap-10'>
          {TRADITIONAL_CATEGORY.map((value: string, index: number) => (
            <Fragment key={index}>
              <button className='w-48 h-20 border flex justify-center items-center text-xl bg-window95-button-gray border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline shadow-inner'>
                {value}
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Traditional;
