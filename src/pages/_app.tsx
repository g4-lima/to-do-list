import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import store from '../redux/store';
import { Provider } from 'react-redux';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Sidebar />
      <Component {...pageProps} />
    </Provider>  
  )  
};

export default MyApp;
