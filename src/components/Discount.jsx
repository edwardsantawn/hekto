import check from '../assets/check.svg';
import airpods from '../assets/airpods.svg';
import './Discount.css';

export default function Discount() {
  return (
    <section className="w-full bg-[#FFF] max-w-[1920px] mx-auto wrapper flex flex- h-[894px] items-center">
      <h2 className="leading-[52px] above mt-[114px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[24px]">
        Discount Item
      </h2>

      <div className="flex text-[#101750] flex-row gap-[32px] text-[18px] mb-[26px] leading-[24px] font-normal">
        <span className="hover:text-[#FB2E86] cursor-pointer">Headphones</span>
        <span className="hover:text-[#FB2E86] cursor-pointer">Laptop</span>
        <span className="hover:text-[#FB2E86] cursor-pointer">Other</span>
      </div>

      {/* fluid inner container */}
      <div className="w-full max-w-[1310px] min-h-[568px] mx-auto px-4 grid md:grid-cols-2 items-center gap-8 mb-[100px]">
        {/* Left */}
        <div className="w-full max-w-[534px] min-h-[337px] flex flex-col gap-[24px] mx-auto">
          <span className="text-[#101750] -mt-[25px] font-bold text-[36px] leading-[44px] tracking-[1.5%]">
            20% Discount Of All Products
          </span>
          <span className="text-[#FB2E86] font-bold text-[22px] leading-[28px] ">
            Headphones Compact
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <span className="text-[#8A8FB9] font-normal text-[18px] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </span>
            </div>

            <div className="flex flex-row gap-[32px]">
              <div className="flex flex-col gap-[26px]">
                <div className="flex flex-row gap-[8px]">
                  <img src={check} alt="check" />
                  <span className="text-[#8A8FB9] text-[16px] leading-[20px] flex items-center">
                    Material expose like metals
                  </span>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <img src={check} alt="check" />
                  <span className="text-[#8A8FB9] text-[16px] leading-[20px] flex items-center">
                    Simple neutral colours.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[26px]">
                <div className="flex flex-row gap-[8px]">
                  <img src={check} alt="check" />
                  <span className="text-[#8A8FB9] text-[16px] leading-[20px] flex items-center">
                    Clear lines and geometric figures
                  </span>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <img src={check} alt="check" />
                  <span className="text-[#8A8FB9] text-[16px] leading-[20px] flex items-center">
                    Material expose like metals
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[52px] items-center gap-[16px]">
            <button className="bg-[#FB2E86] text-white h-[52px] px-[40px] rounded-[8px] font-semibold leading-[20px] text-[16px]">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-none flex items-center justify-center min-h-[337px]">
          <img
            src={airpods}
            alt="Airpods"
            className="max-w-[520px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
