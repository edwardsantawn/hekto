import couch from '../assets/couch.svg';
import './Unique.css';

export default function Unique() {
  return (
    <section className="w-full bg-[#F1F0FF]">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 px-4 md:px-6 py-12">

          {/* Image */}
          <div className="flex-none flex items-center justify-center">
            <img
              src={couch}
              alt="couch"
              className="w-full max-w-[560px] h-auto object-contain"
            />
          </div>

          {/* Text block */}
          <div className="w-full max-w-[534px] min-h-[337px] flex flex-col gap-[48px] mx-auto">
            <span className="text-[#101750] -mt-[25px] font-bold text-[28px] leading-8 tracking-[1.5%] md:text-[36px] md:leading-[44px]">
              Unique Features Of Latest & Trending Products
            </span>

            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[16px]">
                <span className="w-[11px] h-[11px] rounded-full bg-[#FB2E86] inline-block" />
                <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                  All frames constructed with hardwood solids and laminates
                </span>
              </div>
              <div className="flex items-center gap-[16px]">
                <span className="w-[11px] h-[11px] rounded-full bg-[#603EFF] inline-block" />
                <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                  Reinforced with double wood dowels, glue, screw - nails corner
                </span>
              </div>
              <div className="flex items-center gap-[16px]">
                <span className="w-[11px] h-[11px] rounded-full bg-[#0CC562] inline-block" />
                <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                  Arms, backs and seats are structurally reinforced
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <button className="bg-[#FB2E86] text-white h-[52px] px-[40px] rounded-[8px] font-semibold text-[16px] leading-[20px]">
                Add To Cart
              </button>
              <div className="flex flex-col h-[32px] w-[106px]">
                <span className="text-[#101750] text-[14px]">B&B Italian Sofa</span>
                <span className="text-[#101750] text-[14px]">$32.00</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
