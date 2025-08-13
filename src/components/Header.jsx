import React, { useState } from 'react';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import down from '../assets/down.svg';
import user from '../assets/user.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import hekto from '../assets/hekto.svg';
import search from '../assets/search.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check if a nav item is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white w-full">
      {/* Mobile (<=640px) */}
      <div className="sm:hidden w-full flex flex-col gap-4 justify-between items-center px-4 py-3 bg-[#7E33E0] text-white">
        <div className="flex items-center gap-2">
          <img src={hekto} alt="logo" className="h-10" />
        </div>

        <div className="flex w-full justify-between items-center">
          <button onClick={() => setShowSearch(s => !s)} className="p-0">
            <img src={search} alt="search" className="w-8 h-8" />
          </button>
          <img src={heart} alt="wishlist" className="w-8 h-8" />
          <img src={user} alt="user" className="w-8 h-8" />
          <button onClick={() => navigate('/cart')} className="p-0">
            <img src={cart} alt="cart" className="w-8 h-8" />
          </button>
        </div>

        {showSearch && (
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#E5E0FC] rounded-lg p-2 w-full text-black"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Top bar (desktop/tablet) */}
      <div className="hidden sm:flex h-[48px] bg-[#7E33E0] text-white">
        <div className="w-full max-w-[1360px] mx-auto px-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex gap-12 items-center">
            <span className="flex items-center gap-2 text-[16px] font-semibold leading-5">
              <img src={email} alt="email" />
              mhhasanul@gmail.com
            </span>
            <span className="flex items-center gap-3 text-[16px] font-semibold leading-5">
              <img src={phone} alt="phone" />
              (12345)67890
            </span>
          </div>
          {/* Right */}
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-5">
              English <img src={down} alt="down" />
            </span>
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-5">
              USD <img src={down} alt="down" />
            </span>
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-5">
              Login <img src={user} alt="user" />
            </span>
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-5">
              Wishlist <img src={heart} alt="heart" />
            </span>
            <span className="flex items-center gap-1.5 text-[16px] font-semibold leading-5">
              <button
                onClick={() => navigate('/cart')}
                className="bg-transparent border-none p-0 m-0 cursor-pointer"
                aria-label="Cart"
                style={{ display: 'flex', alignItems: 'center', background: 'none' }}
              >
                <img src={cart} alt="cart" />
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="hidden sm:block">
        <div className="w-full max-w-[1360px] mx-auto px-4 h-[72px] grid grid-cols-[auto_1fr_auto] items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src={hekto} alt="hekto logo" className="h-8" />
          </div>

          {/* Nav */}
          <nav className="flex items-center justify-start ml-20">
            <ul className="flex items-center gap-8 text-[16px] leading-5">
              <li
                className={`cursor-pointer transition ${
                  isActive('/') ? 'text-[#FB2E86] font-bold' : ''
                }`}
                onClick={() => navigate('/')}
              >
                Home
              </li>
              <li>
                <Link
                  to="/listing"
                  className={`hover:text-[#FB2E86] transition ${
                    isActive('/listing') ? 'text-[#FB2E86] font-bold' : ''
                  }`}
                >
                  Product
                </Link>
              </li>
              <li
                className={`cursor-pointer transition ${
                  isActive('/blog') ? 'text-[#FB2E86] font-bold' : ''
                }`}
                onClick={() => navigate('/blog')}
              >
                Blog
              </li>
              <li
                className={`cursor-pointer transition ${
                  isActive('/contact') ? 'text-[#FB2E86] font-bold' : ''
                }`}
                onClick={() => navigate('/contact')}
              >
                Contact
              </li>
            </ul>
          </nav>
          {/* Search */}
          <div className="w-[328px]">
            <form className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="border border-[#E5E0FC] rounded-lg p-2 w-full"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#FB2E86] w-[52px] h-[36px] rounded-md flex items-center justify-center hover:bg-[#d81b6a] transition"
              >
                <img src={search} alt="search" className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
