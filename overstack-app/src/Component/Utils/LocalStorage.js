


const saveData=(key,value)=>{
    let data=JSON.parse(localStorage.getItem(key))||[]
    localStorage.setItem(key,JSON.stringify([...data,value]))
    }

    const getData=(key)=>{
        let cart =JSON.parse(localStorage.getItem(key))||[]
return cart
    }
    
    export {saveData,getData}
