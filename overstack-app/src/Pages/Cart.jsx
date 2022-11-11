import { Input } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <div>
        <div>
            <div>render data</div>
            <div>
                <Input placeholder='Apply Promocode'/>
                <div>
                    <div>price</div>
                    <div>Discount</div>
                    <hr />
                    <div>Total Price</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart