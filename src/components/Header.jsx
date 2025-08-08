import React, { useState } from 'react';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import down from '../assets/down.svg';
import user from '../assets/user.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import hekto from '../assets/hekto.svg';
import search from '../assets/search.svg';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
<header className="bg-white w-[1920px] ">
  {/* Mobile Header - only visible under 600px */}
  <div className="mobile-header w-full gap-4 flex flex-col sm:hidden justify-between items-center px-4 py-3 bg-[#7E33E0] text-white">

    {/* Center: Logo */}
    <div className="flex items-center gap-2">
      <img src={hekto} alt="logo" className="h-10" />
    </div>

    {/* Right: Icons (search, cart, heart, user) */}
    <div className="flex w-full justify-between items-center px-4">
      <button
        onClick={() => setShowSearch((s) => !s)}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <img src={search} alt="search" className="w-10 h-10" />
      </button>
      <img src={heart} alt="wishlist" className="w-10 h-10" />
      <img src={user} alt="user" className="w-10 h-10" />
      <button
        onClick={() => navigate('/cart')}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <img src={cart} alt="cart" className="w-10 h-10" />
      </button>
    </div>
    {/* Reveal search bar if toggled */}
    {showSearch && (
      <div className="w-full mt-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-[#E5E0FC] rounded-lg p-2 w-full text-black"
          autoFocus
        />
      </div>
    )}
  </div>

  {/* Top bar */}
  <div className="h-[48px] w-[1920px] bg-[#7E33E0] text-white flex items-center px-[304px] justify-between header-top hidden sm:flex">
    {/* Left */}
    <div className="flex gap-[48px] items-center w-[413px]">
      <span className="flex items-center gap-[10px] text-[16px] font-semibold leading-5">
        <img src={email} alt="email icon" />
        mhhasanul@gmail.com
      </span>
      <span className="flex items-center gap-[12px] text-[16px] font-semibold leading-5">
        <img src={phone} alt="phone icon" />
        (12345)67890
      </span>
    </div>

    {/* Right */}
    <div className="flex gap-[32px] items-center w-[413px]">
      <span className="flex items-center gap-[4px] text-[16px] font-semibold leading-5">
        English
        <img src={down} alt="down icon" />
      </span>
      <span className="flex items-center gap-[4px] text-[16px] font-semibold leading-5">
        USD
        <img src={down} alt="down icon" />
      </span>
      <span className="flex items-center gap-[4px] text-[16px] font-semibold leading-5">
        Login
        <img src={user} alt="user icon" />
      </span>
      <span className="flex items-center gap-[4px] text-[16px] font-semibold leading-5">
        Wishlist
        <img src={heart} alt="heart icon" />
      </span>
      <span className="flex items-center gap-[4px] text-[16px] font-semibold leading-5">
        <img src={cart} alt="cart icon" />
      </span>
    </div>
  </div>

  {/* Main grid */}
  <div
    className="h-[72px] w-[1920px] grid header-main hidden sm:grid"
    style={{
      gridTemplateColumns: '307px 1fr 304px',
      alignItems: 'center'
    }}
  >
    {/* Left margin (empty) */}
    <div></div>

    {/* Center content: nav and search spaced by 510px */}
    <div className="flex items-center justify-between">
      {/* Nav section */}
      <div className="flex gap-[80px] items-center w-[471px] header-nav">
        <span className="flex items-center gap-[10px] text-[16px] font-semibold leading-5">
          <img src={hekto} alt="hekto logo" />
        </span>
        <div className="flex items-center gap-[32px] text-[16px] font-normal leading-5 w-[291px] justify-between">
          <span>Home</span>
          <Link to="/listing" className="hover:text-[#FB2E86] transition">Product</Link>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
      {/* Spacer for 510px */}
      <div style={{ width: 510 }} className="header-spacer" />
      {/* Search section */}
      <div className="flex items-center w-[328px] header-search">
        <form className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#E5E0FC] rounded-lg p-2 w-[328px]"
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

    {/* Right margin (empty) */}
    <div></div>
  </div>
</header>
  );
}
