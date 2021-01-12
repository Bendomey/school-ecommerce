import Head from "next/head";
import { Fragment } from "react";
import Layout, { siteTitle } from "../layout";
import { ClipLoader } from "react-spinners";
import dynamic from "next/dynamic";
import SliderComponent from "../components/molecules/Slider";

const images: {
  head: string;
  body: string;
  slide: string;
  showButton: boolean;
}[] = [
  {
    slide: "http://deothemes.com/envato/aha/shop/img/slider/1.jpg",
    head: "WELCOME TO SCHOOL COMMERCE",
    body: "WE ARE HAPPY TO HAVE YOU ",
    showButton: true,
  },
  {
    slide: "http://deothemes.com/envato/aha/shop/img/slider/2.jpg",
    head: "HAPPY SUMMER COMBO SUPER",
    body: "COOL UP TO 40% OFF",
    showButton: true,
  },
  {
    slide: "http://deothemes.com/envato/aha/shop/img/slider/3.jpg",
    head: "SCANDINAVIAN COLLECTION",
    body: "FOR YOUR BEDROOM JUST $599",
    showButton: true,
  },
];

const SliderComponentBasic = () => {
  return (
    <Fragment>
      <div className={"w-full md:h-full bg-red-500"}>
        <SliderComponent slides={images} />
      </div>
    </Fragment>
  );
};

//for logo clouds
const LogoCloudsComponent = dynamic(
  () => import("../components/molecules/logoCloud"),
  {
    ssr: false,
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return (
          <div className={"w-full flex justify-center items-center"}>
            <ClipLoader color={"#02A68F"} size={20} />
          </div>
        );
      }
      if (error) {
        return (
          <Fragment>
            <div className={"w-full flex flex-col justify-center items-center"}>
              <p>Oops, something happened</p>
              <button onClick={retry}>click to try reloading</button>
            </div>
          </Fragment>
        );
      }
    },
  }
);

//for Collections
const CollectionsComponent = dynamic(
  () => import("../components/molecules/Collections"),
  {
    ssr: false,
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return (
          <div className={"w-full flex justify-center items-center"}>
            <ClipLoader color={"#0AC9D0"} size={20} />
          </div>
        );
      }
      if (error) {
        return (
          <Fragment>
            <div className={"w-full flex flex-col justify-center items-center"}>
              <p>Oops, something happened</p>
              <button onClick={retry}>click to try reloading</button>
            </div>
          </Fragment>
        );
      }
    },
  }
);

//for category courses
const CategoriesComponent = dynamic(
  () => import("../components/molecules/categories"),
  {
    ssr: false,
    loading: ({ isLoading, error, retry }) => {
      if (isLoading) {
        return (
          <div className={"w-full flex justify-center items-center"}>
            <ClipLoader color={"#0AC9D0"} size={20} />
          </div>
        );
      }
      if (error) {
        return (
          <Fragment>
            <div className={"w-full flex flex-col justify-center items-center"}>
              <p>Oops, something happened</p>
              <button onClick={retry}>click to try reloading</button>
            </div>
          </Fragment>
        );
      }
    },
  }
);

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{siteTitle} - Welcome</title>
      </Head>

      <Layout>
        <Fragment>
          {/* for slider */}
          <div className="px-2 sm:-px-2 md:px-0">
            <SliderComponentBasic />
          </div>

          {/* for schools */}
          <div className={"pt-5 px-2 sm:-px-2 md:px-0"}>
            <LogoCloudsComponent />
          </div>

          {/* for New Arrivals */}
          <div className="px-2 sm:-px-2 md:px-0">
            <CollectionsComponent name={"New Arrivals"} />
          </div>

          {/* for newsletter */}
          <div className="px-2 sm:-px-2 md:px-0">
            <div className="px-6 py-6 bg-gray-100 dark:bg-gray-800 rounded-none md:py-12 md:px-12 lg:py-10 lg:px-16 xl:flex xl:items-center">
              <div className="xl:w-0 xl:flex-1">
                <h2 className="text-1xl sm:text-1xl md:text-lg font-light  text-center tracking-wider text-gray-600 dark:text-gray-400">
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
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-sm tracking-wider font-light rounded-none text-white bg-gray-600 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:w-auto sm:flex-shrink-0"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* for best sellers */}
          <div className="px-2 sm:-px-2 md:px-0">
            <CollectionsComponent name={"Best Sellers"} />
          </div>

          {/* Our courses section */}
          <div className={"pb-10 px-2 sm:px-2 md:px-0"}>
            <div className={"flex flex-col justify-center items-center"}>
              <p className="mt-2  text-black dark:text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Categories
              </p>
              <div className={"md:w-1/2 mb-2"}>
                <p className="mt-3 text-lg text-center font-thin text-gray-500 dark:text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  ultrices
                </p>
              </div>
            </div>
            <CategoriesComponent />
          </div>
        </Fragment>
      </Layout>
    </Fragment>
  );
}
