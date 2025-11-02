import React from "react";
import Banner from "../../Pages/HomePage";
import LatestProducts from "../../Pages/LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <Banner />
      <LatestProducts latestProductsPromise={latestProductsPromise} />
    </div>
  );
};

export default Home;
