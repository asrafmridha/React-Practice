const addToLocalStorage =()=>{
    const productName=document.getElementById("productName").value;
    const productQuantity=document.getElementById("productQuantity").value;
    addProductToCart(productName,productQuantity)
}

const getStoredCart=()=>{
    const existCart=localStorage.getItem('cart');
    cart ={};
    if(existCart){
        cart=JSON.parse(existCart);
    }
    return cart;

}

const addProductToCart=(productName,productQuantity)=>{
    const cart =getStoredCart();
    cart[productName] =productQuantity;

    //object to String
    localStorage.setItem('cart', JSON.stringify(cart));
}