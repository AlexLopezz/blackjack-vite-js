/**
 *  Esta funcion verifica que el array no estee vacio, ni sea null.
 * @param {Array<String>} array 
 * @returns Si no esta vacio y esta inicializado, TRUE. De lo contrario FALSE. 
 */
export const checkArray= ( array )=> {
    return array!=null || array.length !== 0;
}

export const checkString= ( string ) => {
    return (string != null) || 
           (typeof(string) != undefined) ||
           !(string === '');
}
