import * as React from "react";

const HeaderComponent = () => {
  // know your scroll position
  const [
    initialScrollPositionMoved,
    setInitialScrollPositionMoved,
  ] = React.useState<boolean>(false);
  React.useLayoutEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        setInitialScrollPositionMoved(true);
      } else setInitialScrollPositionMoved(false);
    };
  }, []);
  return (
    <React.Fragment>
      <div className={`sticky bg-white dark:bg-gray-900 top-0 z-10 `}>
        <div
          className={`${
            initialScrollPositionMoved ? " py-3 " : "py-10"
          } hidden sm:hidden md:flex border-b border-gray-100 dark:border-gray-800 flex-row items-center justify-between`}
        >
          <div>
            <div>
              <div className="mt-1 w-56 relative rounded-none">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full pr-10 rounded-none bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                  placeholder="Search"
                  aria-invalid="true"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  {/* <!-- Heroicon name: exclamation-circle --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span
              className={"text-2xl text-teal-600 font-black dark:text-gray-500"}
            >
              SCHOOL COMMERCE
            </span>
          </div>
          <div className={"flex flex-row items-center"}>
            <div className={"mr-2"}>
              <span className={"text-sm text-gray-400"}>
                CART /{" "}
                <span className={"font-light text-gray-600 dark:text-gray-200"}>
                  GHS 0.00
                </span>
              </span>
            </div>
            <div className={"relative"}>
              <svg
                className={"text-gray-400 h-7 w-7"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <div
                className={
                  "absolute -top-3 -right-2 py-1 px-2 flex justify-center items-center rounded-full bg-teal-400"
                }
              >
                <span className={"text-xs text-white"}>0</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "py-2 hidden sm:hidden md:flex border-b border-gray-100 dark:border-gray-800 flex-row items-center justify-center"
          }
        >
          <div className="flex items-center space-x-7">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 dark:hover:text-teal-600 hover:text-teal-600"
            >
              <span className="font-light text-sm">HOME</span>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 dark:hover:text-teal-600 hover:text-teal-600"
            >
              <span className="font-light text-sm">SHOP</span>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 dark:hover:text-teal-600 hover:text-teal-600"
            >
              <span className="font-light text-sm">CART</span>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 dark:hover:text-teal-600 hover:text-teal-600"
            >
              <span className="font-light text-sm">CONTACT US</span>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 dark:hover:text-teal-600 hover:text-teal-600"
            >
              <span className="font-light text-sm">ABOUT US</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
