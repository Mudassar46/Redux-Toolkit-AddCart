import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { SelectedCartItemPrice, SelectedCartItems } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalCartPrice = useSelector(SelectedCartItemPrice);
  const totalCartItems = useSelector(SelectedCartItems);
  return (
    <>
      <div className="flex justify-between py-[15px] bg-blue-700 text-white p-2 sticky top-0">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold ">Redux Toolkit</h1>
        </Link>
        <button className="bg-yellow-500 px-2 rounded text-md">
          Cart item total price= {totalCartPrice} RS
        </button>

        <Link to={"/cart"}>
          {" "}
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg"
          >
            <FaShoppingCart />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white text-xs font-bold translate-x-1/2 -translate-y-1/2">
              {totalCartItems.length}
              <span className="sr-only">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
