import '@/styles/reset.scss';
import '@/styles/vars.scss';

import Navbar from '@/layout/Navbar';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
