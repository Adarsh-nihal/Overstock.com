// import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
function AdminPrivate({ children }) {
  const { isAdmin } = useSelector((state) => state);
  if (!isAdmin) {
    return <Navigate to="/login" />
  }
  return (
    <>
      {children}
    </>
  )
}

export default AdminPrivate