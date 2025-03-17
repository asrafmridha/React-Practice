const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    try {
        const parsedData = storeListStr ? JSON.parse(storeListStr) : [];
        return Array.isArray(parsedData) ? parsedData : []; 
    } catch (error) {
        console.error("Error parsing read-list from localStorage:", error);
        return [];
    }
};

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if (Array.isArray(storedList) && storedList.includes(id)) {
        alert("Already Read");
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
    }
};

const getStoreWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    try {
        const parsedData = wishListStr ? JSON.parse(wishListStr) : [];
        return Array.isArray(parsedData) ? parsedData : []; 
    } catch (error) {
        console.error("Error parsing wishList from localStorage:", error);
        return [];
    }
};

const addToStoreWishList = (id) => {
    const storedList = getStoreWishList();
    if (Array.isArray(storedList) && storedList.includes(id)) {
        alert("Already WishList");
    } else {
        storedList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedList));
    }
};

export { addToStoreReadList,addToStoreWishList,getStoreReadList,getStoreWishList };