import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";

import { useOutsideListener } from "../Hooks";
import { SideSheetProp } from "./types";
import styles from "./style.module.css";

const SlideSheetComponent = ({
  show,
  setShow,
  title,
  size,
  children,
}: SideSheetProp) => {
  const wrapperRef = useRef(null);
  useOutsideListener(wrapperRef, () => setShow(false));
  return (
    <Fragment>
      <Transition
        appear={undefined}
        show={show}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="translate-x-0"
        leaveTo="opacity-0"
      >
        <div className="fixed z-20 bg-black bg-opacity-75 inset-0 overflow-hidden"></div>
      </Transition>
      <Transition
        appear={undefined}
        show={show}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="-translate-x-full"
        enterTo="-translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="-translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed z-20 inset-0 overflow-hidden">
          <div className="absolute  inset-0 overflow-hidden">
            <section
              ref={wrapperRef}
              className="absolute inset-y-0 left-0  max-w-full flex"
            >
              <div className={styles.widthOfSide}>
                <div className="h-full relative flex flex-col space-y-6 py-3 bg-white shadow-xl ">
                  <header className="px-4 absolute w-full bg-white sm:px-6 pb-3 border-b border-gray-300">
                    <div className="flex items-start justify-between space-x-1">
                      <h2 className="text-lg leading-7 font-medium text-gray-900">
                        <h1
                          className={
                            "text-4xl sm:text-4xl md:text4xl font-bold text-red-700"
                          }
                        >
                          empomart
                        </h1>
                      </h2>
                      <div className="h-7 flex items-center">
                        <button
                          onClick={() => setShow(false)}
                          aria-label="Close panel"
                          className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                        >
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </header>
                  <div className="flex-1 overflow-y-scroll pt-7">
                    {children}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Transition>
    </Fragment>
  );
};

SlideSheetComponent.defaultProps = {
  size: 27,
  title: "Add Feature",
};

SlideSheetComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SlideSheetComponent;
