import React, { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import NoImage from '../../public/img/NoImage.png';
import { apis } from 'lib/api/axiosUtil';

interface NewsHeadlineProps {
  isTodayNews: boolean;
  newsOriginLink: string;
  newsImage: string;
  newsId: number;
  newsHeadline: string;
  newsCategory: string;
  newsChannel?: string;
  newsDate: string;
  isBookmarked: boolean;
}

const NewsHeadline: FC<NewsHeadlineProps> = ({
  isTodayNews,
  newsOriginLink,
  newsImage,
  newsHeadline,
  newsId,
  newsCategory,
  newsDate,
  isBookmarked,
  newsChannel,
}) => {
  const handleClickBookmark = async () => {
    try {
      await apis.updateBookMark(newsId);
    } catch (err) {}
  };

  return (
    <section className='w-[90%] h-[15%] min-w-[500px] min-h-[100px]'>
      <Link href={newsOriginLink} target='_blank'>
        <div className='w-full h-full flex flex-row justify-center items-center gap-2'>
          <div className={`w-full h-full flex flex-row justify-center items-center border max-w-[1600px]`}>
            <div className='flex justify-start items-start h-full max-w-[160px] min-h-[100px] ml-0'>
              {newsImage ? (
                <Image src={newsImage} alt='newsImage' width={800} height={800} className='filter grayscale opacity-15 h-full ml-0' quality={5} />
              ) : (
                <Image src={NoImage} alt='NoData' width={800} height={800} className='filter grayscale opacity-15 h-full' />
              )}
            </div>
            <div className='relative w-[90%] h-full' id={newsHeadline}>
              <div className='flex flex-col justify-center items-start gap-3 p-2 relative'>
                  <em>{isTodayNews ? `${newsChannel?.toUpperCase()} /  HEADLINE` : 'HEADLINE'}</em>
                  {isBookmarked ? (
                    <button className='text-3xl z-30 absolute right-1'>
                      ★
                    </button>
                  ) : (
                    <button className='text-3xl z-30 absolute right-1' onClick={() => handleClickBookmark()}>☆</button>
                  )}
                <h1 className='md:text-md lg:text-lg text-left'>{newsHeadline}</h1>
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
