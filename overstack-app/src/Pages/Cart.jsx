import { Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useParams,Link } from "react-router-dom";
import { CheckCircleIcon,ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Icon,useToast } from '@chakra-ui/react'
import {FiHeart } from 'react-icons/fi'
import {MdAddShoppingCart } from 'react-icons/md'
import "./Cart.css"
import "../Component/Mugs.css"

import { saveData,getData} from '../Component/Utils/LocalStorage'
const Cart = () => {
  
  const data=getData("Cart")
  const [cart,setCart]=useState(data)
  const toast = useToast()
   
  const handleDelete=(name)=>{
    if(cart.length===1){
      localStorage.removeItem("Cart")
      setCart([])
      return
    }
  const deletion=cart.filter((item)=>{
    return item.name!==name
   })
  setCart(deletion)
  localStorage.setItem("Cart",JSON.stringify(cart))
  console.log(cart)

   toast({
    title: 'Delete Successfull.',
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
  }
 const sum=cart.reduce((sum,el)=>{
  return sum+el.price
 },0)
 console.log(sum)

  const handleOrder=()=>{
    localStorage.removeItem("Cart")
    setCart([])
    toast({
      title: 'order Successfull.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

  }

  return (
    <div>
        <div className='cart_page'>
            <div className='cart_data'>
              <h1 style={{ color:"#2f3337",fontSize:"36px", fontWeight: "700"}}>Shopping Cart</h1>
              <div className='MugCart'>
       
       {cart.length>0 && cart.map((item)=>(
          <div className='MugChild1' key={item.id}>
              <div ><img width="70%" style={{margin:"auto"}}src={item.image} /> </div>
              <div style={{display:"flex",fontSize:"20px"}} ><h1>${item.price}</h1>
            
              </div>
              { item.count==2 && <div style={{display:"flex",marginLeft:"100px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
              { item.count==3 && <div style={{display:"flex",marginLeft:"100px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
              { item.count==4 && <div style={{display:"flex",marginLeft:"100px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
              { item.count==5 && <div style={{display:"flex",marginLeft:"100px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}


              <div><p>{item.name}</p></div>
              <div><h3> <CheckCircleIcon/>Free Shipping</h3></div>
       <Button onClick={()=>handleDelete(item.name)} bg="red"  width="200px" color="white">Delete</Button>
       


              </div>
       ))}
  </div >
            </div>
            <div className='cart_main'>
                <Input placeholder='Apply Promocode'/>
                <div className='cart_one'>
                <div className='cart_two'>Total Item<span style={{color:"black",fontWeight:"600"}}>{cart.length}</span> </div>

                    <div className='cart_two'>price <span>${parseFloat(sum.toFixed(2))}</span> </div>
                    <div className='cart_three'>Discount <span>0</span></div>
                    <hr />
                    <div className='cart_four'>Total Price <span>${parseFloat(sum.toFixed(2))}</span> </div>
                </div>
                <Button onClick={handleOrder} color="white"  bg="#718096" mt="20px" textAlign="center">Confirm Order</Button>
            </div>
        </div>
        
    </div>
  )
}

export default Cart