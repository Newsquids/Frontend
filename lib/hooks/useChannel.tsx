import { useRouter } from "next/router";

export const useChannel = () => {
  const router = useRouter();

  const handleChangeCategory = (isTraditional: boolean) => {
    if (typeof window !== 'undefined') {
      if (isTraditional) {
        window.sessionStorage.setItem('categroy', 'Traditional');
      } else {
        window.sessionStorage.setItem('categroy', 'Crypto');
      }
    }
  };

  const handleChangeChannel = (value: string, isTraditional: boolean) => {
    if (typeof window !== 'undefined') {
      if (isTraditional) {
        window.sessionStorage.setItem('traditionalChannel', value);
      } else {
        window.sessionStorage.setItem('cryptoChannel', value);
      }
    }
  };

  const defaultCategory = () => {
    if (typeof window !== 'undefined') {
      if (!window.sessionStorage.getItem('traditionalChannel')) {
        window.sessionStorage.setItem('traditionalChannel', 'CNBC');
        window.sessionStorage.setItem('cryptoChannel', 'COINDESK');
      }
    }
  };

  const nowCategory = () => {
    if (typeof window !== 'undefined') {
      return window.sessionStorage.getItem('categroy');
    }
  };

  const nowChannel = (isTraditional: boolean) => {
    if (typeof window !== 'undefined') {
      if (isTraditional) {
        return window.sessionStorage.getItem('traditionalChannel');
      } else {
        return window.sessionStorage.getItem('cryptoChannel');
      }
    }
  };

  const isHome = () => {
    const currentUrl = router.asPath
    return currentUrl === '/' ? true : false
  }

  return { handleChangeCategory, handleChangeChannel, defaultCategory, nowCategory, nowChannel, isHome };
};
