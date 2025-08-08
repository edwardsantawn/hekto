import { useState } from 'react';
import one from '../assets/one.svg';
import two from '../assets/two.svg';
import three from '../assets/three.svg';
import emptyCart from '../assets/empty-cart.svg';
import './Cart.css';

export default function Cart() {
  const [cart, setCart] = useState([
    { img: one, name: 'Watches', price: 42, qty: 1 },
    { img: two, name: 'Maxes', price: 90, qty: 2 },
    { img: three, name: 'Shoes', price: 37, qty: 4 },
  ]);
  // Uncomment below for empty cart demo:
  // const [cart, setCart] = useState([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh]">
        <img src={emptyCart} alt="Empty Cart" className="w-64 mb-8" />
        <h2 className="text-2xl font-bold text-[#101750] mb-4">Your Cart Is Empty</h2>
        <button className="bg-[#FB2E86] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d81b6a] transition">
          Start Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="w-[1312px] ml-[415px]">
      <div className="flex max-w-[1089px] my-[104px] justify-between gap-8">
        {/* Cart Items */}
        <div className="flex-1 max-w-[640px]">
          <div className="flex w-[640px] flex-col gap-6">
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex items-center bg-white rounded-[8px] h-[104px]"
              >
                <img src={item.img} alt={item.name} className="object-contain rounded-l-[8px]" />
                <div className="flex-1 pl-6">
                  <div className="font-bold leading-[28px] text-[#101750] text-[22px]">{item.name}</div>
                  <div className="text-[#101750] leading-[20px] text-[16px]">${item.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center p-[2px] rounded-[8px] border border-[#E5E0FC] justify-between w-[120px] h-[40px]">
                  <button
                    className="w-8 h-8 rounded  text-[#101750] font-bold"
                    onClick={() => {
                      const newCart = [...cart];
                      if (newCart[i].qty > 1) newCart[i].qty -= 1;
                      setCart(newCart);
                    }}
                  >-</button>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={e => {
                      const newCart = [...cart];
                      newCart[i].qty = Math.max(1, Number(e.target.value));
                      setCart(newCart);
                    }}
                    className="w-12  rounded text-center"
                  />
                  <button
                    className="w-8 h-8 rounded  text-[#101750] font-bold"
                    onClick={() => {
                      const newCart = [...cart];
                      newCart[i].qty += 1;
                      setCart(newCart);
                    }}
                  >+</button>
                </div>
                <div className="w-24 text-right w-[51px] font-normal leading-[20px] text-[#101750] text-[16px] ml-[61px] ">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Cart Summary + Clear Cart */}
        <div className="flex flex-col items-center">
          {/* Cart Summary */}
          <div className="w-[350px] bg-[#F8F8FD] rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-8 h-fit mt-2 flex flex-col items-center">
            <div className="w-full mb-6">
              <div className="flex justify-between items-center border-b border-[#E5E0FC] pb-4 mb-4">
                <span className="font-bold text-[20px] text-[#101750]">Subtotal:</span>
                <span className="font-bold text-[16px] leading-[20px] text-[#101750]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E5E0FC] pb-4 mb-4">
                <span className="font-bold text-[20px] text-[#101750]">Total:</span>
                <span className="font-bold text-[16px] leading-[20px] text-[#101750]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#8A8FB9] font-normal leading-[16px] text-[14px]">Shipping:</span>
                <span className="text-[#8A8FB9] text-[18px]">$0.00</span>
              </div>
            </div>
            <button className="bg-[#FB2E86] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#d81b6a] transition w-full leading-[20px] text-[16px]">
              Proceed to checkout
            </button>
          </div>
          {/* Clear Cart button OUTSIDE the summary box but in the flex column */}
          <button
            className="text-[#FB2E86] w-full text-center text-[18px] font-normal mt-8"
            onClick={() => setCart([])}
          >
            Clear cart
          </button>
        </div>
      </div>
    </section>
  );
}