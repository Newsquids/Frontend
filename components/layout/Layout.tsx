import React, { PropsWithChildren, useEffect } from 'react';
import { useChannel } from 'lib/hooks/useChannel';
import Header from '../header/Header';

const Layout = ({ children }: PropsWithChildren) => {
  const { defaultCategory } = useChannel();

  useEffect(() => {
    defaultCategory();
  }, []);

  return (
    <section className='font-neo w-[100vw] h-[80vh]'>
      <Header />
      {children}
    </section>
  );
};

export default Layout;
