import playstation from '../assets/playstation.svg';
import shoes from '../assets/shoes.svg';
import perfume from '../assets/perfume.svg';
import hexagon from '../assets/hexagon.svg';
import container from '../assets/container.svg';
import ring from '../assets/ring.svg';
import heart from '../assets/purpleheart.svg';
import cart from '../assets/purplecart.svg';
import search from '../assets/expand.svg';
import sale from '../assets/sale.svg';
import './Latest.css';

const products = [
	{ img: playstation, name: 'Game console', price: '$76.00', sale: '$89.00' },
	{ img: shoes, name: 'Shoes', price: '$57.00', sale: '$75.00' },
	{ img: perfume, name: 'Perfume', price: '$19.00', sale: '$29.00' },
	{ img: hexagon, name: 'Present box', price: '$12.00', sale: '$29.00' },
	{ img: container, name: 'Watches', price: '$67.00', sale: '$76.00' },
	{ img: ring, name: 'Ring', price: '$56.00', sale: '$65.00' },
];

export default function Latest() {
	return (
		<section className="latest-section wrapper w-[1920px]  flex flex-col items-center">
			<h2 className="leading-[52px] latest w-[364px] h-[52px] mt-[114px] text-[#101750] text-[44px] font-bold tracking-[1.5%] text-center mb-[16px]">
				Latest Products
			</h2>
            <div className='flex text-[#101750] flex-row gap-[64px] text-[18px] leading-[24px] font-normal'>
                <span className="hover:text-[#FB2E86] cursor-pointer">New Arrival</span>
                <span className="hover:text-[#FB2E86] cursor-pointer">Best Seller</span>
                <span className="hover:text-[#FB2E86] cursor-pointer">Featured</span>
                <span className="hover:text-[#FB2E86] cursor-pointer">Special Offer</span>
            </div>
			<div className="w-[1312px] h-[640px] grid grid-cols-3 grid-rows-2 gap-8 mt-[64px] mb-[100px]">
				{products.map((product, i) => (
					<div
						key={i}
						className="rounded-[8px] w-[416px] h-[304px] flex flex-col gap-[12px] items-center justify-start"
					>
						<div className="group w-[416px] h-[272px] bg-white hover:bg-[#E5E0FC] rounded-t-[8px] flex items-center justify-center relative transition-colors duration-300">
							{/* Sale badge for Perfume */}
							{product.name === 'Perfume' && (
								<img
									src={sale}
									alt="Sale"
									className="absolute top-[0px] left-[-6.21px] z-20"
								/>
							)}
							{/* Action icons */}
							<span className="flex flex-col gap-[16px] absolute left-[8px] bottom-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
								<span className="flex justify-center items-center h-[32px] w-[32px] bg-transparent rounded-full ">
									<img src={cart} alt="cart" className="w-[16px] h-[16px]" />
								</span>
								<span className="flex justify-center items-center h-[32px] w-[32px] bg-transparent rounded-full ">
									<img src={heart} alt="heart" className="w-[16px] h-[16px]" />
								</span>
								<span className="flex justify-center items-center h-[32px] w-[32px] bg-transparent rounded-full ">
									<img src={search} alt="search" className="w-[16px] h-[16px]" />
								</span>
							</span>
							<img src={product.img} alt={product.name} />
						</div>
						<div className="w-[416px] h-[20px] rounded-b-[8px]">
							<div className="justify-between flex flex-row items-center">
								<span className="text-[#101750] font-normal text-[16px] leading-[20px]">{product.name}</span>
								<span className="flex gap-[16px] items-center">
									<span
										className={
											product.sale && product.sale !== product.price
												? 'text-[#101750] font-normal text-[16px] leading-[20px]'
												: ''
										}
									>
										{product.price}
									</span>
									{product.sale && product.sale !== product.price && (
										<span className="text-[#FB2E86] font-normal text-[14px] leading-[16px]">
											{product.sale}
										</span>
									)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}


