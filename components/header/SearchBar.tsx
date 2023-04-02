import React, { useState, KeyboardEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValueState } from 'lib/recoil/states';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const setSeachValue = useSetRecoilState(searchValueState);
  const router = useRouter();

  const handleSearchNews = () => {
    setSeachValue(search);
    router.push('/search');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSeachValue(search);
      router.push('/search');
    }
  };

  return (
    <div className='w-full flex flex-row justify-end items-end gap-3 min-w-[300px] h-10'>
      <div className='flex flex-row justify-end items-end w-full h-full gap-2'>
        <input
          className='w-3/5 h-10 min-w-[200px] outline-none'
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button className='w-[60px] h-10 flex flex-row justify-start items-center min-w-[50px] cursor-pointer' onClick={() => handleSearchNews()}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
