import logo from './logo.svg';
import './App.css';
import Mugs from './Component/Mugs';
import MainRoutes from './Component/MainRoutes';
import CookiesCutter from './Component/CookiesCutter';
import Mixtures from './Component/Mixtures';
import Fryers from './Component/Fryers';

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Mugs />
      <CookiesCutter/>
      <Mixtures />
      <Fryers />
    </div>
  );
}

export default App;
