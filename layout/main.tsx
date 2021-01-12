import * as React from "react";
import Head from "next/head";
import { siteTitle } from ".";
import TopBar from "./top";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

const MainLayoutComponent: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteTitle + " - By your school stuff here! "}
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={" bg-white dark:bg-gray-900 flex-1"}>
        <div className={"max-w-6xl mx-auto"}>
          <TopBar />
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayoutComponent;
