import './validate.js';
import {checkArray} from './validate.js';


/**
 *  Esta funcion retorna una nueva carta del deck.
 * @param {Array<String>} deck 
 * @returns una carta del deck.
 */
export const getCard = ( deck ) => {
    if ( checkArray(deck) ) {
        return deck.pop();
    }
    throw 'No hay cartas en el deck';
}