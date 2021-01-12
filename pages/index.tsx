import Head from "next/head";
import { Fragment } from "react";
import Layout, { siteTitle } from "../layout";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{siteTitle} - Welcome</title>
      </Head>

      <Layout>
        <Fragment>
          <h1>xljcv</h1>
        </Fragment>
      </Layout>
    </Fragment>
  );
}
