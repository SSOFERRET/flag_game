import '../styles/globals.css';
import type { AppProps } from 'next/app';

const background = '/images/background.webp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <div className='wrapper'> */}
        <img className='background' src={background} alt='배경이미지'/>
      {/* </div> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
