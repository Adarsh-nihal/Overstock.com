import React from 'react'
import { Route, Routes } from "react-router-dom";
import MugsSingle from './MugsSingle';
import CookiesSingle from './CookiesSingle';
import MixturesSingle from './MixturesSingle';
import FreyersSingle from './FreyersSingle';
const MainRoutes = () => {
  return (
    <Routes>
       <Route path="/mugs/:id" element={<MugsSingle />} />
       <Route path="/cookingCutters/:id" element={<CookiesSingle />} />
       <Route path="/mixers/:id" element={<MixturesSingle />} />
       <Route path="/fryers/:id" element={<FreyersSingle />} />



    </Routes>
  )
}

export default MainRoutes