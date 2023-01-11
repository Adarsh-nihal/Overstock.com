import React from "react";
import { Route, Routes } from "react-router-dom";
import MugsSingle from "./SinglePages/MugsSingle";
import CookiesSingle from "./SinglePages/CookiesSingle";
import MixturesSingle from "./SinglePages/MixturesSingle";
import FreyersSingle from "./SinglePages/FreyersSingle";
import LampSingle from "./SinglePages/LampSingle";
import BlanketSingle from "./SinglePages/BlanketSingle";
import TowelSingle from "./SinglePages/TowelSingle";
import TreeSingle from "./SinglePages/TreeSingle";
import GarlandSingle from "./SinglePages/GarlandSingle";
import Mugs from "./CategoryPages/Mugs";
import CookiesCutter from "./CategoryPages/CookiesCutter";
import Mixtures from "./CategoryPages/Mixtures";
import Fryers from "./CategoryPages/Fryers";
import Lamps from "./CategoryPages/Lamps";
import Towels from "./CategoryPages/Towels";
import Blankets from "./CategoryPages/Blankets";
import Tree from "./CategoryPages/Tree";
import Garland from "./CategoryPages/Garland";
import LoginPage from "../Pages/LoginPage";
import ListPage from "../Pages/ListPage";
import { Home } from "./home/Home";
import Cart from "../Pages/Cart";
import AdminAdd from "./AdminPages/AdminAdd";
import PrivateRoute from "./private/privateRoute";
import AdminPrivate from "./private/AdminPrivate";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mug" element={<Mugs />} />
      <Route path="/cookingCutters" element={<CookiesCutter />} />
      <Route path="/mixers" element={<Mixtures />} />
      <Route path="/fryer" element={<Fryers />} />
      <Route path="/lamps" element={<Lamps />} />
      <Route path="/towels" element={<Towels />} />
      <Route path="/blankets" element={<Blankets />} />
      <Route path="/tree" element={<Tree />}></Route>
      <Route path="/garland" element={<Garland />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route
        path="/admin"
        element={
          <AdminPrivate>
            <AdminAdd/>
          </AdminPrivate>
         
        }
      />

      {/*  single pages with private Route */}

      <Route
        path="/mugs/:id"
        element={
          <PrivateRoute>
            <MugsSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/cookingCutters/:id"
        element={
          <PrivateRoute>
            <CookiesSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/mixers/:id"
        element={
          <PrivateRoute>
            <MixturesSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/fryers/:id"
        element={
          <PrivateRoute>
            <FreyersSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/lamps/:id"
        element={
          <PrivateRoute>
            <LampSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/towels/:id"
        element={
          <PrivateRoute>
            <TowelSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/blankets/:id"
        element={
          <PrivateRoute>
            <BlanketSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/tree/:id"
        element={
          <PrivateRoute>
            <TreeSingle />
          </PrivateRoute>
        }
      />
      <Route
        path="/garland/:id"
        element={
          <PrivateRoute>
            <GarlandSingle />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
