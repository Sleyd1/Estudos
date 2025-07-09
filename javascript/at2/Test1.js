//Objetos com javascript
const people = [
    {
        name: "João",
        age: 30,
        city: "São Paulo",
        hobbies: ["futebol", "leitura", "viagens"]
    },
    {
        name: "Maria",
        age: 25,
        city: "Rio de Janeiro",
        hobbies: ["dança", "cinema", "gastronomia"],
        dog: {
            name: "Rex",
            age: 5
        }
    }
];

// Destructuring 

const { name: nome, age, city, hobbies, dog: { name: nomeDog, age: idadeDog } } = people[1];
// Desestruturação permite extrair valores de objetos ou arrays de forma mais concisa.

//"name: nome" renomeia a variável "name" para "nome".

console.log(nome);
console.log(age);    
console.log(city);
console.log(people[0].hobbies[1]);
console.log(people[0].hobbies[2]);
console.log(nomeDog);
console.log(idadeDog);

const todos = [{
    id: 1,
    title: "Estudar JavaScript",
    completed: false
}, {
    id: 2,
    title: "Fazer exercícios",
    completed: true
}, {
    id: 3,
    title: "Ler um livro",
    completed: false
}];

const acessandoOId3 =  todos.find(function(todo) {
    return todo.id === 3;
});
// find() retorna o primeiro elemento do array que satisfaz a função de teste fornecida.

console.log(acessandoOId3);

const todosJSON = JSON.stringify(todos);
// JSON.stringify() converte um objeto JavaScript em uma string JSON.
//JSON é um formato leve de troca de dados, fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas.
const todosParse = JSON.parse(todosJSON);
// JSON.parse() converte uma string JSON em um objeto JavaScript.
console.log(todosJSON);
console.log(todosParse);

//quando vamos trabalhar com dados, para enviar ou receber dados de uma API, geralmente usamos o formato JSON.
//o formato JSON é muito utilizado em APIs RESTful, onde os dados são enviados e recebidos em formato JSON.
