import React, { Dispatch, FC, SetStateAction, KeyboardEvent } from 'react';

interface AlertProps {
  message: string;
  modalClose: Dispatch<SetStateAction<boolean>>;
}

const Alert: FC<AlertProps> = ({ message, modalClose }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Esc') {
      modalClose(false);
    }
  };

  return (
    <div>
      <div className='w-[100%] flex flex-col items-center justify-center h-full font-neo'>
        <dialog
          className='w-[430px] h-[180px] flex flex-col items-center absolute top-[45%]
        z-[10000] bg-[#C3C7CC] '
        >
          <div className='w-[425px] h-9 top-1 absolute bg-[#1600AB] flex flex-row justify-between items-center text-left'>
            <span className='top-1 text-[#FFF] flex ml-1 text-xl'>NOW INDEX</span>
            <button className='h-[2rem] w-[2rem] border bg-[#c3c7cc] mr-0.5' onClick={() => modalClose(false)}
              onKeyDown={(e) => handleKeyDown(e)}
            >
              <span className='flex mt-0.5 justify-center items-center text-xl text-[#838589]'>X</span>
            </button>
          </div>
          <div className='absolute top-[35%] text-center'>{message}</div>
          <button className='w-28 h-9 border absolute bottom-5 flex justify-center items-center' onClick={() => modalClose(false)}
          onKeyDown={(e) => handleKeyDown(e)}>
            <div className='w-[95%] h-[85%] border border-dashed'>OK</div>
          </button>
        </dialog>
        <div className='w-[100vw] h-[100vh] fixed top-0 z-[9999] bg-[rgba(0,0,0,0.2)]' />
      </div>
    </div>
  );
};

export default Alert;
