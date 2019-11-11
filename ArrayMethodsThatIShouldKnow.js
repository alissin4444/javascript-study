// forEach faz com que você consiga percorrer um array
const arr = [1, 2, 3, 4, 5, 6];

  arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
  });

-----------------------------------------------------------------------------------
// includes permite você checar se existe existe um elemento no array baseado em seu valor
const arr = [1, 2, 3, 4, 5, 6];

  arr.includes(2); // output: true
  arr.includes(7); // output: false
  
-----------------------------------------------------------------------------------
// filter eu sei que esse método está em meu arquivo de javascript sobre como retirar elementos de um array, mas com essa short sytax tudo se torna mais fácil
 const arr = [1, 2, 3, 4, 5, 6];

  // item(s) greater than 3
  const filtered = arr.filter(num => num > 3);
  console.log(filtered); // output: [4, 5, 6]

  console.log(arr); // output: [1, 2, 3, 4, 5, 6]

-----------------------------------------------------------------------------------
// map é um método que cria um novo array e para cada index desse array, tu pode fazer o que tu quiser
const arr = [1, 2, 3, 4, 5, 6];

  // add one to every element
  const oneAdded = arr.map(num => num + 1);
  console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

  console.log(arr); // output: [1, 2, 3, 4, 5, 6]

  -----------------------------------------------------------------------------------
  // reduce irá percorrer um array da esquerda para direita e irá transforma-lo em um único valor
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
  
  -----------------------------------------------------------------------------------
  // O método some irá fazer uma condicional com o último elemento de um array. Caso ele passe na condicional, a função retornará true. Caso contrário, retornará false
  const arr = [1, 2, 3, 4, 5, 6];

  // at least one element is greater than 4?
  const largeNum = arr.some(num => num > 4);
  console.log(largeNum); // output: true

  // at least one element is less than or equal to 0?
  const smallNum = arr.some(num => num <= 0);
  console.log(smallNum); // output: false
  
  -----------------------------------------------------------------------------------
  // every irá verificar se TODOS os elementos passam em uma condição. Se passar, retornará true. Caso contrário, retornará false
  const arr = [1, 2, 3, 4, 5, 6];

  // all elements are greater than 4
  const greaterFour = arr.every(num => num > 4);
  console.log(greaterFour); // output: false

  // all elements are less than 10
  const lessTen = arr.every(num => num < 10);
  console.log(lessTen); // output: true
  
  -----------------------------------------------------------------------------------
  // sort method. Ele irá organizar o array de forma anscedente ou descendente
  const arr = [1, 2, 3, 4, 5, 6];
  const alpha = ['e', 'a', 'c', 'u', 'y'];

  // sort in descending order
  descOrder = arr.sort((a, b) => a > b ? -1 : 1);
  console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

  // sort in ascending order
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
  
  -----------------------------------------------------------------------------------
  // Array.from irá retornar um novo array com tudo separado KKK. Mano, não entendi muito bem, mas ok
  const name = 'frugence';
  const nameArray = Array.from(name);

  console.log(name); // output: frugence
  console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
  
  // Além disso tu pode trabalhar com a DOM. Caralho, ele é MUITO interessante akakakak
   // I assume that you have created unorder list of items in our html file.

  const lis = document.querySelectorAll('li');
  const lisArray = Array.from(document.querySelectorAll('li'));

  // is true array?
  console.log(Array.isArray(lis)); // output: false
  console.log(Array.isArray(lisArray));  // output: true
  
  -----------------------------------------------------------------------------------
  // Array.of irá adicionar um todos os elementos para dentro do array. Bem, eu não vi tanta utilidade nisso, mas OK.
  const nums = Array.of(1, 2, 3, 4, 5, 6);
  console.log(nums); // output: [1, 2, 3, 4, 5, 6]
  
  -----------------------------------------------------------------------------------
  // while loop executará x até a condição se tornar falsa
  var sum = 0;
  var number = 1;
  while (number <= 50) {  // -- condition
    sum += number;        // -- body
    number++;             // -- updater
  }
  alert("Sum = " + sum);  // => Sum = 1275
  
  -----------------------------------------------------------------------------------
  // for irá fazer o mesmo que while
  var sum = 0;
  for (var i = 1; i <= 50; i++) {
     sum = sum + i;
  }
  alert("Sum = " + sum);    // => Sum = 1275
  
  -----------------------------------------------------------------------------------
  

  
  
  
  
  
  
  
  
