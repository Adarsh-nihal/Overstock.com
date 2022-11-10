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

function App() {
  return (
    <div className="App">
      <div  className="main-nav">
        <Navbar/>
      </div>
      <div className="resp-nav">
        <RespNav/>
      </div>
      <LoginPage />
      <ListPage />
      <MainRoutes />
      <Mugs />
      <CookiesCutter />
      <Mixtures />
      <Fryers />
    </div>
  );
}

export default App;
