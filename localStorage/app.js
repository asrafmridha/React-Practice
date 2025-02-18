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
    displayItem();
}
const clearAllFromLocalStorage=()=>{
    localStorage.clear();
    displayItem();
}

const displayItem=()=>{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const productContainer=document.getElementById('productContainer');
    productContainer.innerHTML = '';

    for(const [key, value] of Object.entries(cartItems)){
        const li=document.createElement('li');
        li.innerHTML=`${key} : ${value}`;
        productContainer.appendChild(li);  
    }
}

displayItem();