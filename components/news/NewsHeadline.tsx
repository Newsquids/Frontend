import React, { FC } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
interface NewsHeadlineProps {
  isTodayNews: boolean;
  newsOriginLink: string;
  newsImage: string;
  newsHeadline: string;
  newsCategory: string;
  newsDate: string;
  IsBookmarked: boolean;
}

const NewsHeadline: FC<NewsHeadlineProps> = ({
  isTodayNews,
  newsOriginLink,
  newsImage,
  newsHeadline,
  newsCategory,
  newsDate,
  IsBookmarked,
}) => {
  
  return (
    <div className='w-[90%] h-[15%] '>
      <div className='w-full h-full flex flex-row justify-between items-center'>
        {isTodayNews && <div className='w-[13%] h-full border'>logo</div>}
        <div className={`${isTodayNews ? 'w-[80%]' : 'w-full'} h-full  flex flex-row justify-center items-center border`}>
          <div className='flex justify-start items-center w-[16%] h-full'>
            <img src={newsImage} alt='newsImage' className='w-full h-full' />
          </div>
          <div className='relative w-[90%] h-full '>
            <h1 className='text-2xl text-center mt-3'>{newsHeadline}</h1>
            <div className='absolute bottom-1 right-2'>
              {newsCategory.toUpperCase()} / {dayjs(newsDate).format('MMM.DD')}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadline;
