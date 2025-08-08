import check from '../assets/check.svg';
import airpods from '../assets/airpods.svg';
import './Discount.css';

export default function Discount() {
    return (
        <section className="flex w-[1920px]  wrapper flex-col items-center">
            <h2 className="leading-[52px] above w-[364px] h-[52px] mt-[114px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[24px]">
                Discount Item
            </h2>
            <div className='flex text-[#101750] flex-row gap-[32px] text-[18px] mb-[26px] leading-[24px] font-normal'>
                <span className="hover:text-[#FB2E86] cursor-pointer">Headphones</span>
                <span className="hover:text-[#FB2E86] cursor-pointer">Laptop</span>
                <span className="hover:text-[#FB2E86] cursor-pointer">Other</span>
            </div>
            <div className="w-[1310px] h-[568px] flex flex-row justify-between items-center gap-8  mb-[100px]">
                {/* Left: All content under 20% Discount */}
                <div className="w-[534px] h-[337px] flex flex-col gap-[24px] mt-[113.5px] mb-[113.5px]">
                    <span className="text-[#101750] mt-[-25px] font-bold text-[36px] leading-[44px] tracking-[1.5%]">
                        20% Discount Of All Products
                    </span>
                    <span className="text-[#FB2E86] font-bold text-[22px] leading-[28px] ">
                        Headphones Compact
                    </span>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center gap-[16px]">
                            <span className="text-[#8A8FB9] font-normal text-[18px] leading-[24px] w-[523px] h-[49px] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                            </span>
                        </div>
                        <div className="flex flex-row gap-[32px] ">
                            <div className='flex flex-col gap-[26px]'>
                                <div className='flex flex-row gap-[8px]'>
                                    <span><img src={check} alt="check" /></span>
                                    <span className='text-[#8A8FB9] font-normal text-[16px] flex items-center leading-[20px]'>Material expose like metals</span>
                                </div>
                                <div className='flex flex-row gap-[8px]'>
                                    <span><img src={check} alt="check" /></span>
                                    <span className='text-[#8A8FB9] font-normal text-[16px] flex items-center leading-[20px]'>Simple neutral colours.</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[26px]'>
                                <div className='flex flex-row gap-[8px]'>
                                    <span><img src={check} alt="check" /></span>
                                    <span className='text-[#8A8FB9] font-normal text-[16px] flex items-center leading-[20px]'>Clear lines and geomatric figures</span>
                                </div>
                                <div className='flex flex-row gap-[8px]'>
                                    <span><img src={check} alt="check" /></span>
                                    <span className='text-[#8A8FB9] font-normal text-[16px] flex items-center leading-[20px]'>Material expose like metals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row h-[52px] items-center gap-[16px]">
                        <button className="bg-[#FB2E86] text-white h-[52px] w-[156px] pl-[40px] pr-[40px] pt-[16px] pb-[16px] rounded-[8px] font-semi-bold leading-[20px] text-[16px]">Shop Now</button>
                    </div>
                </div>
                {/* Right: Airpods image aligned to the extreme end and same height */}
                <div className="flex items-center justify-center h-[337px]">
                    <img src={airpods} alt="" />
                </div>
            </div>
        </section>
    );
}