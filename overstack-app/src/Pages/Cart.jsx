import { Input } from '@chakra-ui/react'
import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (
    <div>
        <div className='cart_page'>
            <div className='cart_data'>
              <div>NO PRODUCTS IN THE CART</div>
            </div>
            <div className='cart_main'>
                <Input placeholder='Apply Promocode'/>
                <div className='cart_one'>
                    <div className='cart_two'>price <span>0</span> </div>
                    <div className='cart_three'>Discount <span>0</span></div>
                    <hr />
                    <div className='cart_four'>Total Price <span>0</span> </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart