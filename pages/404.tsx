import Image from 'next/image';
import React from 'react';
import Logo from '../public/img/Logo.png';
import Router from 'next/router';

const PageNotFound = () => {
  return (
    <section>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full flex flex-col justify-center items-center text-center font-neo'>
          <Image src={Logo} alt='Logo' width={300} height={300} />
          <span className='text-3xl font-bold mb-10'>404 : Page Not Found</span>
          <button
            className='w-24 h-10 border flex justify-center items-center text-xl bg-window95-button-gray border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline shadow-inner'
            onClick={() => Router.back()}
          >
            GO BACK
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
