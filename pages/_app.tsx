import React from 'react';
import { RestfulProvider } from 'restful-react';
import { AppProps } from 'next/app';
import { MovieProvider } from '../providers/movie';
import { UserProvider } from '../providers/user';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RestfulProvider base="https://localhost:44311/api/">
      <UserProvider>
          <MovieProvider>
            <Component {...pageProps} />
          </MovieProvider>
      </UserProvider>
      
    </RestfulProvider>
  );
}

export default MyApp;

