import React, { Fragment, useEffect, useState } from 'react';
import { FINANCIAL_INDEX } from 'lib/constants';

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
    <Fragment>
      <header className='w-full h-[30px] bg-window95-deep-gray border-[2px] border-window95-light-gray border-x-0' />
      <section className='w-full h-[220px] border-y flex flex-row justify-between'>
        <div className='w-full h-full flex flex-row justify-end'>
          <div id='clock' className='w-2/5 h-20 border flex flex-row justify-center items-center gap-5'>
            <div className='flex flex-col'>
              <label className='font-bold'>UTC</label>
              <span>{utcTime}</span>
            </div>
            <div className='flex flex-col'>
              <label className='font-bold'>EST</label>
              <span>{estTime}</span>
            </div>
          </div>
          <div
            id='newsSelectBox'
            className='w-[13%] h-full border flex flex-col bg-window95-white justify-center items-center text-center gap-1'
          >
            {FINANCIAL_INDEX.map((value: string, index: number) => (
              <Fragment key={index}>
                <button
                  className='w-10/12 h-10 flex justify-center items-center text-base border bg-window95-button-gray border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline
                '
                >
                  {value}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
