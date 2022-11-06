import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <link rel="icon" href="/images/icons/camera.svg" />
    </Head>
    <Script rel="stylesheet"  href="https://use.typekit.net/uap4lsu.css" />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
