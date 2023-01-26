import React from 'react';
import "./SideList.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:overstack-app/src/Component/listPage/SideList.jsx
import {FaPen, FaRegBookmark, FaRegHeart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideList = ({handleClick,display}) => {
  const userId = useSelector((state)=>state.user)
  const handle = () =>{
========
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
import { FaPen, FaRegBookmark, FaRegHeart } from "react-icons/fa"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideList = ({ handleClick, display }) => {
  const userId = useSelector((state) => state.user)
  const handle = () => {
<<<<<<< HEAD
>>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d:overstack-app/src/Component/SideList.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
import {FaPen, FaRegBookmark, FaRegHeart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideList = ({handleClick,display}) => {
  const userId = useSelector((state)=>state.user)
  const handle = () =>{
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    handleClick();
  }
  return (
    <div className='list_contain'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:overstack-app/src/Component/listPage/SideList.jsx
        <div className='list_one'>
         <div className='list_one_one'>
          <div className='list_one_two'>O</div>
          <div className='list_one_three' >{display?<h1 style={{marginRight:"120px"}}>{display}</h1>:userId}</div>
         </div>
         <div className='list_one_four' >
          you haven't added a bio <br />
          <Link><u onClick={handle}> let's get started</u></Link>
         </div>
         <div className='list_one_five'>
         <FaPen/><u onClick={handle}> Edit Profile</u>
         </div>
        </div>
        <div className='list_two'>
          <div className='list_two_two'>
          <div className='list_two_one'><FaRegHeart/>Favorites</div>
          <div>0 Items</div>
          </div>
        </div>
        <hr />
        <div className='list_three'>
          <div className='list_three_three'>
          <div className='list_three_one'><FaRegBookmark/> Lists</div>
          <div>0 Items</div>
          </div>
        </div>
========
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
      <div className='list_one'>
        <div className='list_one_one'>
=======
        <div className='list_one'>
         <div className='list_one_one'>
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
          <div className='list_one_two'>O</div>
          <div className='list_one_three' >{display?<h1 style={{marginRight:"120px"}}>{display}</h1>:userId}</div>
         </div>
         <div className='list_one_four' >
          you haven't added a bio <br />
          <Link><u onClick={handle}> let's get started</u></Link>
         </div>
         <div className='list_one_five'>
         <FaPen/><u onClick={handle}> Edit Profile</u>
         </div>
        </div>
        <div className='list_two'>
          <div className='list_two_two'>
          <div className='list_two_one'><FaRegHeart/>Favorites</div>
          <div>0 Items</div>
          </div>
        </div>
        <hr />
        <div className='list_three'>
          <div className='list_three_three'>
          <div className='list_three_one'><FaRegBookmark/> Lists</div>
          <div>0 Items</div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
>>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d:overstack-app/src/Component/SideList.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    </div>
  )
}

export default SideList