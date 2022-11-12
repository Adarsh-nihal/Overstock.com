import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar/Navbar"
import MainRoutes from './Component/MainRoutes';
import Mugs from './Component/Mugs';
import LoginPage from './Pages/LoginPage';
import CookiesCutter from './Component/CookiesCutter';
import Mixtures from './Component/Mixtures';
import Fryers from './Component/Fryers';
import ListPage from './Pages/ListPage';
import Cart from './Pages/Cart';
import { Home } from './Component/home/Home';
import RespNav from './Component/Navbar/respnav';
import { Footer } from './Component/footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginPage/> */}
      {/* <ListPage/> */}
      <Cart/>
    {/* <MainRoutes />
      <Mugs />
      <CookiesCutter/>
      <Mixtures />
      <Fryers /> */}


    </div>
      
      <Navbar />
      <MainRoutes />
      <Footer/>
 </div>

  );
}

export default App;
