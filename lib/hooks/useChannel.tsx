import React from 'react';

export const useChannel = () => {
  const handleChangeCategory = (isTraditional: boolean) => {
    if (isTraditional) {
      window.sessionStorage.setItem('categroy', 'Traditional');
    } else {
      window.sessionStorage.setItem('categroy', 'Crypto');
    }
  };

  const handleChangeChannel = (value: string, isTraditional: boolean) => {
    if (isTraditional) {
      window.sessionStorage.setItem('traditionalChannel', value);
    } else {
      window.sessionStorage.setItem('cryptoChannel', value);
    }
  };

  const defaultCategory = () => {
    if (!window.sessionStorage.getItem('traditionalChannel')) {
      window.sessionStorage.setItem('traditionalChannel', 'CNBC');
      window.sessionStorage.setItem('cryptoChannel', 'COINDESK');
    }
  };

  const nowCategory = () => {
    return window.sessionStorage.getItem('categroy');
  };

  const nowChannel = (isTraditional: boolean) => {
    if (isTraditional) {
      return window.sessionStorage.getItem('traditionalChannel');
    } else {
      return window.sessionStorage.getItem('cryptoChannel');
    }
  };

  return { handleChangeCategory, handleChangeChannel, defaultCategory, nowCategory, nowChannel };
};
