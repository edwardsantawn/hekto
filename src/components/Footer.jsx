import hekto from '../assets/hekto.svg';
import fb from '../assets/fb.svg';
import twt from '../assets/twt.svg';
import ig from '../assets/ig.svg';

export default function Footer() {
  return (
    <footer className="w-[1920px]  bg-[#F6F7FB] pt-[80px] ">
      <div className="max-w-[1360px] mx-auto flex flex-row ">
        {/* Left: Logo, subscribe, address */}
        <div className="flex-1 flex flex-col gap-[32px] w-[304px]">
          <img src={hekto} alt="Hekto Logo" className="w-[103px] h-[30px]" />
            <div className="flex items-center w-[328px]">
              <form className="relative w-full">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="border border-[#E5E0FC] text-[#8A8FB9] rounded-lg p-2 text-[14px] font-normal leading-[16px] h-[40px] w-[304px]"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#FB2E86] w-[77px] h-[36px] rounded-md flex items-center justify-center hover:bg-[#d81b6a] text-white font-semibold text-[12px] leading-[14px] transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          <p className="text-[#8A8FB9] font-normal text-[16px] w-[304px] h-[40px] leading-[20px]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        {/* Columns */}
        <div className="flex-[2] grid grid-cols-3" style={{ columnGap: '111px' }}>
          <div>
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Categories</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] leading-[20px] font-normal text-[16px]">
              <li>Laptops &amp; Computers</li>
              <li>Camersa &amp; Photography</li>
              <li>Smart Phones &amp; Tablets</li>
              <li>Video Games &amp; Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div style={{ width: '158px' }}>
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Customer Care</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] leading-[20px] font-normal text-[16px]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div style={{ marginLeft: '19px', width: '187px' }}>
            {/* 130px - 111px = 19px extra for the third column */}
            <h4 className="text-[#101750] text-[22px] font-bold mb-[24px]">Pages</h4>
            <ul className="flex flex-col gap-[24px] text-[#8A8FB9] leading-[20px] font-normal text-[16px]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Element</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="w-[1920px] mt-[142px] bg-[#E5E0FC] flex flex-row items-center h-[56px] border-t border-[#E0E0E0] pt-[16px]">
        <div className="max-w-[1360px] mx-auto ml-[305px] text-[#8A8FB9] text-[14px] text-left">
          ©Webecy - All Rights Reserved
        </div>
        <div className="flex ml-auto gap-[16px] mr-[303px] items-center">
          <img src={fb} alt="Facebook" className="w-[24px] h-[24px]" />
          <img src={twt} alt="Twitter" className="w-[24px] h-[24px]" />
          <img src={ig} alt="Instagram" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </footer>
  );
}