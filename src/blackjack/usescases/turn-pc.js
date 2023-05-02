import { getCard } from "./get-card.js";
import { valueCard } from "./value-card.js";
import { createCard } from "./create-card.js";

/**
 * 
 * @param {Number} puntosMinimos que la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento para mostrar puntos.
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<String>} deck la baraja de cartas.
 */
export const turnPC = ( puntosMinimos, puntosHTML , divCartasComputadora, deck = [] ) => {
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios.');
    if(!puntosHTML) throw new Error('Argumentos HTML es necesario.');

    let puntosComputadora = 0;
    do {
        const carta = getCard(deck);
        puntosComputadora = puntosComputadora + valueCard( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        let imgCarta = createCard( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}