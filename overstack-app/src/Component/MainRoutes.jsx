import React from 'react'
import { Route, Routes } from "react-router-dom";
import MugsSingle from './MugsSingle';
import CookiesSingle from './CookiesSingle';
import MixturesSingle from './MixturesSingle';
import FreyersSingle from './FreyersSingle';
import LampSingle from './LampSingle';
import BlanketSingle from './BlanketSingle';
import TowelSingle from './TowelSingle';
import TreeSingle from './TreeSingle';
import GarlandSingle from './GarlandSingle';
import Mugs from './Mugs';
import CookiesCutter from './CookiesCutter';
import Mixtures from './Mixtures';
import Fryers from './Fryers';
import Lamps from './Lamps';
import Towels from './Towels';
import Blankets from './Blankets';
import Tree from './Tree';
import Garland from './Garland';
 import LoginPage from '../Pages/LoginPage';
 import ListPage from "../Pages/ListPage"
import { Home } from './home/Home';
import Cart from "../Pages/Cart"
import AdminAdd from './AdminAdd';
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
      <Route path="/admin" element={<AdminAdd />} />




       <Route path="/mugs/:id" element={<MugsSingle />} />
       <Route path="/cookingCutters/:id" element={<CookiesSingle />} />
       <Route path="/mixers/:id" element={<MixturesSingle />} />
       <Route path="/fryers/:id" element={<FreyersSingle />} />
       <Route path="/lamps/:id" element={<LampSingle />} />
       <Route path="/towels/:id" element={<TowelSingle />} />
       <Route path="/blankets/:id" element={<BlanketSingle />} />
       <Route path="/tree/:id" element={<TreeSingle />} />
       <Route path="/garland/:id" element={<GarlandSingle />} />
    </Routes>
  )
}

export default MainRoutes