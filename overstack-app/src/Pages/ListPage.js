import React from 'react';
import MainList from '../Component/MainList';
import SideList from '../Component/SideList';
import "./ListPage.css";
const ListPage = () => {
  const handleClick = () =>{
    console.log("Ratikanta0");
  }
  return (
    <div className='listpage_one'>
        <SideList handleClick={handleClick}/>
        <MainList/>
    </div>
  )
}

export default ListPage