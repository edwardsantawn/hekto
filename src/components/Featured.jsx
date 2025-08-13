import React from 'react';
import watch from '../assets/watch.svg';
import maxes from '../assets/maxes.svg';
import macs from '../assets/macs.svg';
import black from '../assets/black.svg';
import heart from '../assets/purpleheart.svg';
import cart from '../assets/purplecart.svg';
import search from '../assets/expand.svg';
import './Featured.css';

const products = [
  { name: 'Watches',       code: 'Code - Y523201', price: '$400',    img: watch },
  { name: 'Headphones',    code: 'Code - Y523201', price: '$90.00',  img: maxes },
  { name: 'Laptop',        code: 'Code - Y523201', price: '$400.00', img: macs },
  { name: 'Black watches', code: 'Code - Y523201', price: '$350',    img: black },
];

export default function Featured() {
  return (
    <section className="w-full featured max-w-[1920px] mx-auto bg-white text-center p-0 m-0">
      <h2 className="text-[2.75rem] font-bold pt-[100px] text-[#1A0B5B]">
        Featured Products
      </h2>

      <div
        className="
          relative w-full max-w-[1312px] mx-auto px-4 overflow-visible track
          [&:has(#item-1:checked)_label[for='item-1']]:bg-[#FB2E86]
          [&:has(#item-2:checked)_label[for='item-2']]:bg-[#FB2E86]
          [&:has(#item-3:checked)_label[for='item-3']]:bg-[#FB2E86]
          [&:has(#item-4:checked)_label[for='item-4']]:bg-[#FB2E86]
        "
      >
        {/* Mobile/tablet: grid; Desktop: carousel track */}
        <div
          className="
            carousels flex gap-[32px] overflow-x-auto overflow-y-hidden
            overscroll-x-contain touch-pan-x px-[30px] md:px-[60px] scrollbar-hide
            mt-[72px]
          "
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {products.map((p, i) => (
            <article
              key={i}
              className="
                w-[280px] md:w-[304px] bg-white rounded-[12px] item
                shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                flex flex-col items-center flex-shrink-0
                min-h-[368px] h-full
                transition-shadow transform duration-300 group
                hover:shadow-[8px_64px_80px_-16px_rgba(16,23,80,0.15)] hover:-translate-y-2
              "
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative mb-[24px] w-full flex justify-center items-center h-auto max-h-[472px]">
                {/* Hover icons */}
                <span className="flex absolute gap-[8px] top-[8px] left-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex justify-center items-center h-[32px] w-[32px]">
                    <img src={cart} alt="cart" className="w-[16px] h-[16px]" />
                  </span>
                  <span className="flex justify-center items-center h-[32px] w-[32px]">
                    <img src={heart} alt="heart" className="w-[16px] h-[16px]" />
                  </span>
                  <span className="flex justify-center items-center h-[32px] w-[32px]">
                    <img src={search} alt="search" className="w-[16px] h-[16px]" />
                  </span>
                </span>

                <img
                  src={p.img}
                  alt={p.name}
                  className="rounded-[4px] object-contain w-full h-auto max-h-[472px] mx-auto"
                />

                <button
                  className="
                    bg-[#0CC562] text-white text-[12px] leading-[14px] font-semibold absolute
                    w-[101px] h-[36px] left-1/2 -translate-x-1/2 bottom-[5px] px-[16px] py-[11px] rounded-[6px]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  "
                >
                  View Details
                </button>
              </div>

              <h3 className="text-[16px] text-[#FB2E86] font-bold leading-[20px] mb-[24px]">
                {p.name}
              </h3>
              <span className="text-[14px] text-[#8A8FB9] leading-[16px] mb-[8px]">
                {p.code}
              </span>
              <p className="text-[16px] pb-[24px] prices text-[#101750] font-bold leading-[20px]">
                {p.price}
              </p>
            </article>
          ))}
        </div>

        {/* Radios moved BELOW the track so :has(~#item-x:checked) works */}
        <input type="radio" name="carousel" id="item-1" defaultChecked className="hidden" />
        <input type="radio" name="carousel" id="item-2" className="hidden" />
        <input type="radio" name="carousel" id="item-3" className="hidden" />
        <input type="radio" name="carousel" id="item-4" className="hidden" />

        {/* Dots: always 60px below the carousel */}
        <div className="flex mt-[60px] justify-center gap-[10px]">
          <label htmlFor="item-1" className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer" />
          <label htmlFor="item-2" className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer" />
          <label htmlFor="item-3" className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer" />
          <label htmlFor="item-4" className="w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
