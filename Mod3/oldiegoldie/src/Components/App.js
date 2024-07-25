import '../Styles/App.css';
import Mainpage from './Mainpage';
import AllItems from './AllItems';
import ShoppingBag from './ShoppingBag';
import SearchItems from './SearchItems';
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
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;