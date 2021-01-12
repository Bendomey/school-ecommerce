import * as React from "react";
import { Props } from "./types.d";

const getDiscountPrice = (price: number, discount: number): string => {
  let discountedPrice: number = price - (discount / 100) * price;

  return discountedPrice.toFixed(2);
};

const ProductComponentInGrid: React.FC<Props> = ({ data }) => {
  const [hoverEffect, setHoverEffect] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <div
        className={"w-full border-b border-gray-200 dark:border-gray-800 pb-5"}
      >
        <div
          onMouseEnter={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
          className={" mb-3 w-full relative"}
        >
          {/* bg-gray-50 dark:bg-gray-800  */}
          <img
            src={data?.image}
            style={{ width: "90%", height: "90%" }}
            alt=""
          />
          {/* for discounts */}
          {data?.discount && (
            <div className={"absolute top-4 right-4"}>
              <div className={"bg-yellow-400 text-white px-1 py-2 text-sm"}>
                {data?.discount}% DISCOUNT
              </div>
            </div>
          )}
          {/* for outta stock */}
          {data?.stock === 0 && (
            <div
              className={
                "absolute bottom-20 sm:bottom-20 md:bottom-32 w-full flex justify-center opacity-90 bg-white dark:bg-gray-900 py-3"
              }
            >
              <span
                className={
                  "uppercase text-gray-600 dark:text-white text-center text-xs font-bold"
                }
              >
                out of stock
              </span>
            </div>
          )}
          {/* for viewing product */}
          {hoverEffect && (
            <React.Fragment>
              {/* <div
                className={
                  "absolute  top-4 left-4 bg-white p-2 cursor-pointer group hover:bg-teal-500"
                }
              >
                <span
                  className={
                    "uppercase tracking-wider text-center text-xs font-extrabold text-white flex justify-center"
                  }
                >
                  <svg
                    className={"h-5 w-5 text-gray-700 group-hover:text-white"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div> */}
              <div
                className={
                  "absolute w-full bottom-0  bg-gray-700 py-3 cursor-pointer hover:bg-teal-500"
                }
              >
                <span
                  className={
                    "uppercase tracking-wider text-center text-xs font-light text-white flex justify-center"
                  }
                >
                  quick view
                </span>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className={"w-full flex flex-col items-center"}>
          <span className={"font-thin text-sm text-gray-400"}>
            {data?.name}
          </span>
          <span className={"text-gray-900 mt-1 font-semibold dark:text-white"}>
            {data?.discount && (
              <React.Fragment>
                <span className={"line-through text-gray-600 text-sm"}>
                  GH¢ {data?.price}
                </span>{" "}
              </React.Fragment>
            )}
            GH¢ {getDiscountPrice(data?.price, data?.discount)}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductComponentInGrid;
