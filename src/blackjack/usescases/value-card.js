import { checkString } from "./validate";

/**
 *  Esta funcion me indica el valor de una carta de la baraja.
 * @param {String} carta 
 * @returns el valor(en numero) de la carta de la baraja. 
 */
export const valueCard = ( carta ) => {
    if (checkString(carta)){
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }else {
        throw new Error('La carta ingresada debe tener un valor.')
    }
}