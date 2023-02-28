import React, { PropsWithChildren } from 'react';
import Header from '../header/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section className='font-neo w-[100vw] h-[80vh]'>
      <Header />
      {children}
    </section>
  );
};

export default Layout;
