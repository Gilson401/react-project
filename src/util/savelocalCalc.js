export const saveToLocal = (item, object) => {

    const jsonObj = JSON.stringify(object);
    localStorage.setItem(item, jsonObj);
}