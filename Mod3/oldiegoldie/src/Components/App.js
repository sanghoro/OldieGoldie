import '../Styles/App.css';
import Mainpage from './Mainpage';
import AllItems from './AllItems';
import ShoppingBag from './ShoppingBag';
import SearchItems from './SearchItems';
import WomensFashion from './WomensFashion';
import MensFashion from './MensFashion';
import Jewelry from './Jewelry'
import Electronics from './Electronics'
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/all-items" element={<AllItems />} />
          <Route path="/search" element={<SearchItems />} />
          <Route path="/shopping-bag" element={<ShoppingBag />} />
          <Route path="/womens-fashion" element={<WomensFashion />} />
          <Route path="/mens-fashion" element={<MensFashion />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;