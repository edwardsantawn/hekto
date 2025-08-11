import lamp from '../assets/lamp.svg';
import headphones from '../assets/headphones.svg';
import discount from '../assets/discount.svg';
import ellipse1 from '../assets/ellipse.svg';
import diamond from '../assets/diamond.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="wrappers relative w-full max-w-[1920px] mx-auto min-h-[760px] bg-[#F2F0FF] overflow-hidden hero">
      {/* Dots */}
      <img
        src={ellipse1}
        alt="dot"
        className="block absolute hero__dots"
        style={{ top: '26.2vw', left: '9.6vw' }}
      />

      {/* Lamp */}
      <img
        src={lamp}
        alt="lamp"
        className="block absolute hero__lamp"
        style={{
          left: '3.6vw',
          top: 0,
          zIndex: 10,
          width: '20vw',
          maxWidth: 387,
          minWidth: 100,
          height: 'auto',
        }}
      />

      {/* Text content */}
      <div
        className="flex flex-col gap-6 absolute hero__text"
        style={{
          width: '29.7vw', minWidth: 260, maxWidth: 570,
          height: '15.4vw', maxHeight: 296,
          top: '26.7%',
          left: '21.6vw',
          zIndex: 20,
        }}
      >
        <span className="mb-[-8px] text-[#FB2E86] text-[16px] leading-[20px] best font-bold">
          Best Headphones For Your Life...
        </span>
        <h1 className="mb-[-8px] new text-[52px] max-w-full leading-[64px] tracking-[1.5%] font-bold">
          New Trendy Collection <br /> Headphones
        </h1>
        <p
          className="mb-[-8px] text-[#8A8FB9] text-[16px] leading-[20px] font-normal"
          style={{ width: '29.688vw', maxWidth: 570, height: '2.1vw', maxHeight: 40 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <button className="bg-[#FB2E86] text-white text-[16px] px-8 py-3 rounded-[8px] font-semibold w-[156px] h-[52px] shadow hover:bg-[#d81b6a] transition">
          Shop Now
        </button>
      </div>

      {/* Headphones + Discount */}
      <div
        className="block absolute hero__product"
        style={{
          width: '36vw',
          maxWidth: 692,
          height: '36.8vw',
          maxHeight: 706,
          top: '50%',
          right: '9vw',
          zIndex: 15,
          transform: 'translateY(-50%)',
        }}
      >
        <img src={headphones} alt="headphones" className="w-full h-full object-contain" />
        <img src={discount} alt="50% Off" className="absolute hero__badge" style={{ top: '7%', right: '5%', zIndex: 20 }} />
      </div>

      {/* bottom diamond */}
      <img
        src={diamond}
        alt=""
        className="absolute diamond bottom-6 left-1/2 -translate-x-1/2 z-10 select-none pointer-events-none"
      />
    </section>
  );
}
