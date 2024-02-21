// use localStorage to save Data  
const saveDataLocalStorage =(id)=>{
    if(localStorage.getItem(id) !=null){
        const newQuantity=parseInt(localStorage.getItem(id))+1;
        localStorage.setItem(id,newQuantity);
    }else{
        localStorage.setItem(id,1);
    }
    
}

export default saveDataLocalStorage;
