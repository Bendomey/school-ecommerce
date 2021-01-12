import * as React from "react";
import { Props } from "./types.d";
import ProductComponent from "../ProductInGrid";

const data = [
  {
    _id: 1,
    name: "Night Party Dress",
    price: 108,
    discount: null,
    stock: 10,
    image: "http://deothemes.com/envato/aha/shop/img/shop/shop_item_1.jpg",
  },
  {
    _id: 2,
    name: "Night Party Dress",
    price: 128,
    discount: null,
    stock: 0,
    image: "http://deothemes.com/envato/aha/shop/img/shop/shop_item_2.jpg",
  },
  {
    _id: 3,
    name: "Night Party Dress",
    price: 148,
    discount: 10,
    stock: 10,
    image: "http://deothemes.com/envato/aha/shop/img/shop/shop_item_3.jpg",
  },
  {
    _id: 4,
    name: "Night Party Dress",
    price: 18,
    discount: null,
    stock: 10,
    image: "http://deothemes.com/envato/aha/shop/img/shop/shop_item_4.jpg",
  },
];

const CollectionsComponent: React.FC<Props> = ({ name }) => {
  return (
    <React.Fragment>
      <div className={"py-12 sm:py-12 md:py-16"}>
        {/* Header */}
        <div className={"w-full flex mb-10 justify-center"}>
          <span
            className={
              "text-center uppercase tracking-wider text-2xl font-light text-gray-600 dark:text-white"
            }
          >
            {name}
          </span>
        </div>
        {/* body */}
        <div
          className={
            "mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3"
          }
        >
          {data?.map((product: any, i: number) => (
            <React.Fragment key={i}>
              <ProductComponent data={product} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CollectionsComponent;
