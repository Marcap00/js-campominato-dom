// # NUMERO RANDOM
/**
 * % Genera un numero random tra un minimo e un massimo (max incluso o no)
 * @param {number} min Minimo numero che può essere generato (default: 1)
 * @param {number} max Massimo numero che può essere generato (default: 100)
 * @param {boolean} isMaxIncluded Se il massimo è incluso o no
 * @returns {Nan|null|number} Numero casuale o null o NaN
 */
function getRandomNumber(min = 1, max = 100, isMaxIncluded = true) {
    if (isNaN(min) || isNaN(max)) {
        console.error('min e max devono essere numeri');
        return NaN;
    }

    if (min >= max) {
        console.error('min deve essere inferiore al max');
        return null;
    }

    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}