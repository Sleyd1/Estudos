// POO 

class Person {
    primeiroNome;
    ultimoNome;
    idade;
    // em javascript a classe tem apenas um construtor, que é chamado quando a classe é instanciada.
    constructor(primeiroNome, ultimoNome, idade) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.idade = idade;
    }
    //não podemos criar outro construtor na mesma classe, mas podemos criar métodos dentro da classe.

    // Método para retornar o nome completo
    nomeCompleto() {
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }

    static speak() {
        return "Olá mundo!";
    }


}

const pessoa1 = new Person("Wesley", "Silva", 30);
//instanciar uma classe significa criar um novo objeto a partir da classe, usando a palavra-chave `new`.
// A instância `pessoa1` agora possui as propriedades e métodos definidos na classe `Person`.

console.log(pessoa1.nomeCompleto());
console.log(pessoa1);

console.log(Person.speak());
//métodos estáticos são chamados diretamente na classe, sem precisar instanciar um objeto