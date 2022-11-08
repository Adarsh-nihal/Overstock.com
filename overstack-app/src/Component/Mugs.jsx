
import React, { useEffect, useState } from 'react'
import "./Mugs.css"
import {Input} from "@chakra-ui/react"
import {ChevronDownIcon,CheckCircleIcon} from "@chakra-ui/icons"
import axios from 'axios'
import { Link } from "react-router-dom";
const Mugs = () => {
    const [data,setData]=useState([]) 
      
const getdata=()=>{
    axios.get("http://localhost:8080/mugs")
    .then((r)=>setData(r.data))
    .catch((e)=>console.log(e))
}
useEffect(()=>{
    getdata()

},[])
console.log("Ram")


  return (
    <div className='Container'>
        <h1>Mugs</h1>
        <div className="SearchBy">
           <label>SortBy:</label>
          <select style={{width:"16%",border:"1px solid black",marginLeft:"15px"}}>
          <option value="Best Selling">Best Selling</option>
           <option value="Asc">Price Low-High</option>
         <option value="Dsc">Price High-Low</option>
        
          </select>
        </div>
        <div className='MugsData'>
             {data.length>0 && data.map((item)=>(
                <div className='Mugs' key={item.id}>
                    <div><img  src={item.image} /></div>
                    <span>Featured</span>
                    <div style={{display:"flex"}} ><h1>INR {item.price}</h1>
                  <Link to="">  <span  className='icon'><ChevronDownIcon/>More details</span></Link>
                    </div>
                    <div><p>{item.name}</p></div>
                    <div><h3> <CheckCircleIcon/>Free Shipping</h3></div>
                    </div>
             ))}
        </div>
      
    </div>
  )
}

export default Mugs