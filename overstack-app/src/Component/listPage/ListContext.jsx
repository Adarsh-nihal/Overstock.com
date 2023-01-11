import React from 'react'
import MainList from './MainList'
const ListCont = React.createContext()
const ListContext = () => {
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
    </ListCont.Provider>
  )
}

export default ListContext