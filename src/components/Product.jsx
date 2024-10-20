import React from "react";
import { Products } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[100px]">
        {Products.map((item) => {
          return (
            <div className=" my-5 max-w-sm rounded overflow-hidden shadow-lg bg-gray-800  ">
              <div className="p-3 flex justify-center items-center rounded-xl ">
                <img
                  className="w-[200px] h-[200px] rounded"
                  src={item.imgSrc}
                  alt="Card Image 1"
                />
              </div>

              <div className="px-6 py-4 text-gray-300 text-center">
                <h5 cl>{item.title}</h5>
                <p className="text-gray-300 text-base">{item.description}</p>
                <div className="mt-2">
                  <button className="bg-blue-500 text-white rounded py-1  px-3">
                    {item.price} RS
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-400 text-white rounded py-1  px-3 ml-3"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
