import '@/styles/globals.css'
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import NavbarApp from '@/components/NavbarApp';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 1500);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <div className='h-screen w-screen flex fixed top-0 bottom-0 z-20 bg-white justify-center items-center'>
      <Spin size={100} />
    </div>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Loading />
      <NavbarApp />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
