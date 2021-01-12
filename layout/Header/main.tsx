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

  // theming
  const [themeVariable, setThemeVariable] = React.useState<"dark" | "light">(
    "dark"
  );
  React.useEffect(() => {
    if (
      localStorage.getItem("school-ecommerce-theme") === "dark" ||
      (!localStorage.getItem("school-ecommerce-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      setThemeVariable("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      setThemeVariable("light");
    }
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
        <div
          className={`flex sm:flex md:hidden py-5 px-3 sm:-px-4 md:px-0 border-b border-gray-100 dark:border-gray-800 flex-row items-center justify-between`}
        >
          <div>
            <span
              className={
                "font-extrabold uppercase dark:text-gray-500 text-teal-700"
              }
            >
              School Commerce
            </span>
          </div>
          <div className={"flex flex-row items-center"}>
            <div className={"mr-3"}>
              {themeVariable === "dark" ? (
                <React.Fragment>
                  <div
                    onClick={() => {
                      document.querySelector("html").classList.remove("dark");
                      localStorage.setItem("school-ecommerce-theme", "light");
                      setThemeVariable("light");
                    }}
                    className={"cursor-pointer text-white"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className={"h-5 w-5"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div
                    onClick={() => {
                      document.querySelector("html").classList.add("dark");
                      localStorage.setItem("school-ecommerce-theme", "dark");
                      setThemeVariable("dark");
                    }}
                    className={"cursor-pointer text-gray-500"}
                  >
                    <svg
                      className={"h-5 w-5"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </React.Fragment>
              )}
            </div>
            <div className={"mr-3"}>
              <svg
                className={"text-gray-500 h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <svg
                className={"text-teal-500 h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
