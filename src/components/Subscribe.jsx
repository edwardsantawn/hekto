import subscribe from '../assets/subscribe.svg';
import '../components/Subscribe.css'; 

export default function Subscribe() {
  return (
    <section
      className="w-full sub max-w-[1920px] mx-auto bg-no-repeat bg-center bg-cover  flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${subscribe})` }}
    >
      <div className="w-full max-w-[768px] min-h-[208px] flex flex-col items-center justify-center gap-6 md:gap-[60px] text-center">
        <h2 className="text-[#101750] font-bold tracking-[1.5%]
                       text-[28px] leading-8 md:text-[44px] md:leading-[52px]">
          Get Latest Update By Subscribe Our Newsletter
        </h2>

        <div className="flex items-center justify-center">
          <button
            className="bg-[#FB2E86] text-white h-[52px] px-[40px] rounded-[8px] font-semibold text-[16px] leading-[20px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
