import React, { FC } from 'react';

interface NewsHeadlineProps {
  isTodayNews: boolean;
}

const NewsHeadline:FC<NewsHeadlineProps> = ({isTodayNews}) => {
  return (
    <div className='w-[90%] h-[15%] '>
      <div className='w-full h-full flex flex-row justify-between items-center'>
        {isTodayNews && <div className='w-[13%] h-full border'>logo</div>}
        <div className={`${isTodayNews ? 'w-[80%]' : 'w-full'} h-full  flex flex-row justify-center items-center`}>
          <div className='flex justify-start items-center w-[16%] h-full border'>Imgae</div>
          <div className='flex justify-center items-center w-[90%] h-full border'></div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadline;
