import * as React from "react";
import { Props } from "./types.d";
import ProductComponent from "../ProductInGrid";

const CollectionsComponent: React.FC<Props> = ({ name }) => {
  return (
    <React.Fragment>
      <div className={"py-12 sm:py-12 md:py-16"}>
        {/* Header */}
        <div className={"w-full flex justify-center"}>
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
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CollectionsComponent;
