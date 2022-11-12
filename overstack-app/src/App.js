import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar/Navbar"
import MainRoutes from './Component/MainRoutes';
import { Home } from './Component/home/Home';
import RespNav from './Component/Navbar/respnav';
import { Footer } from './Component/footer';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <MainRoutes />
      <Footer/>
 </div>

  );
}

export default App;
