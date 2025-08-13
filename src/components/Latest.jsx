import playstation from '../assets/playstation.svg';
import shoes from '../assets/shoes.svg';
import perfume from '../assets/perfume.svg';
import hexagon from '../assets/hexagon.svg';
import container from '../assets/container.svg';
import ring from '../assets/ring.svg';
import heart from '../assets/purpleheart.svg';
import cart from '../assets/purplecart.svg';
import search from '../assets/expand.svg';
import sale from '../assets/sale.svg';
import './Latest.css';

const products = [
  { img: playstation, name: 'Game console',  price: '$76.00', sale: '$89.00' },
  { img: shoes,       name: 'Shoes',         price: '$57.00', sale: '$75.00' },
  { img: perfume,     name: 'Perfume',       price: '$19.00', sale: '$29.00' },
  { img: hexagon,     name: 'Present box',   price: '$12.00', sale: '$29.00' },
  { img: container,   name: 'Watches',       price: '$67.00', sale: '$76.00' },
  { img: ring,        name: 'Ring',          price: '$56.00', sale: '$69.00' }
];

export default function Latest() {
  return (
    <section className="latest-section bg-[#FFF] wrapper w-full max-w-[1920px] mx-auto flex flex-col items-center">
      <h2 className="leading-[52px] mt-[200px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[16px]">
        Latest Products
      </h2>

      <div className="text-[#101750] toppings flex flex-wrap justify-center gap-[24px] md:gap-[64px] text-[18px] leading-[24px] font-normal">
        <span className="hover:text-[#FB2E86] cursor-pointer">New Arrival</span>
        <span className="hover:text-[#FB2E86] cursor-pointer">Best Seller</span>
        <span className="hover:text-[#FB2E86] cursor-pointer">Featured</span>
        <span className="hover:text-[#FB2E86] cursor-pointer">Special Offer</span>
      </div>

      {/* fluid container + responsive grid */}
      <div className="w-full max-w-[1312px] mx-auto px-4 mt-[64px] mb-[100px] box
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product, i) => (
          <article
            key={i}
            className="rounded-[8px] w-full flex flex-col bg-white"
          >
            <div
              className="group latest-img-container hover:bg-[#E5E0FC] rounded-t-[8px] relative transition-colors duration-300 mx-auto flex items-center justify-center"
            >
              {/* Sale badge for Perfume */}
              {product.name === 'Perfume' && (
                <img src={sale} alt="Sale" className="absolute top-0 -left-[6px] z-20" />
              )}

              {/* Action icons (show on hover) */}
              <span className="flex flex-col gap-[16px] absolute left-[8px] bottom-[8px]
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="flex justify-center items-center h-[32px] w-[32px] rounded-full">
                  <img src={cart} alt="cart" className="w-[16px] h-[16px]" />
                </span>
                <span className="flex justify-center items-center h-[32px] w-[32px] rounded-full">
                  <img src={heart} alt="heart" className="w-[16px] h-[16px]" />
                </span>
                <span className="flex justify-center items-center h-[32px] w-[32px] rounded-full">
                  <img src={search} alt="search" className="w-[16px] h-[16px]" />
                </span>
              </span>

              <img
                src={product.img}
                alt={product.name}
                className="latest-img"
              />
            </div>
            {/* text row */}
            <div className="w-full flex flex-col justify-end rounded-b-[8px] px-4 pb-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[#101750] text-[16px] leading-[20px]">{product.name}</span>
                <span className="flex gap-[16px] items-center">
                  <span className={product.sale && product.sale !== product.price ? 'text-[#101750] text-[16px] leading-[20px]' : ''}>
                    {product.price}
                  </span>
                  {product.sale && product.sale !== product.price && (
                    <span className="text-[#FB2E86] text-[14px] leading-[16px] line-through">
                      {product.sale}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
