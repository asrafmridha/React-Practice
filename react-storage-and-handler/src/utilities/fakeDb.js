// use localStorage to save Data  
const saveDataLocalStorage =(id)=>{
    // For Object Wise Save With Local Storage 
    let shoppingCart={};

    const storeCart =localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart=JSON.parse(storeCart);
    }else{
        shoppingCart={};
    }

    const quantity=shoppingCart[id];
    if(quantity){
        const newQuantity=quantity+1;
        shoppingCart[id]=newQuantity;
    }else{
        shoppingCart[id]=1;
    }

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

    //For Single storage

    // if(localStorage.getItem(id) !=null){
    //     const newQuantity=parseInt(localStorage.getItem(id))+1;
    //     localStorage.setItem(id,newQuantity);
    // }else{
  
    //     localStorage.setItem(id,1);
    // }
    
}

export default saveDataLocalStorage;
