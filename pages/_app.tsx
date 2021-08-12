import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router';
import strings from '../lang/Lang';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    strings.setLanguage(router?.locale ?? 'en');
  }, [router.locale])

  return <Component {...pageProps} />
}
export default MyApp
