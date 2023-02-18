import React, { FC, ReactNode } from 'react';

interface NewsProps {
  isTodayNews: boolean
  children: ReactNode
}

const NewsBlock:FC<NewsProps> = ({isTodayNews, children}) => {
  return (
    <div className={`relative ${isTodayNews ? 'w-[85%]':  'w-[80%] mx-10'} h-[80%] bg-window95-light-gray flex flex-col justify-center items-center gap-5`}>
        {children}
    </div>
  );
};

export default NewsBlock
;