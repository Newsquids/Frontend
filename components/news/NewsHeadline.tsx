import React, { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
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

const NewsHeadline: FC<NewsHeadlineProps> = ({ isTodayNews, newsOriginLink, newsImage, newsHeadline, newsCategory, newsDate, IsBookmarked }) => {
  return (
    <section className='w-[90%] h-[15%]'>
      <Link href={newsOriginLink} target='_blank'>
        <div className='w-full h-full flex flex-row justify-between items-center'>
          {isTodayNews && <div className='w-[13%] h-full border'>logo</div>}
          <div className={`${isTodayNews ? 'w-[80%]' : 'w-full'} h-full  flex flex-row justify-center items-center border`}>
            <div className='flex justify-start items-center w-[16%] h-full'>
              <Image src={newsImage} alt='newsImage' width={800} height={800} className='filter grayscale opacity-15 w-full h-full' />
            </div>
            <div className='relative w-[90%] h-full '>
              <h1 className='text-lg text-center mt-3'>{newsHeadline}</h1>
              <div className='absolute bottom-1 right-2'>
                {newsCategory.toUpperCase()} / {dayjs(newsDate).format('MMM.DD')}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NewsHeadline;
