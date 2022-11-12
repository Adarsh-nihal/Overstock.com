import React, { useEffect, useState } from 'react'
import "./Mugs.css"
import {ChevronDownIcon,CheckCircleIcon,ChevronRightIcon,ChevronLeftIcon} from "@chakra-ui/icons"

import { Button,Spinner } from '@chakra-ui/react'
import { useFetch } from './UseFetch'
import {Link, useLocation} from "react-router-dom"
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { Icon } from '@chakra-ui/react'
import {FiHeart } from 'react-icons/fi'


const  CookiesCutter = () => {
const [page,setPage]=useState(1)
const location=useLocation()
const [searchParams]=useSearchParams()
const [color,setColor]=useState(false)


  let url = `http://localhost:8080/cookingCutters?_limit=12&_page=${page}`;

  const { loading, error, data,setData } = useFetch(url,page,location);



const handleChange=(e)=>{

 const {value}=e.target

 axios.get("http://localhost:8080/cookingCutters",{
  params: {
    _page:page,
    _limit:12,
    _sort:"count",
    _order:value
  }
 })
  .then((r)=>{
    setData(r.data)
    console.log(r.data)
  })
}




const handlePageChange = (changeBy) => {
  setPage(page + changeBy);
}

const handleHeart=(id)=>{
  setColor(!color)
 console.log(id)
}

  return (
    <div className='Container'>
       
        <h1>Cooking Cutters</h1> 
        <div className="SearchBy">
           <label>SortBy:</label>
          <select  onChange={handleChange} style={{width:"16%",border:"1px solid black",marginLeft:"15px"}}>
          <option value="Best Selling">Best Selling</option>
          <option  name="name" value="asc">By Name A to Z</option>
          <option  name="name" value="desc">By Name Z to A</option>
          <option  name="count" value="asc">Rating Low-High</option>
          <option  name="count" value="desc">Rating High-Low</option>
           <option name="price" value="asc">Price Low-High</option>
         <option   name="price" value="desc">Price High-Low</option>
        
          </select>
        </div>
        {!loading && <Spinner thickness='4px' speed='0.65s' 
            emptyColor='gray.200'color='blue.500'size='xl'/>}
        <div className='MugsData'>
       
             {data.length>0 && data.map((item)=>(
                <div className='Mugs' key={item.id}>
                 <div> <Icon className='heart' onClick={()=>handleHeart(item.id)} backgroundColor={color?"red":null} cursor="pointer" m="5px" padding="2px" color={color?"white":"grey"} w={6} h={5} border="1px solid grey" borderRadius="50%"  as={FiHeart}></Icon></div>
                    <div><img  src={item.image} /> </div>
                    <span>Featured</span>
                    <div style={{display:"flex"}} ><h1>INR {item.price}</h1>
                  
                  <Link to={`/cookingCutters/${item.id}`}>  <span  className='icon'><ChevronDownIcon/>More details</span></Link>
                    </div>
                    { item.count==2 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==3 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==4 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}
                    { item.count==5 && <div style={{display:"flex",marginLeft:"10px"}}><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /> <img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /><img src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg" /></div>}


                    <div><p>{item.name}</p></div>
                    <div><h3> <CheckCircleIcon/>Free Shipping</h3></div>
                    </div>
             ))}
        </div >
        
        { data.length>0 && <div style={{margin:"auto",marginTop:"50px",marginBottom:"50px"}}>
          <Button  mr="20px" borderRadius="20px" bg="skyblue" disabled={page === 1} onClick={() => handlePageChange(-1)}><ChevronLeftIcon/></Button>
     {page}
      <Button disabled={page === 2} ml="20px" borderRadius="20px" bg="skyblue"  onClick={() => handlePageChange(1)}><ChevronRightIcon /></Button>
      </div> }
    </div>
  )
}

export default CookiesCutter