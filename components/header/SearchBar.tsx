import React, { useState, KeyboardEvent } from 'react';
import { apis } from 'lib/api/axiosUtil';
import { useRecoilState } from 'recoil';
import { searchResultState } from 'lib/recoil/states';
import { useRouter } from 'next/router';
import Pagination from 'components/Pagination';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useRecoilState(searchResultState);
  const router = useRouter();

  const handleSearchNews = async () => {
    const searchNews = await apis.fetchSearchNews(page, search);
    
    setSearchValue(searchNews);
    router.push('/search');
  };

  const handleKeyDown = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const searchNews = await apis.fetchSearchNews(page, search);
      setSearchValue(searchNews);
      router.push('/search');
    }
  };

  return (
    <div className='w-full flex flex-row justify-center items-center gap-3'>
      <div className='flex flex-row justify-end items-end w-full h-full gap-2'>
        <input className='w-3/5 h-10 outline-none' type='text' onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
        <div className='w-1/6 h-10 flex flex-row justify-start items-center' onClick={() => handleSearchNews()}>
          <span>SEARCH</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
