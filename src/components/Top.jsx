import perfume from '../assets/perfume.svg';
import hexagon from '../assets/hexagon.svg';
import container from '../assets/container.svg';
import ring from '../assets/ring.svg';
import crescent from '../assets/crescent.svg';
import './Top.css';

const categories = [
  { img: perfume,   label: 'Perfume' },
  { img: hexagon,   label: 'Present box' },
  { img: container, label: 'Bracelet' },
  { img: ring,      label: 'Ring' },
];

export default function Top() {
  return (
    <section className="bg-[#FFF] top-section pt-[114px] w-full max-w-[1920px] mx-auto wrapper flex flex-col items-center">
      <h2 className="leading-[52px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[48px]">
        Top Categories
      </h2>

      {/* shell + overflow hidden */}
      <div className="carousel-wrapper w-full max-w-[1280px] mx-auto px-4 overflow-visible">
        {/* Horizontally scrollable carousel */}
        <div
          className="
            carousel flex gap-[32px] w-full overflow-x-auto overflow-y-hidden
            overscroll-x-contain touch-pan-x px-[30px] md:px-[60px] scrollbar-hide
            mt-[72px]
          "
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {categories.map((cat, i) => (
            <div
              className="carousel-item flex-none flex flex-col items-center bg-transparent p-0 m-0"
              key={i}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="group flex flex-col gap-[32px] items-center cursor-pointer transition-all">
                <div className="relative w-[272px] h-[272px] rounded-full bg-[#F6F7FB] flex items-center justify-center mb-[24px] overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(251,46,134,0.10)]">
                  <img src={cat.img} alt={cat.label} className="w-[272px] h-[272px] rounded-full object-cover relative z-10" />
                  <img src={crescent} alt="crescent" className="absolute left-0 top-[35px] w-[236px] h-[236px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" draggable={false} />
                  <button className="bg-[#0CC562] text-white text-[12px] leading-[14px] font-semibold absolute w-[114px] h-[36px] left-1/2 -translate-x-1/2 bottom-[33px] px-[16px] py-[11px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" style={{ pointerEvents: 'auto' }}>
                    View Category
                  </button>
                </div>
                <span className="text-[#151875] font-bold text-[18px] group-hover:text-[#FB2E86] transition-colors duration-300">
                  {cat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Radios for dot highlighting (optional, can be removed if not needed) */}
        <input type="radio" name="top-carousel" id="top-item-1" defaultChecked className="hidden" />
        <input type="radio" name="top-carousel" id="top-item-2" className="hidden" />
        <input type="radio" name="top-carousel" id="top-item-3" className="hidden" />
        <input type="radio" name="top-carousel" id="top-item-4" className="hidden" />

        {/* Dots — small pink circles like the Figma */}
        <div className="carousel-nav flex justify-center gap-[8px] mt-[32px] mb-[88px]">
          <label htmlFor="top-item-1" className="dot" />
          <label htmlFor="top-item-2" className="dot" />
          <label htmlFor="top-item-3" className="dot" />
        </div>
      </div>
    </section>
  );
}
