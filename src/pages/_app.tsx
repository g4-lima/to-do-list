import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>  
  )  
};

export default MyApp;
