import { useLocation } from 'react-router-dom';
import goldstar from '../assets/goldstar.svg';
import star from '../assets/star.svg';
import img1 from '../assets/1.svg';
import img2 from '../assets/2.svg';
import img3 from '../assets/3.svg';
import head from '../assets/head.svg';
import blackheart from '../assets/blackheart.svg';
import greytick from '../assets/greytick.svg';

import watch from '../assets/watch.svg';
import maxes from '../assets/maxes.svg';
import macs from '../assets/macs.svg';
import black from '../assets/black.svg';
import heart from '../assets/purpleheart.svg';
import cart from '../assets/purplecart.svg';
import search from '../assets/expand.svg';

const relatedProducts = [
  { name: 'Watches', code: 'Code - Y523201', price: '$400', img: watch },
  { name: 'Black watches', code: 'Code - Y523201', price: '$350', img: black },
  { name: 'Perfume', code: 'Code - Y523201', price: '$90.00', img: macs },
  { name: 'Bracelet', code: 'Code - Y523201', price: '$620', img: maxes },
];

export default function Details() {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) return <div className="p-8">No product found.</div>;

  const headphonesImages = [img1, img2, img3];

  // List items for the description section
  const descriptionList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
    "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
    "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
    "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
    "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra."
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Main Product Section */}
      <div className="flex items-start my-[100px] mx-[304px]">
        {/* Thumbnails for Headphones */}
        {product.name === 'Headphones' && (
          <>
            <div
              className="flex flex-col"
              style={{ width: 192, height: 438, gap: 15 }}
            >
              {headphonesImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Headphones ${idx + 1}`}
                  width={192}
                  height={134}
                  style={{
                    width: 192,
                    height: 134,
                    marginBottom: idx < 2 ? 15 : 0,
                    objectFit: 'cover',
                    borderRadius: 8,
                    display: 'block'
                  }}
                />
              ))}
            </div>
            {/* 32px gap between thumbnails and big image */}
            <div style={{ width: 32 }} />
          </>
        )}
        {/* Big Image */}
        <div
          className="bg-white rounded-[8px] flex items-center justify-center shadow"
          style={{ width: 528, height: 438 }}
        >
          <img
            src={product.name === 'Headphones' ? head : product.img}
            alt={product.name}
            width={528}
            height={438}
            style={{
              width: 528,
              height: 438,
              objectFit: 'cover',
              borderRadius: 8,
              display: 'block'
            }}
          />
        </div>
        {/* 144px gap between big image and info */}
        <div style={{ width: 144 }} />
        {/* Info */}
        <div className="flex flex-col w-[413px] justify-start mt-[40px] flex-1">
          <h1 className="text-[#101750] font-bold text-[32px] mb-2">{product.name}</h1>
          <div className="flex gap-2 mb-[24px]">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < (product.rating || 0) ? goldstar : star}
                alt={i < (product.rating || 0) ? "Gold Star" : "Star"}
              />
            ))}
          </div>
          <div className="flex gap-4 items-center mb-6">
            <span className="text-[#101750] leading-[20px] font-normal text-[16px]">{product.price}</span>
            {product.sale && product.sale !== product.price && (
              <span className="text-[#FB2E86] font-normal leading-[16px] line-through text-[14px]">{product.sale}</span>
            )}
          </div>
          <p className="text-[#A9ACC6] text-[16px] leading-[20px] font-normal w-[413px] mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex items-center gap-8 mt-4">
            <button className="bg-[#FB2E86] hover:bg-[#e11d6a] text-white leading-[20px] text-[16px] font-bold rounded-[8px] h-[52px] w-[171px] px-10 transition-colors whitespace-nowrap">
              Add To Cart
            </button>
            <img src={blackheart} alt="heart" className="" />
          </div>
        </div>
      </div>

      {/* Tabs Section Below Main Product Info */}
      <div className="w-full flex justify-center bg-[#F8F8FD] py-16 mt-16">
        <div className="w-[1088px]">
          <div className="flex gap-[72px] ">
            {/* Tab buttons only, no click logic */}
            <button className="relative text-[#101750] font-bold text-[26px] leading-[32px]  transition-colors">
              Description
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block h-[2px] w-full bg-[#101750] rounded" />
            </button>
            <button className="relative text-[#101750] font-bold text-[26px] leading-[32px]  transition-colors">
              Additional Info
            </button>
            <button className="relative text-[#101750] font-bold text-[26px] leading-[32px]  transition-colors">
              Reviews
            </button>
            <button className="relative text-[#101750] font-bold text-[26px] leading-[32px]  transition-colors">
              Video
            </button>
          </div>
          {/* Only Description content is shown, no tab switching */}
          <div className="pt-[48px]">
            <h3 className="text-[#101750] font-bold text-[22px] leading-[20px] mb-4">Varius tempor.</h3>
            <p className="text-[#8A8FB9] text-[16px] w-[1088px] h-[80px] font-normal leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est 
            </p>
            <h4 className="text-[#101750] font-bold leading-[28px] text-[22px] mt-8 mb-4">More details</h4>
            <ul className="flex flex-col gap-4">
              {descriptionList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#A9ACC6] text-[16px] leading-[24px]">
                  <img src={greytick} alt="" className="mt-1" />
                  <span className='text-[#8A8FB9] font-normal text-[16px] leading-[20px]'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products Carousel */}
      <div className="w-full bg-white py-[100px] flex">
        <div className="w-[1312px] ml-[304px]">
          <section>
            <h2 className="text-[36px] leading-[44px] tracking-[1.5%] font-bold text-[#101750] mb-10 text-left">Related Products</h2>
            <div className="flex gap-8 w-full">
              {relatedProducts.map((p, i) => (
                <div
                  key={i}
                  className="w-[304px] h-[368px] bg-white rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                    flex flex-col justify-start items-center flex-shrink-0
                    transition-shadow transition-transform duration-300 group hover:shadow-[8px_64px_80px_-16px_rgba(16,23,80,0.15)] hover:-translate-y-2"
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
                      className="bg-[#0CC562] text-white text-[12px] leading-[14px] font-semibold absolute w-[101px] h-[36px] left-1/2 -translate-x-1/2 bottom-[5px] px-[16px] py-[11px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Details
                    </button>
                  </div>
                  <h3 className="text-[16px] text-[#FB2E86] font-bold leading-[20px] mb-[24px]">{p.name}</h3>
                  <span className="text-[14px] text-[#8A8FB9] font-normal leading-[16px] mb-[8px]">{p.code}</span>
                  <span className="text-[16px] text-[#101750] font-semibold leading-[20px]">{p.price}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}