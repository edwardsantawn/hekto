import couch from '../assets/couch.svg';
import './Unique.css';

export default function Unique() {
  return (
    <section className="w-full bg-[#F1F0FF] py-0">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-2 items-center unique px-[40px] gap: 8 md:px-6 min-h-[480px]">
          {/* Image */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={couch}
              alt="couch"
              className="w-full max-w-[640px] h-auto object-contain"
            />
          </div>

          {/* Text block */}
          <div className="w-full max-w-[534px] right min-h-[337px] flex flex-col gap-[48px] mx-auto md:mx-0">
            <span className="text-[#101750] font-bold text-[28px] leading-8 tracking-[1.5%] md:text-[36px] md:leading-[44px] text-left">
              Unique Features Of Latest & Trending Products
            </span>

            <div className="flex flex-col gap-[33px]">
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
              <div className="flex flex-col h-[32px] w-[106px] justify-center">
                <span className="text-[#101750] text-[14px] leading-[20px]">B&B Italian Sofa</span>
                <span className="text-[#101750] text-[14px] leading-[20px]">$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
