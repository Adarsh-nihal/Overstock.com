// import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { Navigate} from 'react-router-dom';

function AdminPrivate({children}) {
   
    const {isAdmin}=useSelector((state)=>state);
    if(!isAdmin){
        return <Navigate to="/login"/>
    }

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
    </>
  )
}

export default AdminPrivate