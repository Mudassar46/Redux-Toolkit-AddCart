import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCartItems, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const cartItems = useSelector(SelectedCartItems);
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer />
      <div className="w-[50%] mx-auto text-center mt-5">
        {cartItems.length === 0 && (
          <>
            <h1 className="text-3xl">Your cart is Empty</h1>
            <Link to={"/"}>
              <button className="bg-yellow-400 text-white rounded py-1  px-3 mt-3">
                Continue Shoping...
              </button>
            </Link>
          </>
        )}

        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className=" w-[100%]  bg-gray-800 rounded-lg shadow-lg overflow-hidden mt-5"
            >
              <div className="flex">
                <div className="w-1/3">
                  <img
                    className="w-full h-full object-cover"
                    src={item.imgSrc}
                    alt="Card Image"
                  />
                </div>
                <div className="w-2/3 p-4 text-center">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-md font-bold mb-2">{item.description}</p>
                  <div>
                    <button className="bg-blue-500 text-white rounded py-1  px-3">
                      {item.price} RS
                    </button>
                    <button className="bg-yellow-400 text-white rounded py-1  px-3 ml-3">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cartItems.length !== 0 && (
          <button
            className="bg-yellow-400 text-white rounded py-1  px-3 m-5"
            onClick={() => {
              dispatch(clearCart());
              toast.success("Clear cart sucessfuly", {
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
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
