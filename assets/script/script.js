
function risultato(numero1, numero2){
    let div = numero1 / numero2;
    let div1 = numero1 * numero2;
    document.querySelector("h1").innerText = `Questo èil risultato della divisione: ${div} e il risultato della moltiplicazione è ${div1}`;
    console.log(div);
}

risultato(10, 5);

//Spread Operator: permettere di effetuare un clone di un oggetto

const cane1 = {
    zampe: 5,
    verso: "bow",
    nome: "Antonio",
    padrone: "David"


}

const cane2 = {
    ...cane1,
    nome: "Pavlo",
    verso: "azz",
    razza: "Pastore"

}
console.log(cane2);

const persona = {
    nome: "Pasha",
    cognome: "Pastushenko",
    eta: 19
}

const {cognome} = persona;

console.log(cognome);

const cordinate = [41.3524, 2.4252, "Pavlo"];
const [cordinata1, cordinata2, ciao] = cordinate;
console.log(`ciao questo è un paragrafo ${cordinata1}`);

const stringa = "CiAo questo è il mio messaggio "
console.log(stringa.startsWith("CiAo")) //case sensitive
console.log(stringa.endsWith("messaggio "))
console.log(stringa.includes("Q"))

//lista variabili 

const nome1 = "Pasha";
const nome2 = "Antonio";
const nome3 = "Alexandru";
const nome4 = "Francesco";
const nome5 = "Enrico";
//array 

const nomi =["Pasha", "Antonio", "Alexandru", "Francesco", "Enrico"]
console.log(`Nome 1: ${nomi[0]} e Nome 2: ${nomi[2]}`);

console.log(nomi.sort());


// pop metodo che serve per eliminare l'ultimo elemento del nostro array
// shift metodo che serve per eliminare il primo elemento del nostro array
// push metodo che aggiunge un elemento alla fine del nostro array
// unshift metodo che aggiunge un elemento al inizio del nostro array

const nomiEliminati = [nomi.pop(), nomi.shift()];

console.log(nomiEliminati);

console.log(nomi);

//splice è un metodo che serve 

const cognomi = ["Pastushenko", "Nacccari" ,"Amoruso", "Cerotto", "Ifrim"];
console.log(cognomi);
const cognomiModificato = cognomi.splice(1, 5);
console.log(cognomiModificato);
console.log(cognomi);


const unito = nomi.concat(cognomi);
console.log(unito);

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri,
   selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante
   in maiuscolo e mostrala con un console.log().
*/

let nome = "Igor";
let Cognome = "Miti";
let nomeTagliato = nome.slice(0, 4);
let cognomeTagliato = Cognome.slice(Cognome.length -4);
let nomeCognome = nomeTagliato.concat(cognomeTagliato);
console.log(nomeCognome.toUpperCase());


console.log("ForEach");

const arrayForEach = [22, 16, 17, 92];

function aggiungi() {
for (let i = 0; i < arrayForEach.length; i++){
    arrayForEach[i] = arrayForEach[i] + 4;

}
}
aggiungi();
console.log(arrayForEach);

const arrayForEach2 = [22, 16, 17, 92];

arrayForEach2.forEach(function(ciao){
   // console.log(ciao + 4);
});

arrayForEach2.forEach(ciao => (ciao + 4));
console.log(arrayForEach2);
console.log("");

console.log("Map");

const arrayMap = [15, 12, 94, 24, 17];
const quadrati = arrayMap.map((ciao1) =>(ciao1 * ciao1));
console.log(quadrati);


let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]
console.log("Filter");
const numeriDaFiltrare = [21, 64, 16, 89, 55];
const numeriFiltrati = numeriDaFiltrare.filter(Antonio => (Antonio % 5) !== 0);
console.log(numeriFiltrati);

console.log("Reduce");

const numeriReduce = [3 , 5, 10];

const totaleNumeriReduce = numeriReduce.reduce((totale, valoreCorrente) => totale * valoreCorrente, 1)
console.log(totaleNumeriReduce);

console.log("Every"); 

const numeriEvery = [21, 64, 16, 89, 55];
const numeriVerificati = numeriEvery.every(Antonio => Antonio > 15);
console.log(numeriVerificati);

console.log("Some");

const numeriSome = [21, 64, 16, 89, 55];
const numeriSomeVerificati = numeriSome.some(Antonio => Antonio < 17);
console.log(numeriSomeVerificati);

