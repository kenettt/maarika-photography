import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script rel="stylesheet"  href="https://use.typekit.net/uap4lsu.css" />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
