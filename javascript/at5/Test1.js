//Selecionando Elementos do DOM
const items = document.querySelector('.items'); 
const elemento = document.querySelectorAll('.item');
const elemento2 = document.querySelector('.msg');
const elemento3 = document.querySelector('#username');
const elemento4 = document.querySelector('#password');

function adicionarUsuario() {

    if (elemento3.value == '' || elemento4.value == ''){

        elemento2.textContent = 'Por favor, preencha todos os campos!';

        setTimeout(() => {
        elemento2.textContent = '';
        }, 4000);

        return;
    }

    // Verifica se o campo de nome está vazio

     elemento2.textContent
    = 'Usuário adicionado com sucesso!';
    
    setTimeout(() => {
        elemento2.textContent = '';
    }, 4000);

      // Limpa a mensagem após 6 segundos

    
  
}


/*
items.firstElementChild.remove();
//remove o primeiro elemento do NodeList
items.lastElementChild.remove();
//remove o último elemento do NodeList
items.
*/
/*
items.children[0].remove();
//remove o primeiro elemento do NodeList

items.children[1].remove();
//remove o segundo elemento do NodeList
*/

//items.children[2].remove();
//remove o terceiro elemento do NodeList


/*
elemento[0].remove();
elemento[1].remove();
elemento[2].remove();
//remove() remove o elemento do DOM
*/
