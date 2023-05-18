import React from 'react';
import { RestfulProvider } from 'restful-react';
import { AppProps } from 'next/app';
import { MovieProvider } from '../providers/movie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RestfulProvider base="https://localhost:44311/api/">
      <MovieProvider>
        <Component {...pageProps} />
      </MovieProvider>
    </RestfulProvider>
  );
}

export default MyApp;

