/**
 *  Esta funcion crea un elemento HTML en forma de carta.
 * @param {String} carta sacada de la baraja.
 * @returns {HTMLElement} una carta creada, lista para mostrar.
 */
export const createCard = (carta) => {
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
}