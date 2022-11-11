import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar/Navbar"
import MainRoutes from './Component/MainRoutes';
import { Home } from './Component/home/Home';



function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <MainRoutes />
 </div>

  );
}

export default App;
