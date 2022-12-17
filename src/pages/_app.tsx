import 'antd/dist/antd.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-Y67T8Y0MTE"
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y67T8Y0MTE');`}
    </Script>
    <Component {...pageProps} />
  </>
);

export default MyApp;
