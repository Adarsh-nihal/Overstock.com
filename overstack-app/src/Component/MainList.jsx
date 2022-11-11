import React from "react";
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
const MainList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let listArr = ["FAVORITES", "SAVE FOR LATTER","fiusaoh"];
  const btnRef = React.useRef();
  return (
    <div>
      <div className="main_one">
        <h2>My Lists</h2>{" "}
        <button ref={btnRef} onClick={onOpen}>
          Create New List
        </button>
      </div>
      <hr />
      {/* <div>
        <input type="text" placeholder='Firstname' />
        <input type="text" placeholder='Lastname'/>
        <input type="text" placeholder='Displayname'/>
        <button>Canel</button> <button>Save</button>
      </div> */}
      <div className="main_list_m">
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
      </div>

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
