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

const removeFromLocalStorage=(id)=>{
    const storeCart =localStorage.getItem('shopping-cart');
    if(storeCart){
        const shoppingCart =JSON.parse(storeCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
        
    } 
}

const getTotalPrice=(products)=>{
    const reducer=(previous,current)=> previous+current.price;
    const total=products.reduce(reducer,0);
    return total;
}

export  {saveDataLocalStorage,removeFromLocalStorage,getTotalPrice as getTotal};
