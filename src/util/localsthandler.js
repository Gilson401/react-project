/**(tipo: SAVE GET ou DELETE, item:nome do campo, object) */
export const localStoragem = (tipo, item, object = []) => {
    let temp = ''

    if (tipo === "SAVE") {
        const jsonObj = JSON.stringify(object);
        localStorage.setItem(item, jsonObj);
    } else if (tipo === "GET") {
        temp = localStorage.getItem(item);

    } else if (tipo === "DELETE") {
        localStorage.removeItem(item);
    }

    // localStorage.
    return temp

}

/**Administra o item [] VISITADAS */
export const adicionaLST = (a, b="") => {
    
    if (a && b) {
        localStoragem("SAVE", "VISITADAS", [a, b])
    } else if (a && !b) {        
        let  atual= []
        
        const vis =  JSON.parse(localStoragem('GET', 'VISITADAS'))
        
        if (vis){
            atual = [...vis,""]
        }else{
            atual = ["", ""]           
        }
        if(atual !== atual[0])    localStoragem("SAVE", "VISITADAS", [a, atual[0]])
    }
}
