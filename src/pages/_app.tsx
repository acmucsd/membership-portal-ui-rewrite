import '@/styles/reset.scss';
import '@/styles/vars.scss';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '@/layout/Navbar';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
