import React from "react";
import { useLoaderData } from "react-router";

const ProductsDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
        soluta nemo.
      </h1>
    </div>
  );
};

export default ProductsDetails;
