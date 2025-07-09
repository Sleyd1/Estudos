// herança em javascript
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}
// Herança: a classe gato herda da classe Animal
// Isso significa que gato terá todas as propriedades e métodos de Animal, além de poder definir seus próprios métodos e propriedades.
// A classe gato pode ser vista como uma especialização da classe Animal, onde gato é um tipo específico de Animal.
// A palavra-chave `extends` é usada para criar uma classe que herda de outra classe
class gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade); // Chama o construtor da classe pai (Animal)
    }
    //fazerSom() {
    // Sobrescreve o método fazerSom da classe pai (Animal)
    fazerSom() {
        console.log(`${this.nome} faz miau.`);
    }
}   

const animal1 = new Animal("Rex", 5);
animal1.fazerSom();

const gato1 = new gato("Whiskers", 3);
gato1.fazerSom();