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

export { addToStoreReadList };