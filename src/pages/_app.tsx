import Navbar from '@/layout/Navbar';
import '@/styles/reset.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />;
    </main>
  );
}
