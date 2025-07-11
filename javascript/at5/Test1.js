//Selecionando Elementos do DOM
const elemento = document.querySelectorAll('.item');
const elemento2 = document.querySelector('.msg');


function adicionarUsuario() {
    elemento2.textContent
    = 'Usuário adicionado com sucesso!';
    setTimeout(() => {
        elemento2.textContent = '';
    }, 2000);
}

elemento[0].remove();
elemento[1].remove();
elemento[2].remove();
//remove() remove o elemento do DOM

console.log(elemento);
