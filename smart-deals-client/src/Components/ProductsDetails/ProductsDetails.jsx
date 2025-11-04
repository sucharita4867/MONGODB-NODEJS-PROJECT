import React from "react";
import { useLoaderData } from "react-router";

const ProductsDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas,
        mollitia eum modi vel ipsa officia, autem optio natus quam unde numquam
        beatae, corporis ipsam quos laboriosam distinctio atque? Consequuntur?
      </h3>
    </div>
  );
};

export default ProductsDetails;
