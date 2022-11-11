import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import MainRoutes from "./Component/MainRoutes";
import Mugs from "./Component/Mugs";
import LoginPage from "./Pages/LoginPage";
import CookiesCutter from "./Component/CookiesCutter";
import Mixtures from "./Component/Mixtures";
import Fryers from "./Component/Fryers";
import ListPage from "./Pages/ListPage";
import RespNav from "./Component/Navbar/respnav";
import { Footer } from "./Component/footer";
import { Home } from "./Component/home/Home";

function App() {
  return (
    <div className="App">
      <div  className="main-nav">
        <Navbar/>
      </div>
      <div className="resp-nav">
        <RespNav/>
      </div>
      <Home/>
      <LoginPage />
      <ListPage />
      <MainRoutes />
      <Mugs />
      <CookiesCutter />
      <Mixtures />
      <Fryers />
      <Footer/>
    </div>
  );
}

export default App;
