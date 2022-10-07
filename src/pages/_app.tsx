import Navbar from '@/layout/Navbar';
import '@/styles/reset.scss';
import '@/styles/vars.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
