import subscribe from '../assets/subscribe.svg';

export default function Subscribe() {
    return (
        <section
            className="flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover h-[432px] "
            style={{ backgroundImage: `url(${subscribe})` }}
        >
            <div className="w-[768px] h-[208px] flex flex-col items-center justify-center gap-[60px]">
                <h2 className="text-[44px] font-bold text-[#101750] tracking-[1.5%] leading-[52px] text-center">
                    Get Latest Update By Subscribe Our Newsletter
                </h2>
                <div className="flex flex-row h-[52px] items-center gap-[16px]">
                    <button className="bg-[#FB2E86] text-white h-[52px] w-[151px] px-[40px] py-[16px] rounded-[8px] font-semibold leading-[20px] text-[16px]">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
}