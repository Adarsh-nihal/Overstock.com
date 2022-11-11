import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar"
import MainRoutes from './Component/MainRoutes';

import LoginPage from './Pages/LoginPage';


import ListPage from './Pages/ListPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoutes />
    
    </div>
  );
}

export default App;
