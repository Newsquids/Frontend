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
          isTodayNews ? 'w-[85%] min-h-[90%]' : 'w-[80%] mx-10'
        } h-[92%] bg-window95-light-gray flex flex-col justify-center items-center gap-5 min-h-[90%]`}
      >
        
        {children}
        
      </div>
    </>
  );
};

export default NewsBlock;
