import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import strings from '../lang/Lang';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => { NProgress.start() })
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    strings.setLanguage(router?.locale ?? 'en');
  }, [router.locale])

  return <Component {...pageProps} />
}
export default MyApp
