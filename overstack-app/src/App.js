import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar"
import MainRoutes from './Component/MainRoutes';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <MainRoutes />
 

import Mugs from './Component/Mugs';

import LoginPage from './Pages/LoginPage';

import MainRoutes from './Component/MainRoutes';
import CookiesCutter from './Component/CookiesCutter';
import Mixtures from './Component/Mixtures';
import Fryers from './Component/Fryers';
import ListPage from './Pages/ListPage';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <LoginPage/>
      {/* <ListPage/> */}

    {/* <MainRoutes />
      <Mugs />
      <CookiesCutter/>
      <Mixtures />
      <Fryers /> */}


    </div>
  );
}

export default App;
