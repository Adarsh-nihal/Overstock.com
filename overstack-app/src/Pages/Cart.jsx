import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Button, Icon, useToast } from "@chakra-ui/react";
import "./Cart.css";
import "../Component/Mugs.css";

import {
  getData,
  deleteData,
  Success,
} from "../Component/Utils/LocalStorage";
const Cart = () => {
  const data = getData("Cart");
  const [cart, setCart] = useState(data);
  const [discount,setDiscount]=useState(0)
  const [sum,setSum]=useState(cart.reduce((sum, el) => {
    return sum + el.price;
  }, 0))
  const toast = useToast();

  const handleDelete = (name) => {
    setCart(deleteData(name, "Cart"));
    toast({
      title: "Delete Successfull.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  

  const handleOrder = () => {
    setCart(Success("Cart"));
    toast({
      title: "order Successfull.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <div className="cart_page">
        <div className="cart_data">
          <h1 style={{ color: "#2f3337", fontSize: "36px", fontWeight: "700" }}>
            Shopping Cart
          </h1>
          <div className="MugCart">
            {cart.length > 0 &&
              cart.map((item) => (
                <div className="MugChild1" align="center" key={item.id}>
                  <div>
                    <img
                     className="productImage"
                      
                      src={item.image}
                      alt={item.name}
                    />{" "}
                  </div>
                  <div  style={{  fontSize: "20px" }}>
                    <h1>${item.price}</h1>
                  </div>
                  {item.count == 2 && (
                    <div className="productRating">
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    </div>
                  )}
                  {item.count == 3 && (
                    <div className="productRating">
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    </div>
                  )}
                  {item.count == 4 && (
                    <div className="productRating">
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    </div>
                  )}
                  {item.count == 5 && (
                    <div className="productRating">
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />{" "}
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                      <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" />
                    </div>
                  )}

                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <h3>
                      {" "}
                      <CheckCircleIcon />
                      Free Shipping
                    </h3>
                  </div>
                  <Button
                    onClick={() => handleDelete(item.name)}
                    bg="red"
                    width="200px"
                    color="white"
                  >
                    Delete
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <div className="cart_main">
          <Input placeholder="Apply Promocode" onChange={(e)=>{
            setTimeout(()=>{
              if(e.target.value=="ostack30"){
                setDiscount(15)
                setSum(sum*0.85)
              }
            },3000)
          }} />
          <div className="cart_one">
            <div className="cart_two">
              Total Item
              <span style={{ color: "black", fontWeight: "600" }}>
                {cart.length}
              </span>{" "}
            </div>

            <div className="cart_two">
              price <span>${parseFloat(sum.toFixed(2))}</span>{" "}
            </div>
            <div className="cart_three">
              Discount <span>{discount}%</span>
            </div>
            <hr />
            <div className="cart_four">
              Total Price <span>${parseFloat(sum.toFixed(2))}</span>{" "}
            </div>
          </div>
          <Button
            onClick={handleOrder}
            color="white"
            bg="#718096"
            mt="20px"
            textAlign="center"
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
