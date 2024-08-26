/* DESCRIZIONE DEL GIOCO
Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
LA partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba

# MILESTONE 1
Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il punteggio e scriviamo un messaggio appropriato.

# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà (come le istruzioni di ieri se non già fatto)

# SUPERBONUS
Colorare tutte le celle bomba quando la partita finisce
*/

/* 
1- Recuperiamo gli elementi dal DOM
2- Prepariamo le variabili che ci servono:
    - * Variabile di minimo
    - * Variabile di massimo
3- Mettiamo in ascolto il bottone sul click
    Dentro la gestione eventi:
    -4 Creare un ciclo for:
        - * Creare l'elemento div
        - * Aggiungere la classe square
        - * E facciamo appendchild sulla griglia

*/

// #Funzioni
// Funzione che crea un nodo 
function createNode(type, className, content) {
    const node = document.createElement(type);
    node.className = className;
    node.append(content);
    return node;
}

// Funzione che crea una griglia
function createGrid(rows, cols) {
    const cells = rows * cols;

    for (let i = 1; i <= cells; i++) {
        // Creiamo i div con classe square e la i come contenuto
        const square = createNode('div', 'square', i);
        // Lo agganciamo alla grid
        gridElement.appendChild(square);
        // Mettiamo in ascolto sugli con il click la cella 
        square.addEventListener('click', function () {
            // Stampiamo in console quale cella abbiamo cliccato
            console.log(`Hai cliccato la cella ${i}`);
            // Aggiungo e tolgo all'occorrenza la classe clicked
            square.classList.toggle('clicked');
        })
    }
}

// # Fase di preparazione
// Recuperiamo gli elementi dal DOM
const difficulty = document.getElementById('difficulty');
const button = document.getElementById('cta-btn');
const resetButton = document.getElementById('reset-btn');
const gridElement = document.getElementById('grid');
console.log(difficulty);
console.log(button);
console.log(resetButton);
console.log(gridElement);

let clickCount = false;



// # Fase di gestione eventi
// Mettiamo in ascolto il bottone sugli eventi
button.addEventListener('click', function (e) {
    if (!clickCount) {
        // Recuperiamo l'input della difficoltà
        const difficultyValue = difficulty.value;
        console.log(difficultyValue);

        if (difficultyValue === 'hard') {
            gridElement.classList.add('grid-cols-10');
            createGrid(10, 10);
        } else if (difficultyValue === 'medium') {
            gridElement.classList.add('grid-cols-9');
            createGrid(9, 9)
        } else if (difficultyValue === 'easy') {
            gridElement.classList.add('grid-cols-7');
            createGrid(7, 7)
        }
        clickCount = true;
    } else {
        alert('Devi resettare la pagina per creare una nuova griglia');
        return;
    }
})

resetButton.addEventListener('click', function () {
    location.reload()
})
