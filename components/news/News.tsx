import React, { FC, PropsWithChildren } from 'react';

const News:FC<PropsWithChildren> = (props) => {
  return (
    <div className='relative w-[85%] h-[80%] bg-window95-light-gray flex flex-col justify-center items-center gap-5'>
        {props.children}
    </div>
  );
};

export default News;
