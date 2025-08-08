import lamp from '../assets/lamp.svg';
import headphones from '../assets/headphones.svg';
import discount from '../assets/discount.svg';
import ellipse1 from '../assets/ellipse.svg';
import diamond from '../assets/diamond.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section
      className="w-[1920px]  wrapper h-[760px] bg-[#F2F0FF] whole relative grid"
      style={{
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
      }}
    >
      <img 
      src={ellipse1}
      alt="dot" 
      className="dots absolute"
      style={{
        top:503,
        left:184
      }}
      />
      {/* Lamp: absolutely positioned, 70px from left, overlaps text by 47px */}
      <img
        src={lamp}
        alt="lamp"
        className="absolute"
        style={{
          left: 70,
          top: 0,
          zIndex: 10,

        }}
      />

      {/* Center: Text content */}
        <div
          className="flex flex-col gap-[24px] absolute"
          style={{
            width: '570px',
            height: '296px',
            top: '203px',
            left: '415px',
            opacity: 1,
            zIndex: 20,
          }}
        >
        <span className="mb-[-8px] text-[#FB2E86] text-[16px] leading-[20px] font-bold">Best Headphones For Your Life...</span>
        <h1 className="mb-[-8px] text-[52px] max-w-[570px] leading-[64px] tracking-[1.5%] font-bold">
          New Trendy Collection <br /> Headphones
        </h1>
        <p className="mb-[-8px] text-[#8A8FB9] text-[16px] max-w-[551px] leading-[20px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <button className="bg-[#FB2E86] text-white text-[16px] px-8 py-3 rounded-[8px] font-semibold w-[156px] h-[52px] shadow hover:bg-[#d81b6a] transition">
          Shop Now
        </button>
      </div>

      {/* Headphones: absolutely positioned, 231px from right */}
      <img
        src={headphones}
        alt="headphones"
        className="headphones absolute"
        style={{
          left: 1041,
          top: 34,
          zIndex: 15,
        }}
      />
      <img 
      src={discount}
      alt="discount tag" 
      className="absolute"
      style={{
        left: 1598,
        top: 94,
        zIndex: 15,
      }}
      />
      <img src={diamond} 
      alt="diamond" 
      className="diamond absolute" 
      style={{
        left: 917,
        top: 697,
        zIndex: 15,
      }} />
    </section>
  );
}