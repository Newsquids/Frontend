import React from 'react';
import Logo from '../public/img/Logo.png';
import Image from 'next/image';

const NoData = () => {
  return (
    <div className='w-[90%] h-[790px]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <Image src={Logo} width={100} height={100} alt='' />
        <strong>There are no news in this category.</strong>
      </div>
    </div>
  );
};

export default NoData;
