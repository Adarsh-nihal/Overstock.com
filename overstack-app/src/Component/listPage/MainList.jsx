<<<<<<< HEAD
<<<<<<<< HEAD:overstack-app/src/Component/listPage/MainList.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
import React, { useEffect } from "react";
import "./MainList.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
const MainList = ({edit,handleDisplay}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let listArr = ["FAVORITES", "SAVE FOR LATTER","fiusaoh"];
  const btnRef = React.useRef();
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
 
=======
const MainList = ({ edit, handleDisplay }) => {
=======
const MainList = ({edit,handleDisplay}) => {
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
  const { isOpen, onOpen, onClose } = useDisclosure();
  let listArr = ["FAVORITES", "SAVE FOR LATTER","fiusaoh"];
  const btnRef = React.useRef();
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
<<<<<<< HEAD

>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
 
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11

  return (
    <div>
      <div className="main_one">
        <h2>My Lists</h2>{" "}
        <button ref={btnRef} onClick={onOpen}>
          Create New List
        </button>
      </div>
      <hr />
      {edit && edit2 && <div>
<<<<<<< HEAD
<<<<<<< HEAD
    
        <Input w="50%" type="text" value={display} onChange={(e)=>setDisplay(e.target.value)} placeholder='Displayname'/>
        <Button onClick={handleSave}>Save</Button>
      </div>}
      {!edit && edit2 && <div className="main_list_m">
      {listArr.map((item) => {
        return (
          <div className="main_list">
            <div className="like_product">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>{item}</div>
          </div>
        );
      })}
=======

        <Input w="50%" type="text" value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
=======
    
        <Input w="50%" type="text" value={display} onChange={(e)=>setDisplay(e.target.value)} placeholder='Displayname'/>
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
        <Button onClick={handleSave}>Save</Button>
      </div>}
      {!edit && edit2 && <div className="main_list_m">
      {listArr.map((item) => {
        return (
          <div className="main_list">
            <div className="like_product">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
<<<<<<< HEAD
          );
        })}
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
            <div>{item}</div>
          </div>
        );
      })}
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
      </div>}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create a New List</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainList;
<<<<<<< HEAD
========

import React, { useEffect } from "react";
import "./MainList.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
const MainList = ({ edit, handleDisplay }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let listArr = ["FAVORITES", "SAVE FOR LATTER"];
  const btnRef = React.useRef();
  const [display, setDisplay] = useState();
  const [edit2, setEdit2] = useState(true);
  const [list, setList] = useState('')
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
  const handleSaveList = () => {
    onClose();
    if (list) {
      listArr = [...listArr, list]
      console.log(listArr)
    }
  }
  useEffect(() => {

  }, [listArr]);
  return (
    <div>
      <div className="main_one">
        <h2>My Lists</h2>{" "}
        <button ref={btnRef} onClick={onOpen}>
          Create New List
        </button>
      </div>
      <hr />
      {edit && edit2 && <div>
        <Input type="text" placeholder='Firstname' />
        <Input type="text" placeholder='Lastname' />
        <Input type="text" value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
        <Button onClick={handleCancel}>Canel</Button> <Button onClick={handleSave}>Save</Button>
      </div>}
      {!edit && edit2 && <div className="main_list_m">
        {listArr.map((item, index) => {
          return (
            <div key={index} className="main_list">
              <div className="like_product">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>{item}</div>
            </div>
          );
        })}
      </div>}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create a New List</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." value={list} onChange={(e) => setList(e.target.value)} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSaveList}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainList;
>>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d:overstack-app/src/Component/MainList.jsx
=======
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
