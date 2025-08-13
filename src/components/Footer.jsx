import hekto from '../assets/hekto.svg';
import fb from '../assets/fb.svg';
import twt from '../assets/twt.svg';
import ig from '../assets/ig.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="w-full  bg-[#F6F7FB] pt-[80px]">
      {/* top content */}
      <div className="w-full max-w-[1360px] mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-[111px]">
        {/* Left: logo + subscribe + address */}
        <div className=" flex flex-col gap-[32px]">
          <img src={hekto} alt="Hekto Logo" className="w-[103px] h-[30px]" />

          <div className="w-full max-w-[328px]">
            <form className="relative w-full">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="border border-[#E5E0FC] text-[#8A8FB9] rounded-lg px-3 h-[40px] w-full text-[14px] leading-[16px]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#FB2E86] px-3 w-[77px] h-[36px] rounded-md flex items-center justify-center hover:bg-[#d81b6a] text-white font-semibold text-[12px] leading-[14px] transition"
              >
                Sign Up
              </button>
            </form>
          </div>

          <p className="text-[#8A8FB9] text-[16px] leading-[20px] max-w-[304px]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Right: 3 columns */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-x-[111px]">
          <div>
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Categories</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] text-[16px] leading-[20px]">
              <li>Laptops &amp; Computers</li>
              <li>Cameras &amp; Photography</li>
              <li>Smart Phones &amp; Tablets</li>
              <li>Video Games &amp; Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          <div className="md:w-[158px]">
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Customer Care</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] text-[16px] leading-[20px]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          <div className="md:ml-[19px] md:w-[187px]">
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Pages</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] text-[16px] leading-[20px]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Element</li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="mt-[142px] bg-[#E5E0FC] border-t border-[#E0E0E0]">
        <div className="w-full max-w-[1360px] mx-auto px-4 h-[56px] flex items-center justify-between">
          <div className="text-[#8A8FB9] text-[14px]">©Webecy - All Rights Reserved</div>
          <div className="flex gap-[16px] items-center">
            <img src={fb} alt="Facebook" className="w-[24px] h-[24px]" />
            <img src={twt} alt="Twitter" className="w-[24px] h-[24px]" />
            <img src={ig} alt="Instagram" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
