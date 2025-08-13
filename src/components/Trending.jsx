import watch from '../assets/watch.svg';
import maxes from '../assets/maxes.svg';
import macs from '../assets/macs.svg';
import black from '../assets/black.svg';
import './Trending.css';

const products = [
  { name: 'Black watches', price: '$35.00', sale: '$55.00', img: black },
  { name: 'Laptop',        price: '$89.00',  sale: '$99.00', img: macs  },
  { name: 'Headphones',    price: '$90.00',  sale: '$99.00', img: maxes },
  { name: 'Watches',       price: '$42.00',  sale: '$62.00', img: watch },
];

export default function Trending() {
  return (
    <section className="w-full  bg-[#FFF] max-w-[1920px] mx-auto wrapper ">
      <h2 className="trending-title text-[#101750] pt-[100px] text-[44px] font-bold leading-[52px] tracking-[1.5%] text-center mb-[72px]">
        Trending Products
      </h2>

      {/* fluid container + responsive grid */}
      <div className="w-full trending max-w-[1360px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] justify-center">
        {products.map((p, i) => (
          <article
            key={i}
            className="group trending-item bg-white rounded-[8px] flex flex-col items-center min-h-[340px] shadow-md
                       transition-all duration-300 hover:shadow-[8px_64px_80px_-16px_rgba(16,23,80,0.15)] hover:-translate-y-2"
          >
            {/* don't let image shrink */}
            <img
              src={p.img}
              alt={p.name}
              className="trending-img mb-[32px] object-contain flex-none"
            />

            <span className="text-[#FB2E86] font-bold text-[16px] leading-[20px] mb-[8px]">
              {p.name}
            </span>

            <div className="flex price items-center gap-[15px]">
              <span className="text-[#101750] text-[16px] leading-[20px] group-hover:text-[#FB2E86]">
                {p.price}
              </span>
              <span className="text-[#8A8FB9] text-[14px] leading-[16px] line-through">
                {p.sale}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
