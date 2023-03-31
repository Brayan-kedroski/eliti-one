//Botão para mostrar ou ocultar senha:
const botao = document.getElementById('button1');
const icone1 = document.getElementById('icone-1');
const icone2 = document.createElement('i');
icone2.className = 'far fa-eye';
const senha = document.getElementById('senha');

let visivel = false;

botao.addEventListener('click', function() {
    if(visivel) {
        botao.replaceChild(icone1 , icone2);
        senha.type = 'password';
    } else {
        botao.replaceChild(icone2, icone1);
        senha.type = 'text'
    }
    visivel = !visivel;
});
 
//Botão para efetuar o login:
const meuBotao = document.getElementById('button2');

meuBotao.addEventListener('click', function() {
    window.location.href = '/html/home.html';  
});