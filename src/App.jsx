import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Latest from './components/Latest'
import Unique from './components/Unique'
import Trending from './components/Trending'
import Discount from './components/Discount'
import Top from './components/Top'
import Subscribe from './components/Subscribe'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Details from './pages/Details'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper w-[1920px]  h-full font-josefin-sans">
        <Header />
        <div className='wrap'> 
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Featured />
                  <Latest />
                  <Unique />
                  <Trending />
                  <Discount />
                  <Top />
                  <Subscribe />
                  <Blog />
                </>
              }
            />
            <Route path="/listing" element={<Listing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
