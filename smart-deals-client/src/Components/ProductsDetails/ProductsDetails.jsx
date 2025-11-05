import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const ProductsDetails = () => {
  const { user } = use(AuthContext);
  const { _id: productId } = useLoaderData();
  const bidModalRef = useRef(null);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(productId, name, email, bid);

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after placing bid", data);
      });
  };

  return (
    <div>
      {/* products info */}
      <div className="grid grid-cols-12">
        <div className="col-span-6 border">
          <h1>left side content</h1>
        </div>
        <div className="col-span-6 border ">
          <h1>right side content</h1>
          <button onClick={handleBidModalOpen} className="btn-Primary w-full">
            bits products
          </button>

          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer!</h3>
              <p className="py-4">Offer something seller can not resist</p>

              <form onSubmit={handleBidSubmit} className="">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    defaultValue={user.displayName}
                    readOnly
                    name="name"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    defaultValue={user.email}
                    readOnly
                  />
                  {/* bid amount */}
                  <label className="label">Bid</label>
                  <input
                    type="text"
                    name="bid"
                    className="input"
                    placeholder="Your Bid"
                  />
                  <button className="btn btn-neutral mt-4">
                    Please your bid
                  </button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bid for products  */}
      <div></div>
    </div>
  );
};

export default ProductsDetails;
