import { Fragment, useState, FC, useEffect } from "react";
import styles from "./slider.module.css";
import {
  SliderState,
  SliderContentProp,
  SliderProp,
  SliderComponentProp,
  DotsProp,
} from "./types.d";

import Link from "next/link";

const SliderComponent: FC<SliderComponentProp> = ({ slides }) => {
  const [active, setActive] = useState<number>(0);
  const [state, setState] = useState<SliderState>({
    translate: 0,
    transition: 0.45,
  });

  useEffect(() => {
    let timeout = null;
    timeout = setInterval(() => {
      if (active === slides.length - 1) setActive(0);
      else setActive(active + 1);
    }, 5000);
    return () => {
      clearInterval(timeout);
    };
  }, [active]);

  return (
    <Fragment>
      <div className={styles.sliderContainer}>
        <SliderContent
          transition={state.transition}
          translate={state.translate}
        >
          {slides.map((slide, i) => (
            <Slider
              head={slide.head}
              body={slide.body}
              active={active === i}
              key={i}
              content={slide.slide}
              showButton={slide.showButton}
            />
          ))}
        </SliderContent>
        <Dots active={active} slides={slides} setActive={setActive} />
      </div>
    </Fragment>
  );
};

const SliderContent: FC<SliderContentProp> = ({
  transition,
  translate,
  children,
}) => {
  return (
    <Fragment>
      <div
        style={{
          width: `100vw`,
          height: "100%",
          display: "flex",
          transform: `translateX(-${translate}px)`,
          transition: `transform ease-out ${transition}s`,
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

const Slider: FC<SliderProp> = ({
  content,
  active,
  head,
  body,
  showButton,
}) => {
  return (
    <Fragment>
      <div
        className={
          "w-screen h-full bg-white dark:bg-gray-900 SliderContainer " +
          styles.homeCarouselContainer
        }
        style={{
          backgroundImage: "url(" + content + ")",
        }}
      >
        <div
          className={`${
            active ? "absolute left-0 sm:left-0 md:left-48" : "static"
          } max-w-screen-1xl w-full h-full mx-auto px-4 sm:px-6  lg:px-0`}
        >
          <div
            className={
              "flex flex-col h-full justify-center flex-wrap items-start px-5"
            }
          >
            {showButton && (
              <span className={"text-md sm:text-md md:text-sm text-white mb-5"}>
                Our Products
              </span>
            )}
            <span
              // data-aos={"fade-right"}
              className={
                "mb-2 text-1xl sm:text-1xl lg:text-2xl text-white font-medium flex flex-wrap " +
                styles.customOnlineText
              }
            >
              {head}
              <br />
              {body}
            </span>
            {showButton && (
              <Link href={"/shop"}>
                <a
                  // data-aos={"fade-up"}
                  className={
                    " bg-teal-900 hover:bg-teal-600 text-white sm:text-teal-600 md:text-white px-5 py-2 rounded-sm hover:text-white hover:border-secondary cursor-pointer"
                  }
                >
                  Shop Now
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .SliderContainer {
            position: ${active ? "absolute" : "static"};
          }
        `}
      </style>
    </Fragment>
  );
};

const Dots: FC<DotsProp> = ({ active, slides, setActive }) => {
  return (
    <Fragment>
      <div className={styles.dotContainer}>
        {slides.map((a: any, i: number) => (
          <Fragment key={i}>
            <div
              onClick={() => setActive(i)}
              className={`cursor-pointer p-1 sm:p-1 md:p-2 rounded-full mr-3 border-2 border-transparent ${
                active === i ? "bg-white" : "border-white"
              }`}
            />
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default SliderComponent;
