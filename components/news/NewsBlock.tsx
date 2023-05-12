import React, { FC, ReactNode } from 'react';
import Category from 'components/Category';

interface NewsProps {
  isTodayNews: boolean;
  children: ReactNode;
}

const NewsBlock: FC<NewsProps> = ({ isTodayNews, children }) => {
  return (
    <>
      <div
        className={`relative ${
          isTodayNews ? 'w-[85%] min-w-[1200px] min-h-[800px]' : 'w-[80%] min-w-[1200px] min-h-[800px] mx-10'
        } h-[92%] bg-window95-light-gray flex flex-col justify-center items-center gap-5 min-h-[90%]
        max-w-[1800px]
        `}
      >
        {children}
      </div>
    </>
  );
};

export default NewsBlock;
