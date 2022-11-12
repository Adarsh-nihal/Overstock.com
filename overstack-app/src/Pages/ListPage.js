import React, { useState } from 'react';
import MainList from '../Component/MainList';
import SideList from '../Component/SideList';
import "./ListPage.css";
const ListPage = () => {
  const [edit,setEdit] =useState(false);
  const [display,setDisplay] = useState('');
  const handleClick = () =>{
    setEdit(true);
  }
  const handleDisplay = (text) =>{
        setDisplay(text);
  }
  return (
    <div className='listpage_one'>
        <SideList handleClick={handleClick} display = {display}/>
        <MainList edit={edit} handleDisplay={handleDisplay}/>
    </div>
  )
}

export default ListPage