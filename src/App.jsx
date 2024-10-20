import React from "react";
// import "./index.css";
import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <Counter /> */}
    </BrowserRouter>
  );
};

export default App;