//loops

const listaDeTarefas = [
  "Estudar JavaScript", "estudar HTML", "estudar CSS",
  "Fazer exercícios", "Ler um livro","estudar java", "react", "node.js", "estudar python"];
console.log("Lista de tarefas:");
  for (let i =0; i < listaDeTarefas.length; i++){
    console.log(`Tarefa ${i}_ ${listaDeTarefas[i]}`);
  }

  //outro jeito de fazer o loop é usando o for...of
  // for...of é uma maneira mais simples de iterar sobre arrays, strings e outros objetos iteráveis.
  // for...of percorre os valores do array, não os índices (chaves).
  console.log("--------------------------------------");
console.log("Lista de tarefas com for...of:");
  for (let lista of listaDeTarefas) {
    console.log(`Tarefa: ${lista}`);

  }

// for...in é usado para iterar sobre as propriedades enumeráveis de um objeto.

console.log("--------------------------------------");
console.log("Lista de tarefas com for...in:");
// for...in percorre os índices (chaves) do array, não os valores diretamente.
for (let index in listaDeTarefas) {
    console.log(`Tarefa ${index}: ${listaDeTarefas[index]}`);
}

// forEach() é um método de array que executa uma função para cada elemento do array, sem retornar um novo array.
console.log("--------------------------------------");
console.log("Lista de tarefas com forEach:");

listaDeTarefas.forEach((tarefa, index) => {

  console.log(`Tarefa ${index}: ${tarefa}`);

});


//while
console.log("--------------------------------------");
console.log("Lista de tarefas com while:");

let i = 0;
while (i < listaDeTarefas.length) {
  console.log(`Tarefa ${i}: ${listaDeTarefas[i]}`);
  i++;
}

//while é um loop que executa enquanto a condição for verdadeira. É útil quando não sabemos o número exato de iterações necessárias.