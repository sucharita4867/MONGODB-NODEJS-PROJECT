import React, { useRef } from "react";
import { useLoaderData } from "react-router";

const ProductsDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const bidModalRef = useRef(null);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
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
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
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
      {/* bits for products  */}
    </div>
  );
};

export default ProductsDetails;
