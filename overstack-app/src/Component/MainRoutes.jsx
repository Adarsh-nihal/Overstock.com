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
      <Route path="/mug" element={<Products category={"mugs"} />} />
      <Route
        path="/cookingCutters"
        element={<Products category={"cutters"} />}
      />
      <Route path="/mixers" element={<Products category={"mixers"} />} />
      <Route path="/fryer" element={<Products category={"fryers"} />} />
      <Route path="/lamps" element={<Products category={"lamps"} />} />
      <Route path="/towels" element={<Products category={"towels"} />} />
      <Route path="/blankets" element={<Products category={"blankets"} />} />
      <Route path="/tree" element={<Products category={"tree"} />}></Route>
      <Route path="/garland" element={<Products category={"garland"} />} />
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
