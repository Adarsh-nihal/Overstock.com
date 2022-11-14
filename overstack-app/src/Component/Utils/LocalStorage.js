// import {  useToast } from '@chakra-ui/react'




function present(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value.name === arr[i].name) {
      return true;
    }
  }
  return false;
}

const saveData = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key)) || [];
  if (!present(data, value)) {
    localStorage.setItem(key, JSON.stringify([...data, value]));
  }
};

const getData = (key) => {
  let cart = JSON.parse(localStorage.getItem(key)) || [];
  return cart;
};


const deleteData=(name,key)=>{
  let data= JSON.parse(localStorage.getItem(key));
    if(data.length===1){
        localStorage.removeItem(key);
        return [] 
    }
  data=data.filter((e)=>{
    return e.name!==name;
  });
  localStorage.setItem(key,JSON.stringify(data));
  return data;
}



const Success=(key)=>{
    localStorage.removeItem(key);
    return [];
}

export { saveData, getData,deleteData,Success };

  