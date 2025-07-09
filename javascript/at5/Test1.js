//Selecionando Elementos do DOM
const elemento = document.querySelector('#add-user');
const elemento2 = document.querySelector('.msg');


function adicionarUsuario() {
    elemento2.textContent
    = 'Usuário adicionado com sucesso!';
    setTimeout(() => {
        elemento2.textContent = '';
    }, 2000);
}



console.log(elemento);
