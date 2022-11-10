import React from 'react';
import MainList from '../Component/MainList';
import SideList from '../Component/SideList';
import "./ListPage.css";
const ListPage = () => {
  return (
    <div className='listpage_one'>
        <SideList/>
        <MainList/>
    </div>
  )
}

export default ListPage