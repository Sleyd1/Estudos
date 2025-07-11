//Event
// Eventos são ações que ocorrem no navegador, como cliques, teclas pressionadas, etc.
// Podemos escutar esses eventos e executar funções quando eles ocorrem.

const btn = document.querySelector('#add-user-btn');
const named = document.querySelector('#username');
const password = document.querySelector('#password');
const item = document.querySelectorAll('.item');
const itemtes = document.querySelector('.items');

btn.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    const userName = named.value;

    const userPassword = password.value;

    if (!userName || !userPassword) {
      
        return;
    }
    
    console.log(`Usuário adicionado: ${userName}`);
    console.log('Botão clicado!');

    const div = document.createElement("div");
    div.classList.add('item');
    div.innerHTML = `Nome: ${userName} <br> senha: ${userPassword}`;
    
    itemtes.appendChild(div);

});

/*
named.addEventListener("change", function(event) {
    console.log(`O nome do usuário foi alterado para: ${event.target.value}`);
});
*/
//sintaxe de children 