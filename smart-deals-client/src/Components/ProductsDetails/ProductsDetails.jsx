import React from "react";
import { useLoaderData } from "react-router";

const ProductsDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return <div></div>;
};

export default ProductsDetails;
