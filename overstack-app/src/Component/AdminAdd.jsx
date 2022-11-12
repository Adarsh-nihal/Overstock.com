import { Button, Input } from '@chakra-ui/react';
import React from 'react';
import "./AdminAdd.css";
const AdminAdd = () => {
    const handleSubmit = () =>{

    }
  return (
    <div className='admin_add'>
        <select name="" id="">
            <option value="">Select</option>
            <option value="Mugs">Mugs</option>
            <option value="Cooking Cutters">Cooking Cutters</option>
            <option value="Air Fryers">Air Fryers</option>
            <option value="Mixers">Mixers</option>
            <option value="Lamps">Lamps</option>
            <option value="Towels">Towels</option>
            <option value="Blankets">Blankets</option>
            <option value="Tree Skirts">Tree Skirts</option>
            <option value="Garlands">Garlands</option>
        </select>
        <div>
            <Input type="text" value placeholder='Product Name'></Input>
            <Input type="url" value placeholder='Enter Image URL'></Input>
            <Input type= "number" value placeholder='Enter The Price'></Input>
        </div>
        <div><Button onClick={handleSubmit}>Submit</Button></div>
    </div>
  )
}

export default AdminAdd