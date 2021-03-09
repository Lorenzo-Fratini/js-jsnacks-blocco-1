// Generatore di "nomi cognomi" casuali: prendendo una
// lista di nomi e una lista di cognomi, Gatsby vuole
// generare una falsa lista di invitati.

var names = ['Michele', 'Fabio', 'Roberto'];
var lastnames = ['Forghieri', 'Papagni', 'Marazzini'];
var fullnames = [];

for (i=0;i<5;i++){
  var rndName = Math.floor(Math.random() * 3);
  var rndLast = Math.floor(Math.random() * 3);
  var fullname = names[rndName] + ' ' + lastnames[rndLast];
  fullnames.push(fullname);
}

console.log(fullnames);



// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all'array che ha meno elementi fino a
// quando ne avrà tanti quanti l'altro.

//sol 1
// var arr1 = [ 5 ];
// var arr2 = [ 15, 2, 7, 5, 7 ];
//
// if (arr1.length == arr2.length) {
//   console.log("Sono uguali");
//   var short = arr1;
//   var long = arr2;
// } else if (arr1.length > arr2.length) {
//     var short = arr2;
//     var long = arr1;
// } else {
//     var short = arr1;
//     var long = arr2;
// }
//
// var arrDiff = long.length - short.length;
// for (var i=0;i<arrDiff;i++) {
//   var rndElem = Math.floor(Math.random() * 9) + 1;
//   short.push(rndElem);
// }
//
// console.log(short, long);

// sol 2
// var arr1 = [ 5 ];
// var arr2 = [ 15, 2, 7, 5, 7 ];
//
// if (arr1.length == arr2.length){
//   console.log('sono uguali');
// }
// else if (arr1.length < arr2.length){
//   while (arr1.length < arr2.length) {
//     var rndElem = Math.floor(Math.random() * 9);
//     arr1.push(rndElem);
//   }
// } else if (arr1.length > arr2.length){
//   while (arr1.length > arr2.length){
//     var rndElem = Math.floor(Math.random() * 9);
//     arr2.push(rndElem)
//   }
// }
//
// console.log(arr1);
// console.log(arr2);



// Chiedere all'utente un valore limite, poi richiedere all'utente una serie di valori
// finche' la somma non supera il valore limite e stampare i valori forniti dall'utente

// var max = parseInt(prompt('Dammi un valore massimo: '));
// console.log('max ' + max);
// var sum = 0;
//
// while (sum < max){
//   var value = parseInt(prompt('Dammi un valore: '));
//   sum += value;
//
//   console.log(value);
// }
//
// console.log('somma finale: ' + sum);


// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l'altro di verde.
// Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari
// e in verde i numeri pari.

// var numbers = [16, 15, 20, 1, 3, 22, 35, 44, 48, 77];
//
// var even = document.getElementById('green');
// var odd = document.getElementById('red');
//
// for (i=0;i<numbers.length;i++){
//   if (numbers[i] % 2 == 0){
//     even.innerHTML += numbers[i] + '<br>';
//   } else {
//     odd.innerHTML += numbers[i] + '<br>';
//   }
// }