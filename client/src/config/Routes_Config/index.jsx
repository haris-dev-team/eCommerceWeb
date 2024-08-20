import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../../pages/Home";
import { Layout } from "../../components/Layout";
import Product from "../../pages/Product";
import Product_Details from "../../pages/Product_Details";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Order from "../../pages/order/Order";
import Order_Details from "../../pages/order/Order_Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/prdoucts" element={<Product />} />
      <Route path="/product/:productId" element={<Product_Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
      <Route path="/check-out" element={<Checkout />} />
      <Route path="/account/order" element={<Order />} />
      <Route path="/account/order/:orderId" element={<Order_Details />} />
    </Route>
  )
);

export const Router_Config = () => {
  return <RouterProvider router={router} />;
};
