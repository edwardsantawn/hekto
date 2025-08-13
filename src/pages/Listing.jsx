import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import watches from '../assets/watch.svg';
import headphones from '../assets/maxes.svg';
import macs from '../assets/macs.svg';
import blackwatches from '../assets/black.svg';
import console from '../assets/playstation.svg';
import shoes from '../assets/shoes.svg';
import perfume from '../assets/perfume.svg';
import hexagon from '../assets/hexagon.svg';
import bracelet from '../assets/container.svg';
import ring from '../assets/ring.svg';
import heart from '../assets/purpleheart.svg';
import cart from '../assets/purplecart.svg';
import search from '../assets/expand.svg';
import sale from '../assets/sale.svg';
import checked2 from '../assets/checked2.svg';
import unchecked2 from '../assets/unchecked2.svg';
import checked1 from '../assets/checked1.svg';
import unchecked1 from '../assets/unchecked1.svg';
import checked3 from '../assets/checked3.svg';
import unchecked3 from '../assets/unchecked3.svg';
import goldstar from '../assets/goldstar.svg';
import star from '../assets/star.svg';
import gridsvg from '../assets/grid.svg';
import list from '../assets/list.svg';
import downArrow from '../assets/down-arrow.svg';
import './Listing.css';

const products = [
    {
        img: watches,
        name: 'Watches',
        price: '$50.00',
        sale: '$80.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: headphones,
        name: 'Headphones',
        price: '$57.00',
        sale: '$75.00',
        desc: 'Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: macs,
        name: 'Laptop',
        price: '$19.00',
        sale: '$29.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 2,
    },
    {
        img: blackwatches,
        name: 'Black Watches',
        price: '$12.00',
        sale: '$29.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: console,
        name: 'Game Console',
        price: '$67.00',
        sale: '$76.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: shoes,
        name: 'Shoes',
        price: '$56.00',
        sale: '$65.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: perfume,
        name: 'Perfume',
        price: '$56.00',
        sale: '$65.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: hexagon,
        name: 'Present Box',
        price: '$56.00',
        sale: '$65.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 4,
    },
    {
        img: bracelet,
        name: 'Bracelet',
        price: '$56.00',
        sale: '$65.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 1,
    },
    {
        img: ring,
        name: 'Ring',
        price: '$56.00',
        sale: '$65.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
        rating: 5,
    },
];

const brands = [
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Casio</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Apple</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Sony</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Nike</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Vke</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Glossiness</span>,
];

const discounts = [
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">20% Cashback</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">5% Cashback Offer</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">25% Discount Offer</span>,
];

const categories = [
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Watches</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Headphones</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Laptop</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Game Console</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Clothes</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Jewellery</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">Perfume</span>,
];

const prices = [
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">$0 - $150</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">$150 - $350</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">$250 - $500</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">$550 - $800</span>,
    <span className="font-normal text-[16px] leading-[20px] text-[#8A8FB9]">$800+</span>,
];

