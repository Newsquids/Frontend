import React, { PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default Layout;
