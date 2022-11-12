import { Button, Input, useToast } from '@chakra-ui/react';
import React,{useState} from 'react';
import axios from 'axios';
import "./AdminAdd.css";

const AdminAdd = () => {
const[value,setValue]=useState("")
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [image,setUrl]=useState("")


const toast=useToast()




    const handleSubmit = () =>{
      const payload={
         name:name,
         image:image,
         price:price,
         count:2
      }
      axios.post(`http://localhost:8080/${value}`,payload)
      .then((r)=>console.log(r.data))
      .catch((e)=>console.log(e))
      toast({
        title: 'Added',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  return (
    <div style={{ marginTop: "140px"}}>
      <h1 style={{fontWeight:"700",fontSize:"30px",fontFamily:"sans-serif",textAlign:"center"}}>Add Products</h1>
    <div className='admin_add'>
        <select value={value}  onChange={(e)=>setValue(e.target.value)} style={{width:"100%",padding:"6px",fontSize:"15px"}} >
            <option value="">Select</option>
            <option value="mugs">Mugs</option>
            <option value="cookingCutters">Cooking Cutters</option>
            <option value="fryers">Air Fryers</option>
            <option value="mixers">Mixers</option>
            <option value="lamps">Lamps</option>
            <option value="towels">Towels</option>
            <option value="blankets">Blankets</option>
            <option value="tree">Tree Skirts</option>
            <option value="garland">Garlands</option>
        </select>
        <div >
            <Input value={name}  onChange={(e)=>setName(e.target.value)} mt="10px" type="text"  placeholder='product name'></Input>
            <Input value={image}  onChange={(e)=>setUrl(e.target.value)} mt="10px" type="url"  placeholder='enter image URL'></Input>
            <Input value={price}  onChange={(e)=>setPrice(e.target.value)} mt="10px" type= "number"  placeholder='enter the price'></Input>
        </div>
        <div ><Button mt="10px" ml="116px" bg="red" color="white"  onClick={handleSubmit}>Submit</Button></div>
    </div>
    </div>
  )
}

export default AdminAdd