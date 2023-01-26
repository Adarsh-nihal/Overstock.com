// import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
import { Navigate} from 'react-router-dom';

function AdminPrivate({children}) {
   
    const {isAdmin}=useSelector((state)=>state);
    if(!isAdmin){
        return <Navigate to="/login"/>
    }

<<<<<<< HEAD
  return (
    <>
    {children}
=======
import { Navigate } from 'react-router-dom';
function AdminPrivate({ children }) {
  const { isAdmin } = useSelector((state) => state);
  if (!isAdmin) {
    return <Navigate to="/login" />
  }
  return (
    <>
      {children}
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
  return (
    <>
    {children}
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    </>
  )
}

export default AdminPrivate