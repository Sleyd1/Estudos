const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

//map() cria um novo array com os resultados da chamada da função fornecida em cada elemento do array original.
console.log(doubledNumbers); 

const ages = [15, 22, 18, 30, 25];

const adults = ages.filter(function(age) {
    return age % 2 == 0;
});
// filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
console.log(adults);

const sumogages = ages.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// reduce() aplica uma função contra um acumulador e cada elemento do array (da esquerda para direita) para reduzi-lo a um único valor.
console.log(sumogages);