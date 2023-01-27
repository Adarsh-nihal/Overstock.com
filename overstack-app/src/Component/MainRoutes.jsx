import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import ListPage from "../Pages/ListPage";
import { Home } from "./home/Home";
import Cart from "../Pages/Cart";
import AdminAdd from "./AdminPages/AdminAdd";
import PrivateRoute from "./private/privateRoute";
import AdminPrivate from "./private/AdminPrivate";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/:category" element={<Products />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route
        path="/Cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      {/* Admin Pages */}
      <Route
        path="/admin"
        element={
          <AdminPrivate>
            <AdminAdd />
          </AdminPrivate>
        }
      />
      {/*  single pages with private Route */}
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default MainRoutes;
