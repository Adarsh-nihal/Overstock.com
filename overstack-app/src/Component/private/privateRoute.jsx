import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

<<<<<<< HEAD
function PrivateRoute({children}) {
    const isAuth = useSelector((state) => state.isAuth)
    const navigate =useNavigate();


    if(!isAuth){
           
           return <Navigate to="/login"/>;
    }
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
  return (
    <>
      {children}
    </>
  )
}
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
export default PrivateRoute