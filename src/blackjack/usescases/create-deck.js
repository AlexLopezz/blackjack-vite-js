import _ from 'underscore';
import { checkArray } from './validate';

/**
 *  Esta funcion crea una nueva baraja con cartas.
 * @param {Array<String>} typeCards Ej: ['C','D','H','S']
 * @param {Array<String>} specialCards Ej: ['A','J','Q','K']
 * @returns {Array<String>} una baraja con cartas.
 */
export const createDeck = (typeCards, specialCards) => {
    if( checkArray(typeCards) && checkArray(specialCards) ){
        let deck = [];

        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of typeCards) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of typeCards ) {
            for( let esp of specialCards ) {
                deck.push( esp + tipo);
            }
        }
        // console.log( deck );
        deck = _.shuffle( deck );

        return deck;
    }else{
        throw new Error('Tipos de carta y/o cartas especiales, son obligatorios.');
    }
}
