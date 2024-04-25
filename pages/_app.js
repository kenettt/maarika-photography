import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { GA_TRACKING_ID } from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.done();
      gtag.pageview(url);
    };

    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeError", () => NProgress.done());
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <>
      {GA_TRACKING_ID && (
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
      )}
      <Head>
        <link rel="icon" href="/images/icons/camera.svg" />
        <meta
          property="og:image"
          content="/images/background/fog-nature-beauty.webp"
        />
        <meta property="og:image:alt" content="hero image" />
      </Head>
      <Script rel="stylesheet" href="https://use.typekit.net/uap4lsu.css" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
