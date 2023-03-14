import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
    <link rel='icon' href='/img/favicon.ico'/>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    </>
  );
}
export default App
