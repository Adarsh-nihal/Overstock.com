// import {  useToast } from '@chakra-ui/react'

function present(arr,value){
    for(var i=0;i<arr.length;i++){
        if(value.name===arr[i].name){
            return true;
        }
        
    }
    return false;
}


function present(arr,value){
    for(var i=0;i<arr.length;i++){
        if(value.name===arr[i].name){
            return true;
        }
        
    }
    return false;
}


const saveData=(key,value)=>{
    
    let data=JSON.parse(localStorage.getItem(key))||[]
//     console.log(present(data,value));
    if(!present(data,value)){
        localStorage.setItem(key,JSON.stringify([...data,value]))
     
    }
    

    // localStorage.setItem(key,JSON.stringify([...data,value]))
    }

    const getData=(key)=>{
        let cart =JSON.parse(localStorage.getItem(key))||[]
return cart
    }
    
    export {saveData,getData}
