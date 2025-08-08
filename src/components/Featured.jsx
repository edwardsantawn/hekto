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
  { name: 'Watches', code: 'Code - Y523201', price: '$400', img: watch },
  { name: 'Headphones', code: 'Code - Y523201', price: '$90.00', img: maxes },
  { name: 'Laptop', code: 'Code - Y523201', price: '$400.00', img: macs },
  { name: 'Black watches', code: 'Code - Y523201', price: '$350', img: black },
];

export default function Featured() {
  return (
    <section className="w-[1920px]  justify-content items-center featured h-[756px] bg-white text-center">
      <h2 className="text-[2.75rem] font-bold mt-[100px] another text-[#1A0B5B]">Featured Products</h2>

      <div className="relative w-[1312px] mx-auto flex items-center min-h-[520px] mt-[-25px] mb-[100px]">
        {/* Radio buttons */}
        <input type="radio" name="carousel" id="item-1" defaultChecked className="hidden" />
        <input type="radio" name="carousel" id="item-2" className="hidden" />
        <input type="radio" name="carousel" id="item-3" className="hidden" />
        <input type="radio" name="carousel" id="item-4" className="hidden" />

        {/* Carousel track */}
        <div
          className={`
            flex gap-[32px] track transition-transform duration-500 ease-in-out min-h-[520px]  items-center
            [&:has(~#item-1:checked)]:translate-x-0
            [&:has(~#item-2:checked)]:-translate-x-[328px]
            [&:has(~#item-3:checked)]:-translate-x-[656px]
            [&:has(~#item-4:checked)]:-translate-x-[984px]
            wrapper
          `}
          style={{ willChange: 'transform' }}
        >
          {products.map((p, i) => (
            <div
              className={`
                w-[304px] h-[368px] bg-white rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                flex flex-col box justify-start items-center flex-shrink-0 rounded-[8px]
                transition-shadow transition-transform duration-300
                group
                hover:shadow-[8px_64px_80px_-16px_rgba(16,23,80,0.15)] hover:-translate-y-2
              `}
              key={i}
            >
              <div className="relative mb-[24px] w-full flex justify-center">
                {/* Icons */}
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
                <img src={p.img} alt={p.name} className="rounded-[4px] mx-auto" />
                {/* Button */}
                <button
                  className={`
                    bg-[#0CC562] text-white text-[12px] leading-[14px] font-semibold absolute
                    w-[101px] h-[36px] left-1/2 -translate-x-1/2 bottom-[5px] px-[16px] py-[11px] rounded-[6px]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}
                >
                  View Details
                </button>
              </div>
              <h3 className="text-[16px] text-[#FB2E86] font-bold leading-[20px] mb-[24px]">{p.name}</h3>
              <span className="text-[14px] text-[#8A8FB9] font-normal leading-[16px] mb-[8px]">{p.code}</span>
              <p className="text-[16px] text-[#101750] font-bold leading-[20px]">{p.price}</p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-6 flex justify-center gap-[10px] absolute left-1/2 -translate-x-1/2 bottom-[-40px]">
          <label htmlFor="item-1"
            className={`
              w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer transition-colors duration-300 inline-block
              peer-checked:bg-[#FB2E86]
            `}
          />
          <label htmlFor="item-2"
            className={`
              w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer transition-colors duration-300 inline-block
              peer-checked:bg-[#FB2E86]
            `}
          />
          <label htmlFor="item-3"
            className={`
              w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer transition-colors duration-300 inline-block
              peer-checked:bg-[#FB2E86]
            `}
          />
          <label htmlFor="item-4"
            className={`
              w-[16px] h-[4px] rounded-[10px] bg-[#FEBAD7] cursor-pointer transition-colors duration-300 inline-block
              peer-checked:bg-[#FB2E86]
            `}
          />
        </div>
      </div>
    </section>
  );
}
