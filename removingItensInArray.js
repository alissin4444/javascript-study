// O método lenght irá retornar um array com o tamanho que eu defini
var ar = [1, 2, 3, 4, 5, 6];
ar.length = 4; // set length to remove elements
console.log( ar ); //  [1, 2, 3, 4]

// O método pop irá retirar o último índice do array
var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log( ar ); // [1, 2, 3, 4, 5]

// O método shift irá remover o primeiro elemento de um array
var ar = ['zero', 'one', 'two', 'three'];
ar.shift(); // returns "zero"
console.log( ar ); // ["one", "two", "three"]

// O método splice irá retirar o um ou mais elementos do array. O primeiro argumento remete à qual indice ele deve começar, o segundo argumento à quantos índices apartir do que ele começou, e o terceiro (opcional) remete à quais elementos ele quer colocar nessa posição do array (primeiro índice)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2,2);

/*
removed === [3, 4]
arr === [1, 2, 5, 6, 7, 8, 9, 0]
*/

["bar", "baz", "foo", "qux"]

list.splice(0, 2) 
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].

// Utilizando o splice para remover itens do array pelo value
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for( var i = 0; i < arr.length; i++){ 
   if ( arr[i] === 5) {
     arr.splice(i, 1); 
   }
}

//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

/* Another way you can use this method to remove multiply itens from the array */
var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];

for( var i = 0; i < arr.length; i++){ 
   if ( arr[i] === 5) {
     arr.splice(i, 1); 
     i--;
   }
}

//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

// This method filter return a new array with filtered values. The first args is the value that you want of the array. The second arg is the index of the array and the thirt args of this callback function is the original arary
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function(value, index, arr){

    return value > 5;

});

//filtered => [6, 7, 8, 9]
//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Delete method delets a element from the memory of our variable
var ar = [1, 2, 3, 4, 5, 6];
delete ar[4]; // delete element with index 4
console.log( ar ); // [1, 2, 3, 4, undefined, 6]
alert( ar ); // 1,2,3,4,,6

// Clear all elements from the array
var ar = [1, 2, 3, 4, 5, 6];

console.log(ar); // Output [1, 2, 3, 4, 5, 6]

ar.splice(0, ar.length);

console.log(ar); // Output []
