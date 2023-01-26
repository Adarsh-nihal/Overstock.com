import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
function PrivateRoute({children}) {
    const isAuth = useSelector((state) => state.isAuth)
    const navigate =useNavigate();


    if(!isAuth){
           
           return <Navigate to="/login"/>;
    }
<<<<<<< HEAD
  return (
     <>
     {children}
     </>
  )
}

=======
function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.isAuth)
  const navigate = useNavigate();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
  return (
     <>
     {children}
     </>
  )
}
<<<<<<< HEAD
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======

>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
export default PrivateRoute