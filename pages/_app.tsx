import "../styles/tailwind.css";
import "nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Fragment } from "react";

//top nav progress bar
const TopProgressBar = dynamic(
  () => {
    return import("../components/atoms/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <TopProgressBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
