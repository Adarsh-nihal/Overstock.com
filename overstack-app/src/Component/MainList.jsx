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
  const handleCancel = () =>{
      setEdit2(false);
  }

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
        <Input type="text" placeholder='Lastname'/>
        <Input type="text" value={display} onChange={(e)=>setDisplay(e.target.value)} placeholder='Displayname'/>
        <Button onClick={handleCancel}>Canel</Button> <Button onClick={handleSave}>Save</Button>
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
