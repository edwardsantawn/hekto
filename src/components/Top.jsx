import perfume from '../assets/perfume.svg';
import hexagon from '../assets/hexagon.svg';
import container from '../assets/container.svg';
import ring from '../assets/ring.svg';
import crescent from '../assets/crescent.svg';
import './Top.css';

const categories = [
    { img: perfume, label: 'Perfume' },
    { img: hexagon, label: 'Present box' },
    { img: container, label: 'Bracelet' },
    { img: ring, label: 'Ring' },
];

export default function Top() {
    return (
        <section className="flex  w-[1920px]  wrapper flex-col items-center">
            <h2 className="leading-[52px] above w-[364px] h-[52px] mt-[114px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[48px]">
                Top Categories
            </h2>
            <div className="carousel-wrapper w-[1280px] mx-auto">
                {/* Radio buttons */}
                <input type="radio" name="top-carousel" id="top-item-1" defaultChecked className="hidden" />
                <input type="radio" name="top-carousel" id="top-item-2" className="hidden" />
                <input type="radio" name="top-carousel" id="top-item-3" className="hidden" />
                <input type="radio" name="top-carousel" id="top-item-4" className="hidden" />

                {/* Carousel track */}
                <div className="carousel-track flex justify-between transition-transform duration-500 ease-in-out items-center
                    [&:has(~#top-item-1:checked)]:translate-x-0
                    [&:has(~#top-item-2:checked)]:-translate-x-[304px]
                    [&:has(~#top-item-3:checked)]:-translate-x-[608px]
                    [&:has(~#top-item-4:checked)]:-translate-x-[912px]
                ">
                    {categories.map((cat, i) => (
                        <div className="carousel-item flex flex-col items-center bg-transparent p-0 m-0" key={i}>
                            <div className="group flex flex-col gap-[32px] items-center cursor-pointer transition-all">
                                <div className="relative w-[272px] h-[272px] rounded-full bg-[#F6F7FB] flex items-center justify-center mb-[24px] overflow-hidden border-2 border-transparent transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(251,46,134,0.10)]">
                                    {/* Main image (underneath) */}
                                    <img
                                        src={cat.img}
                                        alt={cat.label}
                                        className="w-[272px] h-[272px] rounded-full object-cover relative z-10"
                                    />
                                    {/* Crescent image (on top, fades in on hover) */}
                                    <img
                                        src={crescent}
                                        alt="crescent"
                                        className="absolute left-0 top-[35px] w-[236px] h-[236px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        draggable={false}
                                    />
                                    {/* Button appears on hover */}
                                    <button
                                        className="bg-[#0CC562] text-white text-[12px] leading-[14px] font-semibold absolute w-[114px] h-[36px] left-1/2 -translate-x-1/2 bottom-[33px] px-[16px] py-[11px] rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                                        style={{ pointerEvents: 'auto' }}
                                    >
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

                {/* Dot navigation */}
                <div className="carousel-nav flex gap-[10px] justify-center mb-[100px] mt-[60px]">
                    <input type="radio" name="top-carousel" id="top-item-1" defaultChecked className="hidden peer" />
                    <label
                        htmlFor="top-item-1"
                        className="w-[8px] h-[8px] rounded-[100px] border border-[#FB2E86] transition-colors duration-300 inline-block cursor-pointer
                        peer-checked:bg-[#FB2E86] peer-checked:border-[#FB2E86] bg-[#FFF]"
                    />
                    <input type="radio" name="top-carousel" id="top-item-2" className="hidden peer" />
                    <label
                        htmlFor="top-item-2"
                        className="w-[8px] h-[8px] rounded-[100px] border border-[#FB2E86] transition-colors duration-300 inline-block cursor-pointer
                        peer-checked:bg-[#FB2E86] peer-checked:border-[#FB2E86] bg-[#FFF]"
                    />
                    <input type="radio" name="top-carousel" id="top-item-3" className="hidden peer" />
                    <label
                        htmlFor="top-item-3"
                        className="w-[8px] h-[8px] rounded-[100px] border border-[#FB2E86] transition-colors duration-300 inline-block cursor-pointer
                        peer-checked:bg-[#FB2E86] peer-checked:border-[#FB2E86] bg-[#FFF]"
                    />
                    <input type="radio" name="top-carousel" id="top-item-4" className="hidden peer" />
                    <label
                        htmlFor="top-item-4"
                        className="w-[8px] h-[8px] rounded-[100px] border border-[#FB2E86] transition-colors duration-300 inline-block cursor-pointer
                        peer-checked:bg-[#FB2E86] peer-checked:border-[#FB2E86] bg-[#FFF]"
                    />
                </div>
            </div>
        </section>
    );
}