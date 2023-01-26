import React from 'react'
import MainList from './MainList'
const ListCont = React.createContext()
const ListContext = () => {
<<<<<<< HEAD
<<<<<<<< HEAD:overstack-app/src/Component/listPage/ListContext.jsx
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
    }
  }
  const handleCancel = () => {
    setEdit2(false);
  }
  return (
    <ListCont.Provider >
      {props.children}
<<<<<<< HEAD
>>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d:overstack-app/src/Component/ListContext.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
    </ListCont.Provider>
  )
}

export default ListContext