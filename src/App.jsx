// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Latest from './components/Latest';
import Unique from './components/Unique';
import Trending from './components/Trending';
import Discount from './components/Discount';
import Top from './components/Top';
import Subscribe from './components/Subscribe';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Fluid, centered, real height context */}
<div className="wrapper max-w-[1920px] w-full h-full flex flex-col overflow-x-clip font-josefin-sans">
        <Header />

        {/* This area grows so footer stays at the bottom */}
        <main className="flex-1 w-full">
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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