export default function Listing() {
    const [view, setView] = useState('grid'); // 'grid' or 'list'
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    function handleToggle(selected, setSelected, value) {
        setSelected(
            selected.includes(value)
                ? selected.filter((v) => v !== value)
                : [...selected, value]
        );
    }

    return (
        <div className="max-w-[1312px] w-full mx-auto ">
            <div> 
                <h2 className="justify-content items-center text-center mb-6 mt-[56px] leading-[64px] w-full h-[52px] text-[#101750] text-[52px] font-bold tracking-[1.5%]  mb-[16px]">
                    Products
                </h2>
                <span className="flex text-center gap-2 justify-center mb-[80px] items-center">
                    <span className="text-[16px] text-[#8A8FB9] leading-[20px] font-normal">Home</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-[#D9D9D9]"></span>
                    <span className="text-[16px] text-[#FB2E86] leading-[20px] font-normal">Products</span>
                </span>
            </div>
            <div className="flex items-center w-full h-full max-h-[40px] mb-6 items-center justify-end">
                <div className="flex items-center gap-[64px] w-full bar max-w-[694px] h-[40px] ">
                    <div className='w-[174px] one gap-[16px] h-[40px] flex items-center '>
                        <span className="text-[#8A8FB9] text-[16px] flex items-center h-full whitespace-nowrap">Per Page</span>
                        <div className='border border-[#E5E0FC] gap-[16px] flex flex-row border rounded-[8px] w-[96px] pl-[16px] pr-[2px] pt-[2px] pb-[2px] h-[40px] text-[#101750]'>
                            <select className="text-[#101750] font-normal leading-[16px] text-[14px] appearance-none w-full">
                                <option>12</option>
                                <option>24</option>
                                <option>48</option>
                            </select>
                            <img src={downArrow} alt="Down Arrow" className="" />
                        </div>
                    </div>
                    <div className="flex items-center sort  justify-between w-full max-w-[276px] h-[40px]" id='sort'>
                        <span className="text-[#8A8FB9] font-normal text-[16px] leading-[20px] flex items-center whitespace-nowrap">
                            Sort By
                        </span>
                        <div className="flex drop border border-[#E5E0FC] rounded-[8px] items-center gap-[16px]">
                            <select className="rounded-[8px] h-[40px] w-full max-w-[208px] pl-[16px] pr-[2px] pt-[2px] pb-[2px] font-normal text-[#101750] text-[14px] leading-[16px] appearance-none">
                                <option>Price High - Low</option>
                                <option>Price Low - High</option>
                                <option>Name A-Z</option>
                            </select>
                            <img src={downArrow} alt="Down Arrow" className="" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[16px] view w-[116px] h-[24px]">
                        {/* Grid Button */}

                        <span className='text-[16px] font-normal w-[36px] h-[20px] text-[#8A8FB9] leading-[20px] '>
                            View
                        </span>
                        <button
                            className={`w-6 h-6 flex items-center justify-center  rounded transition-colors
                            
                            `}
                            onClick={() => setView('grid')}
                            aria-label="Grid View"
                        >
                            <img
                                src={gridsvg}
                                alt="Grid View"

                            />
                        </button>
                        {/* List Button */}
                        <button
                            className={`w-6 h-6 flex items-center justify-center  rounded transition-colors
                            `}
                            onClick={() => setView('list')}
                            aria-label="List View"
                        >
                            <img
                                src={list}
                                alt="List View"
                                className="w-6 h-6"

                            />
                        </button>
                    </div>
                </div>

            </div>
            <section className="flex justify-between flex-row items-start w-full max-w-[1902px] mb-[100px] mt-[32px]">
                {/* Sidebar */}
                <aside className="max-w-[164px] side w-full h-[1303px] mr-[172px]">
                    {/* Product Brand */}
                    <div className="mb-[48px]">
                        <div className="mb-[23px]">
                            <span className="relative inline-block align-bottom">
                                <h3 className="font-bold text-[20px] leading-[24px] text-[#101750] mb-0 inline-block">Product Brand</h3>
                                <span
                                    className="block bg-[#101750] h-[2px] mt-1"
                                    style={{ width: '138px' }}
                                />
                            </span>
                        </div>
                        <ul className="text-[#8A8FB9] text-[16px] flex flex-col gap-2">
                            {brands.map((brand) => (
                                <li key={brand} className="flex items-center gap-2">
                                    <span
                                        onClick={() => handleToggle(selectedBrands, setSelectedBrands, brand)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={selectedBrands.includes(brand) ? checked1 : unchecked1}
                                            alt={selectedBrands.includes(brand) ? 'Checked' : 'Unchecked'}
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <span className="select-none">{brand}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Discount Offer */}
                    <div className="mb-[48px]">
                        <div className="mb-[23px]">
                            <span className="relative inline-block align-bottom">
                                <h3 className="font-bold text-[20px] leading-[24px] text-[#101750] mb-0 inline-block">Discount Offer</h3>
                                <span
                                    className="block bg-[#101750] h-[2px] mt-1"
                                    style={{ width: '154px' }}
                                />
                            </span>
                        </div>
                        <ul className="text-[#8A8FB9] text-[16px] space-y-4">
                            {discounts.map((discount) => (
                                <li key={discount} className="flex items-center gap-3">
                                    <span
                                        onClick={() => handleToggle(selectedDiscounts, setSelectedDiscounts, discount)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={selectedDiscounts.includes(discount) ? checked2 : unchecked2}
                                            alt={selectedDiscounts.includes(discount) ? 'Checked' : 'Unchecked'}
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <span className="select-none">{discount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Rating */}
                    <div className="mb-[48px]">
                        <div className="mb-[23px]">
                            <span className="relative inline-block align-bottom">
                                <h3 className="font-bold text-[20px] leading-[24px] text-[#101750] mb-0 inline-block">Rating</h3>
                                <span
                                    className="block bg-[#101750] h-[2px] mt-1"
                                    style={{ width: '70px' }}
                                />
                            </span>
                        </div>
                        <ul className="text-[#8A8FB9] text-[16px] space-y-4">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <li key={rating} className="flex items-center gap-3">
                                    <span
                                        onClick={() => handleToggle(selectedRatings, setSelectedRatings, rating)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={selectedRatings.includes(rating) ? checked3 : unchecked3}
                                            alt={selectedRatings.includes(rating) ? 'Checked' : 'Unchecked'}
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <span className="flex gap-1 select-none">
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src={i < rating ? goldstar : star}
                                                alt={i < rating ? 'Gold Star' : 'Star'}
                                                className="w-5 h-5"
                                            />
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Categories */}
                    <div className="mb-[48px]">
                        <div className="mb-[23px]">
                            <span className="relative inline-block align-bottom">
                                <h3 className="font-bold text-[20px] leading-[24px] text-[#101750] mb-0 inline-block">Categories</h3>
                                <span
                                    className="block bg-[#101750] h-[2px] mt-1"
                                    style={{ width: '120px' }}
                                />
                            </span>
                        </div>
                        <ul className="text-[#8A8FB9] text-[16px] space-y-4">
                            {categories.map((cat) => (
                                <li key={cat} className="flex items-center gap-3">
                                    <span
                                        onClick={() => handleToggle(selectedCategories, setSelectedCategories, cat)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={selectedCategories.includes(cat) ? checked2 : unchecked2}
                                            alt={selectedCategories.includes(cat) ? 'Checked' : 'Unchecked'}
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <span className="select-none">{cat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Price */}
                    <div>
                        <div className="mb-[23px]">
                            <span className="relative inline-block align-bottom">
                                <h3 className="font-bold text-[20px] leading-[24px] text-[#101750] mb-0 inline-block">Price</h3>
                                <span
                                    className="block bg-[#101750] h-[2px] mt-1"
                                    style={{ width: '54px' }}
                                />
                            </span>
                        </div>
                        <ul className="text-[#8A8FB9] text-[16px] space-y-4">
                            {prices.map((price) => (
                                <li key={price} className="flex items-center gap-3">
                                    <span
                                        onClick={() => handleToggle(selectedPrices, setSelectedPrices, price)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={selectedPrices.includes(price) ? checked2 : unchecked2}
                                            alt={selectedPrices.includes(price) ? 'Checked' : 'Unchecked'}
                                            className="w-5 h-5"
                                        />
                                    </span>
                                    <span className="select-none">{price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                {/* Main Content */}
                <div className="flex-1">
                    {/* Product List/Grid */}
                    {view === 'grid' ? (
                        <div
                            className="grid grid-cols-3 gap-8 w-full justify-end max-w-[976px]"
                            style={{ justifyItems: 'end' }}
                        >
                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="rounded-[8px] another w-full max-w-[304px] h-[448px] bg-white flex flex-col items-center transition-shadow cursor-pointer"
                                    style={{
                                        boxShadow: '8px 24px 32px -16px #10175026'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 64px 80px -16px #10175026'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '8px 24px 32px -16px #10175026'}
                                    onClick={() => navigate('/details', { state: { product } })}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
										className="pr-[8px] max-w-[288px] w-full max-h-[200px] h-full rounded-[4px] pl-[8px] pt-[8px] "
                                    />
                                    <div className="w-full info px-4 py-4 h-[160px] flex flex-col items-start">
                                        <span className="text-[#101750] name font-bold text-[16px] leading-[20px]">
                                            {product.name}
                                        </span>
                                        <div className="flex mb-[8px] mt-[8px] gap-2">
                                            {[...Array(5)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={i < (product.rating || 0) ? goldstar : star}
                                                    alt={i < (product.rating || 0) ? "Gold Star" : "Star"}
                                                    className="w-4 h-4"
                                                />
                                            ))}
                                        </div>
                                        <span className="flex gap-[8px] items-center">
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
                                                <span className="text-[#8A8FB9] line-through font-normal text-[14px] leading-[16px]">
                                                    {product.sale}
                                                </span>
                                            )}
                                        </span>
                                        <span className="text-[#8A8FB9] text-[14px] mt-[24px] leading-[18px]">
                                            {product.desc}
                                        </span>
                                    </div>
                                    {/* Action icons at the bottom */}
                                    <div className="flex extra items-center w-[144px] pl-[16px] h-[32px] gap-[24px] mt-[16px] mb-4 ml-0 self-start">
                                        <img src={cart} alt="cart" className="p-2" />
                                        <img src={heart} alt="heart" className="p-2" />
                                        <img src={search} alt="search" className="p-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex list flex-col w-full max-w-[976px] gap-8">
                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="rounded-[8px] bg-white flex flex-row items-center shadow transition-shadow p-[16px] cursor-pointer"
                                    style={{
                                        maxHeight: 232,
                                        height: '100%',
                                        boxShadow: '8px 24px 32px -16px #10175026'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = '8px 64px 80px -16px #10175026'}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = '8px 24px 32px -16px #10175026'}
                                    onClick={() => navigate('/details', { state: { product } })}
                                >
                                    <div className="group w-full max-w-[288px] h-[200px] bg-white hover:bg-[#E5E0FC] rounded-[8px] flex items-center justify-center relative transition-colors duration-300 mr-6">
                                        {/* Sale badge for Perfume */}
                                        {product.name === 'Perfume' && (
                                            <img
                                                src={sale}
                                                alt="Sale"
                                                className="absolute top-[0px] left-[-6.21px] z-20"
                                            />
                                        )}
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-[200px] w-[288px] object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 w-full max-w-[616px] h-[105px] flex flex-col justify-center">
                                        <div className="flex items-center w-full mb-1">
                                            <span className="text-[#101750] font-bold text-[20px] h-[24px] mb-[8px] leading-[24px]">
                                                {product.name}
                                            </span>
                                            <span className="flex gap-1 ml-auto">
                                                {[...Array(5)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src={i < (product.rating || 0) ? goldstar : star}
                                                        alt={i < (product.rating || 0) ? "Gold Star" : "Star"}
                                                        className="w-4 h-4"
                                                    />
                                                ))}
                                            </span>
                                        </div>
                                        <span className="flex gap-[8px] mb-[11px] h-[20px] items-center mb-1">
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
                                                <span className="text-[#8A8FB9] font-normal text-[14px] leading-[16px] line-through">
                                                    {product.sale}
                                                </span>
                                            )}
                                        </span>
                                        <span className="text-[#8A8FB9] w-[616px] h-[42px] text-[14px] leading-[18px]">
                                            {product.desc}
                                        </span>
                                        <div className="flex gap-[24px] mt-[37px]">
                                            <button className="flex items-center justify-center w-[32px] h-[32px]  rounded-none bg-white hover:bg-[#F6F7FB] transition">
                                                <img src={cart} alt="cart" className="" />
                                            </button>
                                            <button className="flex items-center justify-center w-[32px] h-[32px]  rounded-none bg-white hover:bg-[#F6F7FB] transition -ml-px">
                                                <img src={heart} alt="heart" className="" />
                                            </button>
                                            <button className="flex items-center justify-center w-[32px] h-[32px]  rounded-none bg-white hover:bg-[#F6F7FB] transition -ml-px">
                                                <img src={search} alt="search" className="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Pagination */}
                    <div className="flex justify-end h-[32px] mt-[48px]">
                        {[1, 2, 3, 4].map((page) => (
                            <button
                                key={page}
                                className={`w-[32px] h-[32px] rounded-[4px] text-[16px] leading-[20px] transition-colors
                                    ${currentPage === page
                                        ? 'bg-[#FC5FA2] text-white'
                                        : 'bg-white text-[#101750]'
                                    }`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
		</div>
	);
}