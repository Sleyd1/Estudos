const nome = "Wesley";
const sobrenome = "Silva";

let number = 10;



console.log(`Olá, ${nome} ${sobrenome}, idade ${number.toString()}!`);
//toString() é usado para converter o número em uma string, mas não é necessário aqui, pois a interpolação de strings já faz isso automaticamente.

const lista = ["Felipe", "Wesley", "Silva"];


lista.push("Gustavo");
// push() adiciona um novo elemento ao final do array.

lista.push("Maria");
lista.unshift("João");
// unshift() adiciona um novo elemento ao início do array.

lista.pop();
// pop() remove o último elemento do array.
 lista.sort();
// sort() ordena os elementos do array em ordem alfabética.

const sortedLista = Array.isArray(lista);

console.log(sortedLista);
console.log(lista);

console.log(lista.indexOf("Gustavo"));
// indexOf() retorna o índice do primeiro elemento encontrado no array, ou -1 se não for encontrado.