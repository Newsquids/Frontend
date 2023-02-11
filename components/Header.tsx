import React, { Fragment, useEffect, useState } from 'react';
import { FINANCIAL_INDEX } from 'lib/constants';
import Image from 'next/image';
import Logo from '../public/img/Logo.png';

const Header = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const utcTime = time.toUTCString().replace('GMT', '');
  const estTime = new Date(time.getTime() - 5 * 60 * 60 * 1000).toUTCString().replace('GMT', '');

  return (
    <section className='w-full h-[260px] relative'>
      <header className='w-full h-[30px] bg-window95-deep-gray border-[2px] border-window95-light-gray border-x-0' />
      <section className='w-full h-[230px] flex flex-row justify-between bg-window95-light-gray'>
        <div className='font-bold text-2xl flex flex-col items-center w-52 gap-5 mt-3 ml-[3.5rem]'>
          <div>
            <Image src={Logo} width={100} height={100} alt='logo' />
            <span>NEWSQUIDS</span>
          </div>
          <div className='flex flex-row gap-3 text-sm '>
            <span className='w-full'>SIGN IN</span>
            <span className='w-full'>SIGN UP</span>
          </div>
        </div>

        <div className='w-full h-full flex flex-row justify-end'>
          <div className='w-full flex flex-col gap-10 justify-center items-end'>
            <div id='clock' className='w-full h-20 flex flex-row justify-end items-center gap-5'>
              <div className='flex flex-col'>
                <label className='font-bold'>UTC</label>
                <span>{utcTime}</span>
              </div>
              <div className='flex flex-col'>
                <label className='font-bold'>EST</label>
                <span>{estTime}</span>
              </div>
            </div>
            <div className='w-full flex flex-row justify-end items-center gap-3'>
              <div className='w-1/6 h-10 flex justify-end items-center'>
                <span>SEARCH</span>
              </div>
              <input className='w-3/5 h-10 outline-none' type='text'/>
            </div>
          </div>
          <div
            id='newsSelectBox'
            className='w-[9rem] h-full flex flex-col  justify-center items-center text-center gap-1'
          >
            {FINANCIAL_INDEX.map((value: string, index: number) => (
              <Fragment key={index}>
                <button
                  className='w-28 h-10 flex justify-center items-center text-base border bg-window95-button-gray
                  border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline
                '
                >
                  {value}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <div className='w-[14rem] h-10 flex flex-row justify-center items-center fixed top-[14.9rem] left-7 shadow-xl'>
        <div className='w-1/2 border border-r-0 h-full bg-window95-light-gray flex justify-center items-center hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline'>
          <button>Traditional</button>
        </div>
        <div className='w-1/2 border h-full bg-window95-light-gray flex justify-center items-center hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline'>
          <button>Crypto</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
