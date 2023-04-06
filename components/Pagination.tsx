import React, { Dispatch, FC, Fragment, SetStateAction } from 'react';

interface PaginationProps {
  page: number;
  totalPage: number[];
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({ page, setPage, totalPage }) => {
  let filtered = totalPage.filter((_, index) => index >= Math.max(page - 2, 0) && index <= Math.min(page + 2, totalPage.length - 1));

  if (filtered.length === 0) {
    filtered = totalPage.slice(page, page + 5);
  } else if (filtered[0] === 1) {
    filtered = [1, 2, 3, 4, 5];
  } else if (page >= totalPage.length - 4) {
    filtered = [totalPage.length - 4, totalPage.length - 3, totalPage.length - 2, totalPage.length - 1, totalPage.length];
  }

  const handleChangePage = (isPrev: boolean) => {
    if (isPrev && page !== 0) {
      setPage(page - 1);
    } else if (page !== totalPage.length - 1 && !isPrev) {
      setPage(page + 1);
    }
  };

  const handleChangePageTen = (isPrev: boolean) => {
    if (isPrev && page >= 11 ) {
      setPage(page - 10);
    } else if (isPrev && page < 11 ) {
      setPage(0);
    }
    else if (page !== totalPage.length - 1 && !isPrev) {
      setPage(page + 10);
    }
  };

  return (
    <>
      <section className='w-full h-5 flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center w-20 h-5 gap-4 mr-2'>
          <button onClick={() => handleChangePageTen(true)} className='tracking-[-0.5rem] w-5 h-[1.3rem]'>
            ◀◀
          </button>
          <button onClick={() => handleChangePage(true)} className='w-5 h-5'>
            PREV
          </button>
        </div>
        {filtered.map((value: number, index: number) => (
          <Fragment key={index}>
            <button className={`w-10 h-5 border ${page + 1 === value ? 'bg-window95-deep-gray' : ''}`} onClick={() => setPage(value - 1)}>
              {value}
            </button>
          </Fragment>
        ))}
        <div className='flex flex-row justify-center items-center w-14 h-5 gap-4 ml-2'>
          <button onClick={() => handleChangePage(false)} className='w-5 h-5'>
            NEXT
          </button>
          <button onClick={() => handleChangePageTen(false)} className='tracking-[-0.5rem] w-5 h-6'>
            ▶▶
          </button>
        </div>
      </section>
    </>
  );
};

export default Pagination;
