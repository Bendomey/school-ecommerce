import * as React from "react";

const ProductComponentInGrid = () => {
  return (
    <React.Fragment>
      <div
        className={"w-full border-b border-gray-200 dark:border-gray-800 pb-5"}
      >
        <div className={"bg-gray-50 dark:bg-gray-800  mb-3 w-full"}>
          <img
            src="http://deothemes.com/envato/aha/shop/img/shop/shop_item_3.jpg"
            alt=""
          />
        </div>
        <div className={"w-full flex flex-col items-center"}>
          <span className={"font-thin text-sm text-gray-400"}>
            Night Party Dress
          </span>
          <span className={"text-gray-900 mt-1 font-extrabold dark:text-white"}>
            $159.99
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductComponentInGrid;
