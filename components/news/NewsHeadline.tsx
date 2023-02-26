import React, { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/img/Logo.png'

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
            <div className='flex justify-start items-center w-[16%] h-full min-w-[120px] min-h-[100px]'>
              <Image src={newsImage ? newsImage : Logo} alt='newsImage' width={800} height={800} className='filter grayscale opacity-15 w-full h-full' />
            </div>
            <div className='relative w-[90%] h-full'>
              <div className='flex flex-col justify-center items-start gap-3 p-2'>
              <em>HEADLINE</em>
              <h1 className='text-xs md:text-md lg:text-lg text-center'>{newsHeadline}</h1>
              </div>
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
