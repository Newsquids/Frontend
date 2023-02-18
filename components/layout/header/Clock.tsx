import React, { useState, useEffect } from 'react';

const Clock = () => {
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
        <input className='w-3/5 h-10 outline-none' type='text' />
      </div>
    </div>
  );
};

export default Clock;
