import couch from '../assets/couch.svg';
import './Unique.css';

export default function Unique() {
    return (
        <section className="flex flex-row justify-center items-center bg-[#F1F0FF] w-[1920px] ">
            <div>
                <img src={couch} alt="couch" />
            </div>
            <div className="w-[534px] h-[337px] flex flex-col gap-[48px]">
                <span className="text-[#101750] mt-[-25px] font-bold text-[36px] leading-[44px] tracking-[1.5%]">
                    Unique Features Of Latest & Trending Products
                </span>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex items-center gap-[16px]">
                        <span className="w-[11px] h-[11px] rounded-full bg-[#FB2E86] inline-block"></span>
                        <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                            All frames constructed with hardwood solids and laminates
                        </span>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <span className="w-[11px] h-[11px] rounded-full bg-[#603EFF] inline-block"></span>
                        <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                            Reinforced with double wood dowels, glue, screw - nails corner
                        </span>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <span className="w-[11px] h-[11px] rounded-full bg-[#0CC562] inline-block"></span>
                        <span className="text-[#8A8FB9] font-medium text-[16px] leading-[132%] tracking-[1.5%]">
                            Arms, backs and seats are structurally reinforced
                        </span>
                    </div>
                </div>
                <div className="flex flex-row h-[52px] items-center gap-[16px]">
                    <button className="bg-[#FB2E86] text-white h-[52px] w-[171px] pl-[40px] pr-[40px] pt-[16px] pb-[16px] rounded-[8px] font-semi-bold leading-[20px] text-[16px]">Add To Cart</button>
                    <div className='flex flex-col h-[32px] w-[106px]'>
                        <span className="text-[#101750] font-normal text-[14px]">B&B Italian Sofa</span>
                        <span className="text-[#101750] font-normal text-[14px]">$32.00</span>
                    </div>
                </div>
            </div>
        </section>
    );
}