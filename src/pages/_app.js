import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Título de tu página</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

