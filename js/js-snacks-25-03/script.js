function keyValueSum(arr, key) {

    var sum = 0;
  
    for (i = 0; i < arr.length; i++) {
  
        var arrItem = arr[i];
        var itemValue = parseInt(arrItem[key]);
  
        sum += itemValue;
    }
  
    return sum;
  }
  
  function NewZucc(){
  
    var zucc = {
  
        'nome' : 'zucc' + getRnd(1, 100),
        'peso' : getRnd(1, 50),
        'lung' : getRnd(1, 30)
  
    }
  
    return zucc;
  }
  
  function splitter(min, max, array) {
  
    var newArr = [];
  
    for (i = min; i <= max; i++) {
  
        var elem = array[i]
        newArr.push(elem);
    }
  
    return newArr;
  }
  
  // Scrivi una funzione che accetti tre argomenti:
  // un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b".
  
  function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var indMin = 3;
    var indMax = 7;
    var splitted = splitter(indMin, indMax, arr);
    
    console.log(splitted);
  }
  
  // Scrivi una funzione che accetti una stringa come
  // argomento e la ritorni girata (es. Ciao -> oaiC)
  
  function strReverse(str){
  
    return str.split('').reverse( ).join('');
  }
  
  // Crea 10 oggetti che rappresentano una zucchina.
  // Dividi in due array separati le zucchine che misurano
  // meno o più di 15cm.
  // Infine stampa separatamente quanto pesano i due gruppi
  // di zucchine
  
  function ZuccBigSmall() {
  
    var big = [];
    var small = [];
  
    for (i = 0; i < 10; i++) {
  
        var zucc = NewZucc();
  
        if (zucc['lung'] < 15) {
  
          small.push(zucc);
        } else {
  
            big.push(zucc);
         }
    }
  
    console.log(big, small);
  
    console.log(keyValueSum(big, ['peso']));
    console.log(keyValueSum(small, ['peso']));
  }
  
  // Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
  // prendendo alternativamente gli elementi da uno e dall'altro
  // es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
  
  function arrFuse() {
  
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3];
  
    var arrFuse = [];
  
    for (i=0;i<arr1.length;i++) {
  
        var arrItem1 = arr1[i];
        var arrItem2 = arr2[i];
  
        arrFuse.push(arrItem1);
        arrFuse.push(arrItem2);
    } 
  
    console.log(arrFuse);
  }
  
  // Crea un array di 10 oggetti che rappresentano una
  // zucchina, indicando per ognuna varietà, peso e lunghezza.
  // Calcola quanto pesano tutte le zucchine.
  
  function ZuccKeyValueSum() {
  
    var zuccs = [
        {'nome' : 'zucc0', 'peso' : '1', 'lung' : '4'},
        {'nome' : 'zucc1', 'peso' : '5', 'lung' : '3'},
        {'nome' : 'zucc2', 'peso' : '6', 'lung' : '1'},
        {'nome' : 'zucc3', 'peso' : '4', 'lung' : '4'},
        {'nome' : 'zucc4', 'peso' : '1', 'lung' : '5'},
        {'nome' : 'zucc5', 'peso' : '2', 'lung' : '7'},
        {'nome' : 'zucc6', 'peso' : '7', 'lung' : '2'},
        {'nome' : 'zucc7', 'peso' : '2', 'lung' : '3'},
        {'nome' : 'zucc8', 'peso' : '4', 'lung' : '8'},
        {'nome' : 'zucc9', 'peso' : '9', 'lung' : '5'}
    ];
  
    console.log(keyValueSum(zuccs, ['peso']));
  }
  
  function init() {
  
    // ZuccKeyValueSum();
    // console.log(strReverse('string')); 
    // ZuccBigSmall();
    // arrFuse();
    // esArraySplitter();
  }
  
  $(document).ready(init);