import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '@/app/store/features/Productslice';
import { addItem } from '@/app/store/features/Productslice';
const Cart = () => {
    const cartdata = useSelector((state) => state.demo?.item);
    const totalItem=useSelector(state=>state.demo?.totalPrice)
    const dispatch=useDispatch()
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartdata.map(item => (
          <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-details">
              <span className="item-name">{item.title}</span>
              <span className="item-price">₹{item.price}</span>

              <div className='flex items-center w-[100%] gap-x-[5px]'>
                <span onClick={()=>dispatch(addItem(item))} className='text-[17px] bg-[#000] text-[#fff] rounded-[50%] p-[2px] w-[20px] text-center'>+</span>
                <span className="item-quantity"> {item.quantity}</span>
                <span onClick={()=>dispatch(removeItem(item.id))} className='text-[17px] bg-[#000] text-[#fff] rounded-[50%] p-[2px] w-[20px] text-center'>-</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{totalItem}</h3>
      </div>
    </div>
  );
};

export default Cart;
