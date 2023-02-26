import React, { FC, Fragment, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CRYPTO_NEWS_CATEGORY, TRADITIONAL_NEWS_CATEGROY } from 'lib/utils/constants';

interface CategoryProps {
  newsCategory: string;
  setCategory: Dispatch<SetStateAction<string>>
  updateValue: (newCategory: string) => void
}

const Category: FC<CategoryProps> = ({ newsCategory, setCategory, updateValue }) => {
  const [selectBoxOpen, setSelectBoxOpen] = useState<boolean>(false);
  const categoryRef = useRef<any>();

  const handleOpenSelectBox = () => {
    if (selectBoxOpen) {
      setSelectBoxOpen(false);
    } else {
      setSelectBoxOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setSelectBoxOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categoryRef]);

  const handleUpdateValue = (value: string) => {
    setCategory(value)
    updateValue(value)
  }

  return (
    <>
      <div className='w-150px h-[40px] absolute top-8 right-[3.3rem]' ref={categoryRef} >
        <div className='flex flex-row justify-start items-start'>
          <div className='w-[130px] h-[40px] border border-r-0 text-sm flex justify-center items-center bg-window95-button-deep-gray '>
            Category Select
          </div>
          <button
            className='w-[48px] h-[40px] border flex flex-row justify-center items-center text-2xl bg-window95-deep-gray'
            onClick={() => handleOpenSelectBox()}
          >
            ▼
          </button>
        </div>
        {selectBoxOpen &&
          (newsCategory === 'traditional' ? (
            <div className='flex flex-col w-full h-full'>
              <div className='absolute top-[2.4rem] z-10 flex flex-col'>
                {TRADITIONAL_NEWS_CATEGROY.map((value: string, index: number) => (
                  <Fragment key={index}>
                    <div
                      className={`border w-[131px] h-[40px] z-10 bg-window95-button-deep-gray flex justify-center items-center
                    hover:bg-window95-button-gray cursor-pointer
                    ${index === TRADITIONAL_NEWS_CATEGROY.length - 1 ? 'border-b' : 'border-b-0 '}`}
                      onClick={() => handleUpdateValue(value)}
                    >
                      {value}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          ) : (
            <div className='flex flex-col w-full h-full'>
              <div className='absolute top-[2.4rem] z-10 flex flex-col'>
                {CRYPTO_NEWS_CATEGORY.map((value: string, index: number) => (
                  <Fragment key={index}>
                    <div
                      className={`border w-[131px] h-[40px] z-10 bg-window95-button-deep-gray flex justify-center items-center 
                      hover:bg-window95-button-gray cursor-pointer
                      ${index === CRYPTO_NEWS_CATEGORY.length - 1 ? 'border-b' : 'border-b-0 '}`}
                      onClick={() => handleUpdateValue(value)}
                    >
                      {value}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Category;
