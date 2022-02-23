import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='vaAaDH_-3EJGyAe78gu1ysTNYEhIkosQZytMoORLuvY'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

