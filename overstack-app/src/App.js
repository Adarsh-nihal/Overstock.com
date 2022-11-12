
import './App.css';
import Navbar from "./Component/Navbar/Navbar"
import MainRoutes from './Component/MainRoutes';

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
