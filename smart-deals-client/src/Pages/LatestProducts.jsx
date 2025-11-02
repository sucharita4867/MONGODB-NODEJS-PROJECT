import React, { use } from "react";
import Products from "./Products";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  console.log(products);
  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold">
        Recent <span className="text-Primary">Products</span>
      </h2>
      <div className="grid mt-4 gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
