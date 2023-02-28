import React, { Fragment, useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import Logo from 'public/img/Logo.png';
import Clock from './Clock';
import { FINANCIAL_INDEX } from 'lib/utils/constants';
import { MainCategory } from 'lib/recoil/stateTypes';
import { mainCategoryState } from 'lib/recoil/states';
import { useRecoilState } from 'recoil';
import { apis } from 'lib/api/axiosUtil';
import Alert from 'components/header/Alert';
import dynamic from 'next/dynamic';

const ClockWithNoSSr = dynamic(() => import('./Clock'), {
  ssr: false
})

const Header = () => {
  const [mainCategory, setMainCategory] = useRecoilState<MainCategory>(mainCategoryState);
  const [message, setMessage] = useState<string>('')
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleChangeMainCategory = (isTraditional: boolean) => {
    if (isTraditional) {
      setMainCategory({ isTraditional: true, isCrypto: false });
      Router.push('/traditional');
    } else {
      setMainCategory({ isTraditional: false, isCrypto: true });
      Router.push('/crpyto');
    }
  };

  // const getNowFinacialIndex = async () => {
  //   const nowIndex = await apis.updateFinanceIndex();
  // };

  // setTimeout(getNowFinacialIndex, 5);

  const handleModalOpen = (value: string) => {
    setMessage(value + ': 10500')
    setModalOpen(true)
  }

  return (
    <>
      <section className='w-full h-[260px] relative'>
        <header className='w-full h-[30px] bg-window95-deep-gray border-[2px] border-window95-light-gray border-x-0' />
        <section className='w-full h-[230px] flex flex-row justify-between bg-window95-light-gray'>
          <div className='font-bold text-2xl flex flex-col items-center w-52 gap-5 mt-3 ml-[3.5rem]'>
            <button onClick={() => Router.push('/')}>
              <Image src={Logo} width={100} height={100} alt='logo' />
              <span>NEWSQUIDS</span>
            </button>
            <div className='flex flex-row gap-3 text-sm '>
              <span className='w-full'>SIGN IN</span>
              <span className='w-full'>SIGN UP</span>
            </div>
          </div>
          <div className='w-full h-full flex flex-row justify-end'>
            <ClockWithNoSSr />
            <div id='newsSelectBox' className='w-[9rem] h-full flex flex-col  justify-center items-center text-center gap-1'>
              {FINANCIAL_INDEX.map((value: string, index: number) => (
                <Fragment key={index}>
                  <button
                    className='w-28 h-10 flex justify-center items-center text-base border bg-window95-button-gray
                  border-window95-button-deep-gray hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline
                '
                    onClick={() => handleModalOpen(value)}
                  >
                    {value}
                  </button>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <div className='w-[14rem] h-10 flex flex-row justify-center items-center absolute top-[14.9rem] left-7 shadow-xl'>
          <button
            className={`w-1/2 border-window95-button-deep-gray border border-r-0 h-full flex justify-center items-center hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline ${
              mainCategory.isTraditional ? 'bg-window95-button-deep-gray font-bold' : 'bg-window95-button-gray'
            }`}
            onClick={() => handleChangeMainCategory(true)}
          >
            Traditional
          </button>
          <button
            className={`w-1/2 border-window95-button-deep-gray border h-full flex justify-center items-center hover:shadow hover:bg-window95-button-deep-gray focus:outline-none focus:shadow-outline ${
              mainCategory.isCrypto ? 'bg-window95-button-deep-gray font-bold' : ' bg-window95-button-gray'
            }`}
            onClick={() => handleChangeMainCategory(false)}
          >
            Crypto
          </button>
        </div>
      </section>
      {modalOpen && <Alert message={message} modalClose={setModalOpen} />}
    </>
  );
};

export default Header;
