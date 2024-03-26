import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form action="" className='place-order'>
     <div className="place-oredr-left">
<p className="title">Delivery Information</p>
<div className="multi-field">
  <input type="text" placeholder='First Name'/>
  <input type="text" placeholder='Last Name'/>
</div>
<input type="emailt" placeholder='Email address'/>
<input type="text" placeholder='street'/>

     
     <div className="multi-field">
  <input type="text" placeholder='City'/>
  <input type="text" placeholder='State'/>

</div>
   
     <div className="multi-field">
  <input type="text" placeholder='Zip code'/>
  <input type="text" placeholder='Country'/>


     </div>

<input type="text" placeholder='Phone' />
</div>

<div className="palce-order-right">
<div className="cart-total">
          <h2>Cart totals</h2>
          
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Payment</button>
        </div>
       
        </div>
    

    </form>
  )
}

export default PlaceOrder