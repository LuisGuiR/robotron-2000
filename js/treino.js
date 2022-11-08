const controle = document.querySelectorAll('[data-controle]');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
} )

function manipulaDados(controle, pai){
    const peca = pai.querySelector('[data-contador]');

        if(controle === '-'){
            peca.value = parseInt(peca.value) -1;
        }else{
            peca.value = parseInt(peca.value) +1;
        }
}