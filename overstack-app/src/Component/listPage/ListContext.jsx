import React from 'react'
import MainList from './MainList'
const ListCont = React.createContext()
const ListContext = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:overstack-app/src/Component/listPage/ListContext.jsx
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    const [display,setDisplay] = useState();
    const [edit2,setEdit2] = useState(true);
    const handleSave = () =>{
        if(display){
          setEdit2(false);
          handleDisplay(display);
        }else{
          alert('There is nothing in the display name');
          return
        }
    }
    const handleCancel = () =>{
        setEdit2(false);
<<<<<<< HEAD
    }
  return (
    <ListCont.Provider >
     {props.children}
========
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
  const [display, setDisplay] = useState();
  const [edit2, setEdit2] = useState(true);
  const handleSave = () => {
    if (display) {
      setEdit2(false);
      handleDisplay(display);
    } else {
      alert('There is nothing in the display name');
      return
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    }
  return (
    <ListCont.Provider >
<<<<<<< HEAD
      {props.children}
<<<<<<< HEAD
>>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d:overstack-app/src/Component/ListContext.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
     {props.children}
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
    </ListCont.Provider>
  )
}

export default ListContext