import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import MainRoutes from "./Component/MainRoutes";
import { Footer } from "./Component/home/footer";
import RespNav from "./Component/Navbar/respnav";

function App() {
  return (
    <div className="App">
      <div className="main-nav">
        <Navbar />
      </div>
      <div className="resp-nav">
        <RespNav />
      </div>
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
