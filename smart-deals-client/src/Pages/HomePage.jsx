import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="text-center font-bold p-10 space-y-5 border ">
        <h1 className="text-2xl">Deal your Products in a Smart way !</h1>
        <p className="xl">
          Deal your Products in a Smart way ! SmartDeals helps you sell, resell,
          and shop from trusted local sellers — all in one place! search For
          Products, Categoriees... Watch All Products Post an Product
        </p>
        <div className="mt-4 gap-3 flex justify-center items-center">
          <button className="btn-Primary">Watch All Products</button>
          <button className="btn-Primary">Post an Product</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
