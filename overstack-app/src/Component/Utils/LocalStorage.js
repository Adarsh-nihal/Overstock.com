


const saveData=(key,value)=>{
    let data=JSON.parse(localStorage.getItem(key))||[]
    localStorage.setItem(key,JSON.stringify([...data,value]))
    }
    
    export {saveData}
