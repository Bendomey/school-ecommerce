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
          {/* for newsletter */}

          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="px-6 py-6 bg-gray-100 dark:bg-gray-800 rounded-none md:py-12 md:px-12 lg:py-10 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-1xl sm:text-1xl md:text-lg font-thin  text-center tracking-wider text-gray-600 dark:text-gray-400">
                  SUBSCRIBE TO RECEIVE OUR UPDATES
                </h2>
              </div>
              <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form className="sm:flex">
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-600 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-teal-400 focus:ring-offset-teal-500 focus:ring-white rounded-none"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-none text-white bg-gray-600 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Fragment>
      </Layout>
    </Fragment>
  );
}
